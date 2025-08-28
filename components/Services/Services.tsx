import { useRef, createRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

import classNames from "classnames";
import styles from "./Services.module.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTransition } from "../../context/TransitionContext";

interface Service {
  title: string;
  description: string;
  icon: IconDefinition;
}

interface Props {
  content: {
    sectionName: string;
    title: string;
    services: Service[];
  };
}

gsap.registerPlugin(ScrollTrigger);

export default function Services({ content }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const { startServicesTransition, completeServicesTransition, isServicesTransitioning, setIsServicesTransitioning } = useTransition();
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(0); // Start with first card hovered
  
  if (cardRefs.current.length !== content.services.length) {
    cardRefs.current = content.services.map(() => createRef<HTMLDivElement>());
  }

  // initialize Lenis for horizontal scrolling of cards
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;
    const lenis = new Lenis({
      orientation: "horizontal",
      wrapper: wrapper,
      content: content,
      smoothWheel: true,
      lerp: 0.5,
    });
    function animate(time: number) {
      lenis.raf(time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    return () => lenis.destroy();
  }, []);

  // Pure GSAP-driven scroll behavior
  useGSAP(() => {
    const sectionEl = sectionRef.current;
    const titleEl = titleRef.current;
    const wrapperEl = wrapperRef.current;
    const contentEl = contentRef.current;
    
    if (!sectionEl || !titleEl || !wrapperEl || !contentEl) return;
    
    const cardEls = Array.from(contentEl.children) as HTMLElement[];
    if (cardEls.length < 2) return;

    // Set initial opacity to 0.2 for fade-in effect
    gsap.set([titleEl, ...cardEls], { opacity: 0.2 });

    // Calculate dimensions (same as your original)
    const style = getComputedStyle(contentEl);
    const gap = parseFloat(style.getPropertyValue("column-gap") || style.getPropertyValue("gap"));
    const cardWidth = cardEls[0].getBoundingClientRect().width;
    const numCards = cardEls.length;
    const totalGap = gap * (numCards - 1);
    const totalWidth = cardWidth * numCards + totalGap;
    
    // Initial offset: so only 2 cards are visible (your original calculation)
    const initialOffset = totalWidth - (cardWidth * 2 + gap);
    gsap.set(contentEl, { x: initialOffset }); // Start with cards 3-4 hidden
    gsap.set(wrapperEl, { y: 300 }); // Start with larger gap - cards halfway down page

    // Create master timeline (not scroll-driven)
    const masterTL = gsap.timeline({ paused: true });

    // Phase 1: Horizontal card movement (starts after fade-in completes)
    masterTL.fromTo(contentEl, 
      { x: initialOffset }, // From hidden position
      {
        x: 0, // To fully revealed
        duration: 2,
        ease: "power2.out"
      }, 0.05); // Start at 5% progress (after fade-in completes)

    // Phase 2: Vertical gap closure (duration: 1.5 seconds)
    masterTL.to(wrapperEl, {
      y: 0, // Move from initial gap (300px) to no gap (0px)
      duration: 1.5,
      ease: "power2.inOut"
    }, 1.55); // Start at 5.5% progress (slightly after horizontal movement)

    // Separate ScrollTrigger for fade-in BEFORE pinning starts
    ScrollTrigger.create({
      trigger: sectionEl,
      start: "top bottom-=200px", // Start fading when section is 200px from bottom of viewport
      end: "top top+=120px", // Complete fade exactly when pinning starts
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const opacity = 0.2 + (progress * 0.8); // Fade from 0.2 to 1.0
        gsap.set([titleEl, ...cardEls], { opacity: opacity, immediateRender: true });
      }
    });

    // ScrollTrigger with natural pinning + timeline control
    const servicesPinST = ScrollTrigger.create({
      trigger: sectionEl,
      start: "top top+=120px",
      end: "bottom top-=200px", // Allow section to scroll longer before releasing
      pin: sectionEl, // Pin the entire section naturally like before
      anticipatePin: 1,
      markers: false,
      onUpdate: (self) => {
        // Use scroll progress to control timeline
        const progress = self.progress;
        masterTL.progress(progress);
        
        // Ensure content stays at full opacity during pinned sequence
        gsap.set([titleEl, ...cardEls], { opacity: 1, immediateRender: true });
        
        // Disable hover during entire scroll sequence (both horizontal and vertical phases)
        cardEls.forEach(card => {
          if (self.isActive) {
            card.classList.add('scrolling');
          } else {
            card.classList.remove('scrolling');
          }
        });

        // Trigger transition handoff when Services animation is nearly complete
        if (progress >= 0.9 && !self.isActive) {
          startServicesTransition();
        }
      },
      onEnter: () => {
        // Don't force opacity here - let the onUpdate handle it
      },
      onLeave: () => {
        // Complete the transition when Services section leaves viewport
        completeServicesTransition();
      },
      onEnterBack: () => {
        // Reset transition state when scrolling back up
        if (isServicesTransitioning) {
          setIsServicesTransitioning(false);
        }
        
        // Smooth fade in content when scrolling back up
        gsap.to([titleEl, ...cardEls], { 
          opacity: 1, 
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1 // Stagger the fade-in for a nice effect
        });
      }
    });

        // Fade-out ScrollTrigger - start right after pin releases; scrub with scroll
    gsap.to([titleEl, ...cardEls], {
      opacity: 0,
      ease: "none",
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionEl,
        start: () => servicesPinST.end,
        end: () => servicesPinST.end + 300,
        scrub: true,
        markers: false,
        invalidateOnRefresh: true
      }
    });

    // Listen for navbar navigation to auto-complete animations
    const handleCompleteAnimations = (event: CustomEvent) => {
      if (event.detail.sectionName === 'services') {
        console.log('Services: Smoothly animating rail to show all cards');
        
        // Animate the timeline progress smoothly to 60% (show all cards, no gap movement)
        // This simulates natural scroll behavior
        gsap.to(masterTL, {
          progress: 0.6, // Show all 4 cards but don't trigger gap closure
          duration: 2.0,  // Smooth 2-second animation
          ease: "power2.out" // Natural easing like scroll
        });
      }
    };

    window.addEventListener('completeAnimations', handleCompleteAnimations as EventListener);

    // Cleanup
    return () => {
      window.removeEventListener('completeAnimations', handleCompleteAnimations as EventListener);
    };

  }, [content.services.length, startServicesTransition, completeServicesTransition, isServicesTransitioning, setIsServicesTransitioning]);


  return (
    <div
      ref={sectionRef}
      className={classNames("container", styles.servicesContainer, {
        [styles.transitioning]: isServicesTransitioning
      })}
    >
      <div className={styles.servicesTitleSection} ref={titleRef}>
        <h4 className={styles.sectionName}>
          {content.sectionName}
        </h4>
        <h2 className={styles.title}>{content.title}</h2>
      </div>
      <div className={styles.servicesCardsWrapper}>
        <div ref={wrapperRef} style={{ overflow: "hidden", width: "100%" }}>
          <div
            ref={contentRef}
            className={styles.serviceCards}
            style={{ display: "flex", gap: "2.5rem" }}
          >
            {content.services.map((service, index) => (
              <div
                key={index}
                className={classNames("card", styles.serviceCard, {
                  [styles.firstCardHovered]: hoveredCardIndex === 0 && index === 0,
                  [styles.cardHovered]: hoveredCardIndex === index && index !== 0
                })}
                ref={cardRefs.current[index]}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => {}} // Keep the last hovered card active
              >
                <div>
                  <div className={styles.iconContainer}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={service.icon}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}