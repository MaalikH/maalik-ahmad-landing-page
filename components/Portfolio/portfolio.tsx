import { memo, useRef, useEffect, createRef, useState } from "react";
import classNames from "classnames";
import { trackProjectClick } from "../../lib/gtag";
import { useTransition } from "../../context/TransitionContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";
// COMMENTED OUT - Switching to stacked cards with GSAP
// import { Swiper, SwiperSlide } from "swiper/react";
// import type { Swiper as SwiperType } from "swiper";
// import { EffectCards, Pagination } from "swiper/modules";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-cards";
// import "swiper/css/pagination";

// Styles
import styles from "./portfolio.module.scss";

// Types
export interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface PortfolioContent {
  title: string;
  subtitle: string;
  projects: Project[];
}

export interface PortfolioProps {
  content: PortfolioContent;
}

const handleProjectClick = (project: Project) => {
  if (project?.title) {
    trackProjectClick(project.title, "desktop");
  }
};

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const PortfolioMA = memo(({ content }: PortfolioProps) => {
  const { title, subtitle, projects } = content || {};
  const { isFeaturedWorksVisible, setFeaturedWorksRef, startServicesTransition, isServicesTransitioning } = useTransition();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  // const swiperRef = useRef<SwiperType | null>(null); // Swiper instance reference - COMMENTED OUT
  const masterTimelineRef = useRef<gsap.core.Timeline | null>(null); // Timeline reference for stacked cards animation
  // Stacked cards refs
  const stackedCardsSTRef = useRef<ScrollTrigger | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null = not yet determined

  if (cardRefs.current.length !== projects?.length) {
    cardRefs.current = projects?.map(() => createRef<HTMLDivElement>()) || [];
  }

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Register this component with the transition context
  useEffect(() => {
    setFeaturedWorksRef(sectionRef);
  }, [setFeaturedWorksRef]);

  // COMMENTED OUT - Wheel hijacking logic for Swiper
  // const handleWheel = useCallback((event: WheelEvent) => {
  //   // Complex wheel hijacking logic removed
  // }, []);

  // STACKED CARDS IMPLEMENTATION with GSAP ScrollTrigger (desktop only)
  useGSAP(() => {
    // Wait until mobile detection is complete
    if (isMobile === null) return;
    
    const sectionEl = sectionRef.current;
    const titleEl = titleRef.current;
    
    if (!sectionEl || !titleEl || !projects?.length || cardRefs.current.length === 0) return;

    // Get all card elements
    const cardElements = cardRefs.current
      .map(ref => ref.current)
      .filter(Boolean) as HTMLDivElement[];
    
    if (cardElements.length === 0) return;

    if (isMobile) {
      // Reset all GSAP transforms on mobile - clear any desktop positioning
      gsap.set(sectionEl, { 
        clearProps: "transform,x,y,scale,rotate",
        opacity: 1 
      });
      gsap.set(titleEl, { 
        clearProps: "transform,x,y,scale,rotate",
        opacity: 1 
      });
      gsap.set(cardElements, { 
        clearProps: "transform,x,y,scale,rotate",
        opacity: 1,
        display: 'block' // Ensure they're visible
      });
      return; // Exit early on mobile
    }

    console.log('🎮 Portfolio: Initializing stacked cards approach');
    console.log(`🎮 Portfolio: ${projects.length} stacked cards`);
    
    if (cardElements.length === 0) return;

    // Set initial states for stacked cards - all start below center position
    cardElements.forEach((card, index) => {
      gsap.set(card, { 
        opacity: index === 0 ? 1 : 0, // Only first card visible initially
        y: window.innerHeight * 0.3, // Start below center (relative to top: 50%)
        scale: 0.8,
        rotate: 0,
        zIndex: index + 1 // Later cards have higher z-index (appear on top)
      });
    });

    // Create master timeline for stacked cards transitions
    const masterTL = gsap.timeline({ paused: true });
    masterTimelineRef.current = masterTL;

    // Create stacked card transitions - cards scroll up from bottom and stack on top
    cardElements.forEach((card, index) => {
      // Each card scrolls up from bottom to center position during its portion of the timeline
      const startTime = index * 1.0; // 1 second per card transition
      
      // For cards after the first, fade them in as they start their animation
      if (index > 0) {
        masterTL.to(card, {
          opacity: 1,
          duration: 0.3,
          ease: "none"
        }, startTime - 0.2); // Fade in slightly before movement starts
      }
      
      masterTL.to(card, {
        y: -200, // Move higher up on screen (increased from -150)
        scale: 1, // Scale up to full size
        duration: 1.2,
        ease: "power2.out"
      }, startTime);
      
      // When the NEXT card starts coming up, add tilt to current card
      if (index < cardElements.length - 1) {
        const tiltDirection = index % 2 === 0 ? 3 : -3; // Alternate tilt: +3° for even, -3° for odd
        
        masterTL.to(card, {
          rotate: tiltDirection,
          duration: 0.4,
          ease: "power2.out"
        }, startTime + 1.0); // Start tilting when next card begins its animation
      }
    });

    // Phase 3: Final scroll-up and fade-out (like Services section)
    const finalPhaseStart = cardElements.length * 1.0 + 0.5; // After all cards are shown + small pause
    
    // First: Move all cards up towards title position (keep opacity 1 and current scale)
    masterTL.to(cardElements, {
      y: -300, // Move further up towards title
      duration: 1.2,
      ease: "power2.inOut",
      stagger: 0.1 // Slight stagger for better visual
    }, finalPhaseStart)
    
    // Then: Scroll up AND fade out cards AND title together when they meet
    .to([...cardElements, titleEl], {
      y: "-=200", // Continue scrolling up during fade-out
      opacity: 0,
      duration: 1.0,
      ease: "power2.out",
      stagger: 0.05 // Quick staggered scroll and fade-out for cards and title together
    }, finalPhaseStart + 1.2) // Start scroll+fade-out after initial movement completes
    
    // Add empty space in timeline to allow natural scrolling after fade-out
    .to({}, {
      duration: 1.0 // Empty animation to extend timeline and allow unpinning
    }, finalPhaseStart + 2.0);

    // ScrollTrigger for stacked cards
    stackedCardsSTRef.current = ScrollTrigger.create({
      trigger: sectionEl,
      start: "top top+=120px", // Reverted back - this is for title positioning
      end: () => `+=${window.innerHeight * (cardElements.length + 2.5)}`, // Extended to allow natural scroll after fade-out
      pin: sectionEl,
      anticipatePin: 1,
      scrub: 0.8, // Smoother scrub value for better control
      markers: false,
      onUpdate: (self) => {
        console.log('🔄 STACKED CARDS UPDATE:', {
          progress: Math.round(self.progress * 100) + '%',
          direction: self.direction === 1 ? 'DOWN' : 'UP',
          activeCard: Math.floor(self.progress * cardElements.length)
        });
        
        // Update master timeline based on scroll progress
        if (masterTimelineRef.current) {
          masterTimelineRef.current.progress(self.progress);
        }
        
        // Start transition at 85% progress (like Services section)
        if (self.progress >= 0.85 && !isServicesTransitioning) {
          console.log('🎬 Portfolio: Starting section transition at 85%');
          startServicesTransition(); // Reuse Services transition context
        }
      },
      onEnter: () => {
        console.log('🔥 STACKED CARDS: Section pinned');
      },
      onLeave: () => {
        console.log('🔥 STACKED CARDS: Section unpinned');
      }
    });

    // Fade-in ScrollTrigger - coordinate with Services fade-out
    gsap.to([sectionEl, titleEl], {
      opacity: 1,
      ease: "none",
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionEl,
        start: "top bottom",
        end: "top top+=200px",
        scrub: true,
        markers: false,
        invalidateOnRefresh: true
      }
    });

    // Cleanup function
    return () => {
      console.log('🎮 Portfolio: Cleaning up stacked cards');
      if (stackedCardsSTRef.current) {
        stackedCardsSTRef.current.kill();
        stackedCardsSTRef.current = null;
      }
    };

  }, [projects?.length, isMobile]);

  // Initial setup - only run once
  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    // Initial state: positioned at correct pinning point but invisible
    gsap.set(sectionRef.current, { 
      opacity: 0,
      y: 0 // No offset - let ScrollTrigger handle positioning naturally
    });
    
    // Set initial opacity for title - ensure it starts invisible
    gsap.set(titleRef.current, { opacity: 0, immediateRender: true });
    titleRef.current.style.opacity = '0'; // Force inline style
    
    // Cards opacity is handled by the main GSAP setup - no override needed

    // Fallback: ensure section becomes visible after a delay if transition system fails
    const fallbackTimer = setTimeout(() => {
      if (sectionRef.current && sectionRef.current.style.opacity === '0') {
        gsap.to(sectionRef.current, { opacity: 1, duration: 0.5 });
        gsap.to(titleRef.current, { opacity: 1, duration: 0.5 });
        // Cards opacity is handled by GSAP timeline - no fallback needed
      }
    }, 3000); // 3 second fallback

    return () => clearTimeout(fallbackTimer);
  }, []); // Only run once on mount

  if (!content || !projects?.length) {
    return null;
  }

  // Don't render until mobile detection is complete to prevent flash
  if (isMobile === null) {
    return null;
  }

  return (
    <div
      ref={sectionRef}
      className={classNames("container", styles.portfolioContainer)}
      aria-hidden={!isFeaturedWorksVisible}
      tabIndex={isFeaturedWorksVisible ? 0 : -1}
    >
        <div className={styles.portfolioHeader} ref={titleRef}>
          <h4 className={styles.portfolioTitle}>{title || ""}</h4>
          <h1 className={styles.portfolioHeading}>{subtitle || ""}</h1>
        </div>
        <div className={styles.portfolioCarousel}>
          {/* Stacked Cards Container */}
          <div className="row justify-content-center">
            <div className="col-10">
              <div className={styles.stackedCardsContainer}>
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className={classNames("card", styles.portfolioCard, styles.stackedCard)}
                    ref={cardRefs.current[index]}
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleProjectClick(project)}
                      style={{
                        position: "relative",
                        display: "block",
                        width: "100%",
                        height: "auto",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.title || ""}
                        className={styles.projectImage}
                        width={0}
                        height={0}
                        loading={index <= 1 ? "eager" : "lazy"}
                        priority={index <= 1}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                        quality={90}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
});

PortfolioMA.displayName = "PortfolioMA";

export default PortfolioMA;