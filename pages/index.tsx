import Hero from "../components/Hero/Hero";
import Head from "next/head";
import PortfolioMA from "@/components/Portfolio/portfolio";
import { useEffect, useRef, useState, useCallback } from "react";
import { aboutMeContent } from "@/app/content/aboutMe";
import AboutMe from "@/components/AboutMe/AboutMe";
import Services from "@/components/Services/Services";
import Contact from "@/components/ContactForm/ContactForm";
import { portfolioContent } from "@/app/content/portfolio";
import { heroContent } from "@/app/content/hero";
import { servicesContent } from "@/app/content/services";
import { contactContent } from "@/app/content/contact";
import GarageFooter from '@/components/Footer/GarageFooter';
import { trackSectionView } from '../lib/analytics';
import { useRouter } from 'next/router';
import { shouldRedirectToQuickLinks } from '../lib/deviceDetection';
import { TransitionProvider } from '../context/TransitionContext';
import ProgressBar from '../components/ProgressBar/ProgressBar';

export default function Home() {
  const router = useRouter();
  
  // Check for mobile redirect
  useEffect(() => {
    const hasSeenFullExperience = localStorage.getItem('hasSeenFullExperience');
    if (!hasSeenFullExperience && shouldRedirectToQuickLinks()) {
      router.push('/quicklinks');
    }
  }, [router]);

  // Handle hash-based navigation (when arriving from other pages via /#section)
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const sectionSelectors: Record<string, string> = {
      services: '[class*="servicesContainer"]',
      portfolio: '[class*="portfolioContainer"]',
      aboutMe: '[class*="aboutMeContent"]',
      contact: '[class*="contactContent"]'
    };

    const selector = sectionSelectors[hash];
    if (!selector) return;

    // Small delay to ensure page has rendered and GSAP has initialized
    const timeoutId = setTimeout(() => {
      const section = document.querySelector(selector);
      if (section) {
        if (hash === 'contact') {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: sectionTop + 5, behavior: 'smooth' });
        } else {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        // Clear the hash from URL after scrolling
        window.history.replaceState(null, '', '/');
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  // Show mobile alert for full experience
  useEffect(() => {
    const hasSeenFullExperience = localStorage.getItem('hasSeenFullExperience');
    if (hasSeenFullExperience && typeof window !== 'undefined') {
      // Check if screen width is small tablet or lower (992px is Bootstrap lg breakpoint)
      const isSmallScreen = window.innerWidth < 992;
      if (isSmallScreen) {
        alert('This site is designed to be viewed on desktop, but the experience has been altered to work on this device. We recommend viewing on desktop for the full interactive experience.');
      }
    }
  }, []);

  // Refs
  const portfolioRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const trackedSections = useRef<Set<string>>(new Set());

  // State
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Debug footer state changes
  useEffect(() => {
    // console.log('🦶 FOOTER STATE CHANGED TO:', isFooterVisible);
  }, [isFooterVisible]);

  // Track section view (only once per section)
  const handleSectionView = useCallback((sectionName: string) => {
    if (!trackedSections.current.has(sectionName)) {
      trackedSections.current.add(sectionName);
      trackSectionView(sectionName);
    }
  }, []);

  // Track Hero section on mount
  useEffect(() => {
    handleSectionView('Hero');
  }, [handleSectionView]);

  // Section tracking with IntersectionObserver
  useEffect(() => {
    const sections = [
      { ref: servicesRef.current, name: 'Services' },
      { ref: portfolioRef.current, name: 'Portfolio' },
      { ref: aboutMeRef.current, name: 'About Me' },
      { ref: contactRef.current, name: 'Contact' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            if (sectionName) {
              handleSectionView(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    sections.forEach(({ ref, name }) => {
      if (ref) {
        ref.setAttribute('data-section', name);
        observer.observe(ref);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [handleSectionView]);

  return (
    <TransitionProvider>
      <ProgressBar />
      <Head>
        <title>Maalik Ahmad | Creative Developer & Software Engineer</title>
        <meta name="description" content="Maalik Ahmad (Maalik Hornbuckle) is a creative developer and software engineer specializing in modern web applications and user experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Maalik Ahmad | Creative Developer & Software Engineer" />
        <meta property="og:description" content="Portfolio showcasing modern web applications, creative development projects, and software engineering expertise. Explore featured works and get in touch." />
        <meta property="og:image" content="https://maalikahmad.tech/homescreen.png" />
        <meta property="og:url" content="https://maalikahmad.tech" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Maalik Ahmad Tech" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maalik Ahmad | Creative Developer & Software Engineer" />
        <meta name="twitter:description" content="Portfolio showcasing modern web applications, creative development projects, and software engineering expertise." />
        <meta name="twitter:image" content="https://maalikahmad.tech/homescreen.png" />
        <meta name="twitter:site" content="@maalikahmadtech" />
        <meta name="twitter:creator" content="@maalikahmadtech" />
        
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/maalik-avatar.png" 
          as="image" 
          type="image/png"
          media="(min-width: 768px)"
          fetchPriority="high"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Maalik Ahmad Hornbuckle",
              "alternateName": ["Maalik Ahmad", "Maalik Hornbuckle"],
              "jobTitle": "Software Engineer",
              "image": "/maalik-avatar.png",
              "url": "https://maalikahmad.tech",
              "sameAs": [
                "https://github.com/maalikh",
                "https://linkedin.com/in/maalikhornbuckle",
                "https://twitter.com/maalikahmad"
              ]
            })
          }}
        />
      </Head>

      <section className="section container-fluid bg-black">
        <Hero content={heroContent} />
      </section>
      <section className="section container-fluid" ref={servicesRef}>
        <Services content={servicesContent} />
      </section>
      <section className="section container-fluid" ref={portfolioRef}>
        <PortfolioMA
          content={portfolioContent}
        />
      </section>
      <section className="section container-fluid" ref={aboutMeRef}>
        <AboutMe content={aboutMeContent} setIsFooterVisible={setIsFooterVisible} />
      </section>

      <section className="section container-fluid" ref={contactRef}>
        <Contact content={contactContent} setIsFooterVisible={setIsFooterVisible} />
      </section>
      <GarageFooter isVisible={isFooterVisible} />
    </TransitionProvider>
  );
}
