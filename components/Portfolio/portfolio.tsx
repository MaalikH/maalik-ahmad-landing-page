import { memo, useRef, useEffect, createRef, useState, useCallback } from "react";
import classNames from "classnames";
import { trackProjectClick } from "../../lib/analytics";
import { useTransition } from "../../context/TransitionContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Image from "next/image";

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
  const { isFeaturedWorksVisible, setFeaturedWorksRef } = useTransition();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollIndexRef = useRef(0); // Tracks card index during scroll without triggering re-renders
  const isPinnedRef = useRef(false); // Tracks whether section is currently pinned (scroll-driven)

  // Initialize card refs
  if (cardRefs.current.length !== projects?.length) {
    cardRefs.current = projects?.map(() => createRef<HTMLDivElement>()) || [];
  }

  // Generate grid template based on active index
  // Active card gets 20fr, others get 1fr (like the CodePen)
  const getGridTemplate = useCallback((active: number) => {
    if (!projects?.length) return "";
    return projects.map((_, index) => index === active ? "20fr" : "1fr").join(" ");
  }, [projects]);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Register this component with the transition context
  useEffect(() => {
    setFeaturedWorksRef(sectionRef);
  }, [setFeaturedWorksRef]);

  // Handle card click - clicked card becomes active
  const handleCardClick = useCallback((clickedIndex: number, project: Project, e: React.MouseEvent) => {
    if (isMobile) return;

    // Use scrollIndexRef during pinned scroll, activeIndex otherwise
    const currentActive = isPinnedRef.current ? scrollIndexRef.current : activeIndex;

    // If clicking on active card, open the link
    if (clickedIndex === currentActive) {
      handleProjectClick(project);
      return; // Let the link handle navigation
    }

    // If clicking on any other card, make it active
    e.preventDefault();
    setActiveIndex(clickedIndex);
  }, [isMobile, activeIndex]);

  // Update grid template when activeIndex changes (click-driven)
  useEffect(() => {
    if (isMobile || !cardsContainerRef.current) return;

    // Re-enable CSS transition for click-driven changes
    if (!isPinnedRef.current) {
      cardsContainerRef.current.style.transitionDuration = '';
    }
    const gridTemplate = getGridTemplate(activeIndex);
    cardsContainerRef.current.style.setProperty('--active-grid', gridTemplate);
    scrollIndexRef.current = activeIndex;
  }, [activeIndex, isMobile, getGridTemplate]);

  // GSAP Animation Setup - matching Services scroll pattern with PINNING
  useGSAP(() => {
    if (isMobile === null) return;

    const sectionEl = sectionRef.current;
    const titleEl = titleRef.current;
    const containerEl = cardsContainerRef.current;

    if (!sectionEl || !titleEl || !containerEl || !projects?.length) return;

    // Mobile: Reset styles and exit early
    if (isMobile) {
      gsap.set(sectionEl, { clearProps: "all", opacity: 1 });
      gsap.set(titleEl, { clearProps: "all", opacity: 1 });
      gsap.set(containerEl, { clearProps: "all", opacity: 1 });
      return;
    }

    // Desktop: Set initial grid template
    containerEl.style.setProperty('--active-grid', getGridTemplate(0));
    containerEl.style.setProperty('--total-cards', String(projects.length));

    // Set initial opacity for fade-in effect (matches Services line 110)
    gsap.set([titleEl, containerEl], { opacity: 0.2 });

    // Initial vertical offset - cards start lower, move up toward title (matches Services y: 300)
    gsap.set(containerEl, { y: 300 });

    // Master timeline for vertical gap closure (paused, controlled by scroll)
    const masterTL = gsap.timeline({ paused: true });
    masterTL.to(containerEl, {
      y: 0,
      duration: 1.5,
      ease: "power2.inOut"
    }, 0);

    // Separate ScrollTrigger for fade-in BEFORE pinning starts (matches Services lines 145-155)
    const fadeInST = ScrollTrigger.create({
      trigger: sectionEl,
      start: "top bottom-=200px", // Start fading when section is 200px from bottom of viewport
      end: "top top+=120px",      // Complete fade exactly when pinning starts
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const opacity = 0.2 + (progress * 0.8); // Fade from 0.2 to 1.0
        gsap.set([titleEl, containerEl], { opacity: opacity, immediateRender: true });
      }
    });

    // Phase boundary: first 60% of pinned scroll for card navigation, last 40% for gap closure
    const cardPhaseEnd = 0.6;

    // Set initial card content states — active card full, others dimmed
    const cardEls = cardRefs.current.map(r => r.current).filter(Boolean) as HTMLDivElement[];
    cardEls.forEach((el, i) => {
      const content = el.querySelector(`.${styles.cardContent}`) as HTMLElement;
      if (!content) return;
      gsap.set(content, {
        opacity: i === 0 ? 1 : 0.4,
        scale: i === 0 ? 1 : 0.97,
      });
    });

    // Helper: directly update grid on DOM without React re-render + crossfade cards
    const applyCardIndex = (index: number) => {
      if (index === scrollIndexRef.current) return;
      scrollIndexRef.current = index;
      // Short transition for a fluid grid resize
      containerEl.style.transitionDuration = '0.35s';
      const grid = projects.map((_, i) => i === index ? "20fr" : "1fr").join(" ");
      containerEl.style.setProperty('--active-grid', grid);

      // Crossfade card content — active brightens + scales up, others dim + scale down
      cardEls.forEach((el, i) => {
        const content = el.querySelector(`.${styles.cardContent}`) as HTMLElement;
        if (!content) return;
        gsap.to(content, {
          opacity: i === index ? 1 : 0.4,
          scale: i === index ? 1 : 0.97,
          duration: 0.4,
          ease: "power2.out",
          overwrite: true,
        });
      });
    };

    // ScrollTrigger with natural pinning + timeline control (matches Services lines 158-211)
    const portfolioPinST = ScrollTrigger.create({
      trigger: sectionEl,
      start: "top top+=120px",
      end: () => "+=" + (projects.length * 800 + 600), // ~800px per card + 600px for gap closure
      pin: sectionEl,           // Pin the entire section naturally like Services
      anticipatePin: 1,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress < cardPhaseEnd) {
          // Phase 1: Card navigation — scroll advances through cards
          const cardProgress = progress / cardPhaseEnd;
          const newIndex = Math.min(
            Math.floor(cardProgress * projects.length),
            projects.length - 1
          );
          applyCardIndex(newIndex);
          masterTL.progress(0); // Hold vertical position (gap stays at 300)
        } else {
          // Phase 2: Gap closure — vertical gap animates from 300 → 0
          const gapProgress = (progress - cardPhaseEnd) / (1 - cardPhaseEnd);
          masterTL.progress(gapProgress);
        }

        // Ensure content stays at full opacity during pinned sequence
        gsap.set([titleEl, containerEl], { opacity: 1, immediateRender: true });
      },
      onEnter: () => {
        isPinnedRef.current = true;
      },
      onLeave: () => {
        isPinnedRef.current = false;
        // Restore original CSS transition duration and sync React state
        containerEl.style.transitionDuration = '';
        setActiveIndex(scrollIndexRef.current);
        // Reset card content styles so CSS takes over
        cardEls.forEach((el) => {
          const content = el.querySelector(`.${styles.cardContent}`) as HTMLElement;
          if (content) gsap.set(content, { clearProps: "opacity,scale" });
        });
      },
      onEnterBack: () => {
        isPinnedRef.current = true;
        // onUpdate will set the correct card index from progress
        gsap.to([titleEl, containerEl], {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        });
      },
      onLeaveBack: () => {
        isPinnedRef.current = false;
        // Restore original CSS transition duration and sync React state to first card
        containerEl.style.transitionDuration = '';
        setActiveIndex(0);
        scrollIndexRef.current = 0;
        // Reset card content styles so CSS takes over
        cardEls.forEach((el) => {
          const content = el.querySelector(`.${styles.cardContent}`) as HTMLElement;
          if (content) gsap.set(content, { clearProps: "opacity,scale" });
        });
      }
    });

    // Fade-out ScrollTrigger - start right after pin releases; scrub with scroll (matches Services lines 214-226)
    const fadeOutTween = gsap.to([titleEl, containerEl], {
      opacity: 0,
      ease: "none",
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionEl,
        start: () => portfolioPinST.end,
        end: () => portfolioPinST.end + 300,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true
      }
    });

    // Cleanup - MUST kill ScrollTriggers to prevent duplicates
    return () => {
      fadeInST.kill();
      portfolioPinST.kill();
      fadeOutTween.scrollTrigger?.kill();
      fadeOutTween.kill();
    };

  }, [projects?.length, isMobile, getGridTemplate, setActiveIndex]);

  // Initial setup - ensure section is visible, let GSAP handle individual elements
  useEffect(() => {
    if (!sectionRef.current) return;

    // Section container should always be visible - GSAP controls title/cards opacity
    gsap.set(sectionRef.current, { opacity: 1 });
  }, []);

  if (!content || !projects?.length) {
    return null;
  }

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
        <div
          className={styles.stackedCardsContainer}
          ref={cardsContainerRef}
          style={{
            '--total-cards': projects.length,
          } as React.CSSProperties}
        >
          {projects.map((project, index) => {
            const isActiveCard = index === activeIndex;

            return (
              <div
                key={project.id}
                className={classNames(styles.stackedCard, {
                  [styles.activeCard]: isActiveCard && !isMobile,
                })}
                ref={cardRefs.current[index]}
                onClick={(e) => handleCardClick(index, project, e)}
                style={{
                  '--index': index,
                  zIndex: projects.length - Math.abs(index - activeIndex),
                } as React.CSSProperties}
              >
                <div className={styles.cardContent}>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!isActiveCard && !isMobile) {
                        e.preventDefault();
                      }
                    }}
                    className={styles.cardLink}
                  >
                    <Image
                      src={project.image}
                      alt={project.title || ""}
                      className={styles.projectImage}
                      fill
                      loading={index <= 1 ? "eager" : "lazy"}
                      priority={index <= 1}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      quality={90}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

PortfolioMA.displayName = "PortfolioMA";

export default PortfolioMA;
