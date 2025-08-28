import classNames from "classnames";
import styles from "./AboutMe.module.scss";
import { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import LogoMarquee from "../LogoMarquee/LogoMarquee";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { createStandardizedTitleAnimation, setInitialTitleOpacity } from "../../lib/titleAnimations";

interface Props {
  content: Content;
  setIsFooterVisible?: (visible: boolean) => void;
}

interface Metric {
  label: string;
  value: string;
}

interface Section {
  title: string;
  description: string;
  metrics: Metric[];
}

interface Content {
  title: string;
  sections: {
    tech: Section;
  };
}

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const AboutMe = ({ content, setIsFooterVisible }: Props) => {
  // Only one version of About Me, no pills/tabs logic
  const activeContent = content.sections.tech;
  const [isMetricInView, setIsMetricInView] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null = not yet determined
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const paragraphsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const logoMarqueeRef = useRef<HTMLDivElement>(null);
  const animationCompleted = useRef(false);
  const animationTriggered = useRef(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 3-Phase GSAP Animation Implementation
  useGSAP(() => {
    const sectionEl = sectionRef.current;
    const titleEl = titleRef.current;
    const paragraphsEl = paragraphsRef.current;
    const metricsEl = metricsRef.current;
    const logoMarqueeEl = logoMarqueeRef.current;
    
    if (!sectionEl || !titleEl || !paragraphsEl || !metricsEl || !logoMarqueeEl) return;

    // If mobile, disable GSAP animations and use simple layout
    if (isMobile) {
      console.log('📱 AboutMe: Mobile detected - disabling GSAP animations');
      gsap.set([titleEl, ...Array.from(paragraphsEl.children), logoMarqueeEl], {
        clearProps: "transform,x,y,scale,rotate",
        opacity: 1,
        display: 'block'
      });
      
      // Keep metrics container as flex for proper column layout
      gsap.set(metricsEl, {
        clearProps: "transform,x,y,scale,rotate",
        opacity: 1,
        display: 'flex'
      });
      
      // Enable count up immediately on mobile
      setIsMetricInView(true);
      return;
    }

    // Get paragraph elements
    const paragraphElements = Array.from(paragraphsEl.children) as HTMLElement[];
    
    // Set initial opacity using standardized helper (Phase 1: Title and subtitle)
    setInitialTitleOpacity(titleRef, [], 0.2);
    
    // Set initial state for paragraphs, metrics, and logo marquee (hidden)
    gsap.set(paragraphElements, { opacity: 0, y: 30 });
    gsap.set(metricsEl, { opacity: 0, y: 30 });
    gsap.set(logoMarqueeEl, { opacity: 0, y: 30 });

    // Create master timeline for 3-phase animation
    const masterTL = gsap.timeline({ paused: true });

    // Phase 2: Paragraphs snap in after title is pinned (at 20% progress)
    masterTL.to(paragraphElements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.4
    }, 0.2);

    // Phase 3: Count-up numbers snap in after paragraphs (at 60% progress)
    masterTL.to(metricsEl, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        // Trigger count-up animation after metrics are fully visible
        setIsMetricInView(true);
      }
    }, 0.6);

    // Phase 4: Logo marquee fades in last (at 80% progress)
    masterTL.to(logoMarqueeEl, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 0.8);

    // ScrollTrigger with pinning and timeline control
    const aboutMePinST = ScrollTrigger.create({
      trigger: sectionEl,
      start: "top top+=120px",
      end: "bottom top",
      pin: sectionEl,
      anticipatePin: 1,
      markers: false,
      onUpdate: (self) => {
        // Only update timeline progress if animation hasn't been completed via navbar click
        if (!animationCompleted.current) {
          const progress = self.progress;
          masterTL.progress(progress);
        }
      },
      onEnterBack: () => {
        // Reset animation flags when scrolling back up to AboutMe
        animationCompleted.current = false;
        animationTriggered.current = false;
      }
    });

    // Create standardized title animations (Phase 1)
    const titleAnimations = createStandardizedTitleAnimation({
      sectionRef: sectionRef,
      titleRef: titleRef,
      contentElements: [], // Only title fades, content phases in separately
      pinTrigger: aboutMePinST,
      enableMarkers: false
    });

    // Hide footer when user scrolls back into AboutMe from Contact
    if (setIsFooterVisible) {
      console.log('Creating AboutMe footer ScrollTrigger');
      ScrollTrigger.create({
        trigger: sectionEl,
        start: "top bottom", // When top of AboutMe enters from bottom
        markers: false,
        onEnter: () => {
          console.log('AboutMe onEnter from bottom - hiding footer');
          setIsFooterVisible(false);
        },
        onEnterBack: () => {
          console.log('AboutMe onEnterBack - also trying to hide footer');
          setIsFooterVisible(false);
        },
        onLeave: () => {
          console.log('AboutMe onLeave - user moving away from AboutMe');
        },
        onLeaveBack: () => {
          console.log('AboutMe onLeaveBack - user scrolling back up from AboutMe');
        }
      });
    }

    // Fade-out ScrollTrigger - animate elements out when leaving AboutMe
    gsap.to([titleEl, ...paragraphElements, metricsEl, logoMarqueeEl], {
      opacity: 0,
      ease: "none",
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionEl,
        start: () => aboutMePinST.end, // Start fade-out when pin releases
        end: () => aboutMePinST.end + 300, // Fade over 300px (same as Services)
        scrub: true,
        markers: false,
        invalidateOnRefresh: true
      }
    });

    // Listen for navbar navigation to auto-complete animations
    const handleCompleteAnimations = (event: CustomEvent) => {
      if (event.detail.sectionName === 'aboutMe') {
        // Prevent multiple triggers of the same animation
        if (animationTriggered.current) {
          console.log('AboutMe: Animation already triggered, ignoring');
          return;
        }
        
        console.log('AboutMe: Instantly completing all animations and scrolling to final position');
        animationTriggered.current = true;
        animationCompleted.current = true;
        
        // Instantly complete the timeline to show all content
        masterTL.progress(1.0);
        
        // Immediately scroll to final position
        const scrollToPosition = aboutMePinST.end - 10;
        console.log(`AboutMe: Scrolling to final position ${scrollToPosition} (pin end: ${aboutMePinST.end})`);
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
      }
    };

    window.addEventListener('completeAnimations', handleCompleteAnimations as EventListener);

    // Cleanup function
    return () => {
      titleAnimations?.cleanup();
      window.removeEventListener('completeAnimations', handleCompleteAnimations as EventListener);
    };

  }, [isMobile]);

  // Fallback intersection observer for count-up (in case GSAP doesn't trigger)
  useEffect(() => {
    if (!metricsRef.current || isMetricInView) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsMetricInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, [isMetricInView]);

  // Don't render until mobile detection is complete to prevent flash
  if (isMobile === null) {
    return null;
  }

  return (
    <div
      ref={sectionRef}
      className={classNames(styles.aboutMeContent, "container")}
    >
      {/* Phase 1: Title/subtitle and Phase 3: Count-ups at same level */}
      <div className="row align-items-start">
        <div className="col-md-9">
          <div className={styles.aboutMeHeader} ref={titleRef}>
            <h4 className={styles.sectionName}>{content.title}</h4>
            <h2 className={styles.title}>{activeContent.title}</h2>
          </div>
          
          {/* Phase 2: Paragraphs in same column as title */}
          <div ref={paragraphsRef}>
            {activeContent.description.split('\n\n').map((para, idx) => (
              <p className={styles.description} key={idx}>{para}</p>
            ))}
          </div>
        </div>
        
        {/* Phase 3: Count-up metrics - same row as title */}
        <div className="col-12 col-md-3 d-flex align-items-start justify-content-center justify-content-md-end">
          {activeContent.metrics && activeContent.metrics.length > 0 && (
            <div className={styles.metricContainer} ref={metricsRef}>
              {activeContent.metrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <h1>
                    {isMetricInView ? (
                      <>
                        <CountUp
                          start={0}
                          end={parseInt(metric.value)}
                          duration={3}
                          key={metric.label}
                        />
                        <span>+</span>
                      </>
                    ) : (
                      0
                    )}
                  </h1>
                  <h5>{metric.label}</h5>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div ref={logoMarqueeRef} className={styles.logoMarqueeWrapper}>
        <LogoMarquee />
      </div>
    </div>
  );
};

export default AboutMe;
