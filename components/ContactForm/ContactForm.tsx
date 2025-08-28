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

  const onSubmit = async () => {
    try {
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
    
    const sectionEl = sectionRef.current;
    const titleEl = titleRef.current;
    const descriptionEl = descriptionRef.current;
    const formEl = formRef.current;
    
    if (!sectionEl || !titleEl || !descriptionEl || !formEl) {
      return;
    }

    if (isMobile) {
      // On mobile: disable all animations, show everything immediately
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
          setIsFooterVisible(true);
        }
      });
      
      return; // Exit early on mobile
    }

    // Set initial state for all elements (hidden until animations play)
    gsap.set(titleEl, { opacity: 0.2 }); // Start title with low opacity
    gsap.set(descriptionEl, { opacity: 0, y: 30 });
    gsap.set(formEl, { opacity: 0, y: 30 });
    
    // Force a layout recalculation to ensure ScrollTrigger can calculate positions correctly
    void sectionEl.offsetHeight;

    // Create master timeline for 3-phase animation
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
        setIsFooterVisible(true);
        hasShownFooter.current = true;
      }
    }, 0.6);

    // Main ScrollTrigger for Contact animations and footer
    ScrollTrigger.create({
      trigger: sectionEl,
      start: "top top", // When Contact hits top of viewport
      end: "bottom top", // When Contact leaves viewport  
      markers: false,
      invalidateOnRefresh: true, // Recalculate on window resize
      onEnter: () => {
        masterTL.restart();
      },
      onEnterBack: () => {
        masterTL.restart();
      }
    });
    
    // Force ScrollTrigger to refresh and recalculate positions
    setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 100);
    
    // Add manual scroll listener as backup for ScrollTrigger
    const handleScroll = () => {
      const rect = sectionEl.getBoundingClientRect();
      const isAtTop = rect.top <= 50; // When Contact is within 50px of top
      
      if (isAtTop && masterTL.progress() === 0) {
        masterTL.restart();
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    // Get all form elements for fade-out
    const allFormElements = formEl.querySelectorAll('input, textarea, button');
    
    // Fade-out ScrollTrigger - animate elements out when leaving Contact
    gsap.to([titleEl, descriptionEl, formEl, ...Array.from(allFormElements)], {
      opacity: 0,
      ease: "none",
      immediateRender: false,
      scrollTrigger: {
        trigger: sectionEl,
        start: "bottom top",
        end: "bottom bottom",
        scrub: true,
        markers: false,
        invalidateOnRefresh: true
      }
    });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

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
