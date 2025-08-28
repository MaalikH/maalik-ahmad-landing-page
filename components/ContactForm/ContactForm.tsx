import { useForm } from "react-hook-form";
import { useRef, useEffect, useState } from "react";
import styles from "./ContactForm.module.scss";
import { trackFormSubmission } from '../../lib/gtag';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import classNames from "classnames";

interface FormData {
  name: string;
  contact: string; // Can be either phone or email
  message: string;
}

interface Props {
  content: {
    sectionName: string;
    title: string;
    description: string;
  };
  setIsFooterVisible: (visible: boolean) => void;
}

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contact = ({ content, setIsFooterVisible }: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const hasShownFooter = useRef(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null); // null = not yet determined

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Validation function for phone or email
  const validateContact = (value: string) => {
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone regex (supports various formats)
    const phoneRegex = /^[\+]?[\s\-\(\)]?[\d\s\-\(\)]{10,}$/;
    
    if (emailRegex.test(value) || phoneRegex.test(value)) {
      return true;
    }
    return "Please enter a valid email address or phone number";
  };

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      trackFormSubmission('contact', true);
    } catch (error) {
      console.error('Form submission failed:', error);
      trackFormSubmission('contact', false);
    }
  };

  // 3-Phase GSAP Animation Implementation
  useGSAP(() => {
    // Wait until mobile detection is complete
    if (isMobile === null) return;
    
    console.log('🎬 CONTACT: useGSAP hook starting');
    
    const sectionEl = sectionRef.current;
    const titleEl = titleRef.current;
    const descriptionEl = descriptionRef.current;
    const formEl = formRef.current;
    
    console.log('🎬 CONTACT: Element refs:', {
      sectionEl: !!sectionEl,
      titleEl: !!titleEl, 
      descriptionEl: !!descriptionEl,
      formEl: !!formEl
    });
    
    if (!sectionEl || !titleEl || !descriptionEl || !formEl) {
      console.log('❌ CONTACT: Missing element refs - aborting setup');
      return;
    }

    if (isMobile) {
      // On mobile: disable all animations, show everything immediately
      console.log('📱 CONTACT: Mobile detected - disabling animations');
      gsap.set([titleEl, descriptionEl, formEl], { 
        opacity: 1, 
        y: 0,
        clearProps: "all"
      });
      
      // Simple ScrollTrigger for mobile to show footer when Contact is in view
      ScrollTrigger.create({
        trigger: sectionEl,
        start: "top bottom",
        end: "bottom top",
        markers: false,
        onEnter: () => {
          console.log('📱 CONTACT: Mobile - Contact section entered, showing footer');
          setIsFooterVisible(true);
        }
      });
      
      return; // Exit early on mobile
    }

    // Set initial state for all elements (hidden until animations play)
    console.log('🎬 CONTACT: Setting initial states');
    gsap.set(titleEl, { opacity: 0.2 }); // Start title with low opacity
    gsap.set(descriptionEl, { opacity: 0, y: 30 });
    gsap.set(formEl, { opacity: 0, y: 30 });
    
    // Force a layout recalculation to ensure ScrollTrigger can calculate positions correctly
    void sectionEl.offsetHeight;
    
    console.log('🎬 CONTACT: Initial opacities set:', {
      title: gsap.getProperty(titleEl, "opacity"),
      description: gsap.getProperty(descriptionEl, "opacity"),
      form: gsap.getProperty(formEl, "opacity")
    });

    // Create master timeline for 3-phase animation
    console.log('🎬 CONTACT: Creating master timeline');
    const masterTL = gsap.timeline({ paused: true });

    // Phase 1: Title fades in during pinning (0-20% progress)
    masterTL.to(titleEl, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    }, 0);

    // Phase 2: Description paragraph fades in after title (at 20% progress)
    masterTL.to(descriptionEl, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 0.2);

    // Phase 3: Form fades in last (at 60% progress)
    masterTL.to(formEl, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      onComplete: () => {
        // Show footer when animations complete
        console.log('Contact animations complete - CALLING setIsFooterVisible(true)');
        console.log('hasShownFooter.current before:', hasShownFooter.current);
        setIsFooterVisible(true);
        hasShownFooter.current = true;
        console.log('hasShownFooter.current after:', hasShownFooter.current);
      }
    }, 0.6);

    // Main ScrollTrigger for Contact animations and footer
    console.log('🎬 CONTACT: Creating main ScrollTrigger');
    console.log('🎬 CONTACT: Section position:', sectionEl.getBoundingClientRect());
    
    ScrollTrigger.create({
      trigger: sectionEl,
      start: "top top", // When Contact hits top of viewport
      end: "bottom top", // When Contact leaves viewport  
      markers: false,
      invalidateOnRefresh: true, // Recalculate on window resize
      onEnter: () => {
        console.log('🎯 CONTACT ScrollTrigger FIRED - onEnter');
        console.log('Contact onEnter - restarting animations');
        console.log('masterTL progress before restart:', masterTL.progress());
        masterTL.restart();
        console.log('masterTL progress after restart:', masterTL.progress());
      },
      onEnterBack: () => {
        console.log('Contact onEnterBack - replaying animations');
        console.log('masterTL progress before restart:', masterTL.progress());
        masterTL.restart();
        console.log('masterTL progress after restart:', masterTL.progress());
      },
      onLeave: () => {
        console.log('🚪 Contact onLeave - Contact is leaving viewport (scrolling down)');
        console.log('Current element opacities:');
        console.log('  Title:', gsap.getProperty(titleEl, "opacity"));
        console.log('  Description:', gsap.getProperty(descriptionEl, "opacity"));
        console.log('  Form:', gsap.getProperty(formEl, "opacity"));
      },
      onLeaveBack: () => {
        console.log('🔙 Contact onLeaveBack - Contact is leaving viewport (scrolling up)');
        console.log('Current element opacities:');
        console.log('  Title:', gsap.getProperty(titleEl, "opacity"));
        console.log('  Description:', gsap.getProperty(descriptionEl, "opacity"));
        console.log('  Form:', gsap.getProperty(formEl, "opacity"));
      }
    });
    
    console.log('🎬 CONTACT: ScrollTrigger created successfully');
    
    // Force ScrollTrigger to refresh and recalculate positions
    setTimeout(() => {
      console.log('🔄 CONTACT: Forcing ScrollTrigger refresh');
      ScrollTrigger.refresh(true);
      console.log('🎬 CONTACT: All ScrollTriggers:', ScrollTrigger.getAll());
    }, 100);
    
    // Add manual scroll listener as backup for ScrollTrigger
    const handleScroll = () => {
      const rect = sectionEl.getBoundingClientRect();
      const isAtTop = rect.top <= 50; // When Contact is within 50px of top
      
      if (isAtTop && masterTL.progress() === 0) {
        console.log('🎯 MANUAL SCROLL DETECTION - Contact at top, triggering animations');
        masterTL.restart();
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    console.log('🎬 CONTACT: Manual scroll listener added');

    // Get all form elements for fade-out
    const allFormElements = formEl.querySelectorAll('input, textarea, button');
    
    // Fade-out ScrollTrigger - animate elements out when leaving Contact
    gsap.to([titleEl, descriptionEl, formEl, ...Array.from(allFormElements)], {
      opacity: 0,
      ease: "none",
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionEl,
        start: "bottom bottom", // Start fade-out when bottom of Contact hits bottom of viewport
        end: "center top", // End when center hits top of viewport
        scrub: true,
        markers: false,
        onEnter: () => {
          console.log('💨 Contact fade-out started (scrolling up)');
          console.log('Fading elements:', [titleEl, descriptionEl, formEl, ...Array.from(allFormElements)]);
        },
        onLeaveBack: () => {
          console.log('💫 Contact fade-out reversed (scrolling back down)');
        }
      }
    });

    // Detect when user scrolls up past middle of Contact section
    ScrollTrigger.create({
      trigger: sectionEl,
      start: "center center", // When center of Contact hits center of viewport
      markers: false,
      onLeaveBack: () => {
        console.log('Contact center onLeaveBack - user scrolling up past Contact center, CALLING setIsFooterVisible(false)');
        console.log('Footer state before hiding:', 'should check isFooterVisible in parent');
        setIsFooterVisible(false);
      }
    });

    // No standardized title animations needed - Contact handles its own title animation
    // This eliminates the extra ScrollTriggers that were causing additional scroll space
    // No manual animation trigger needed - navbar scrolls to exact position for natural ScrollTrigger

    console.log('🎬 CONTACT: ScrollTrigger setup complete');
    
    // More robust initialization
    const initializeContact = () => {
      console.log('🔍 CONTACT: Running initializeContact');
      
      // Force ScrollTrigger to recalculate all positions
      ScrollTrigger.refresh(true);
      
      // Check if Contact section is in viewport and animations haven't started
      const rect = sectionEl.getBoundingClientRect();
      const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
      const animationsNotStarted = masterTL.progress() === 0;
      
      console.log('🔍 CONTACT: Viewport check:', {
        rect: rect,
        isInViewport: isInViewport,
        animationsNotStarted: animationsNotStarted,
        timelineProgress: masterTL.progress()
      });
      
      if (isInViewport && animationsNotStarted) {
        console.log('✅ CONTACT: Section detected in viewport - triggering animations manually');
        masterTL.restart();
      } else {
        console.log('⏭️ CONTACT: Conditions not met for manual trigger');
      }
    };
    
    // Initialize immediately
    console.log('🎬 CONTACT: Running immediate initialization');
    initializeContact();
    
    // Also initialize after a delay (for slower renders)
    console.log('🎬 CONTACT: Setting up delayed initializations');
    setTimeout(() => {
      console.log('🕒 CONTACT: 100ms delayed initialization');
      initializeContact();
    }, 100);
    setTimeout(() => {
      console.log('🕒 CONTACT: 500ms delayed initialization');
      initializeContact();
    }, 500);

  }, [isMobile]); // Add isMobile to dependencies

  // Don't render until mobile detection is complete to prevent flash
  if (isMobile === null) {
    return null;
  }

  return (
    <div
      ref={sectionRef}
      className={classNames(styles.contactContent, "container")}
    >
      <div className={styles.contactHeader} ref={titleRef}>
        <h4 className={styles.sectionName}>{content.sectionName}</h4>
        <h2 className={styles.title}>{content.title}</h2>
      </div>
      
      <div className="row">
        <div className="col-md-8">
          <p ref={descriptionRef} className={styles.description}>
            {content.description}
          </p>
        </div>
      </div>
      
      <div ref={formRef} className={styles.ContactForm}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroupContainer}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Email or Phone Number"
                {...register("contact", { 
                  required: "Email or phone number is required",
                  validate: validateContact
                })}
              />
              {errors.contact && <span className={styles.errorMessage}>{errors.contact.message}</span>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <textarea
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.CTAButtonPrimary}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
