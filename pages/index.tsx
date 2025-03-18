import ReactFullpage from "@fullpage/react-fullpage";
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
import Swiper from "swiper";
import GarageFooter from '@/components/Footer/GarageFooter';
import { trackSectionView } from '../lib/gtag';
import GoogleAnalytics from '@/app/GoogleAnalytics';
import { useRouter } from 'next/router';
import { shouldRedirectToQuickLinks } from '../lib/deviceDetection';

// Types
interface SectionAnchor {
  anchor: string;
  index: number;
  item: HTMLElement;
  isFirst: boolean;
  isLast: boolean;
}

// Constants
const SCROLL_SENSITIVITY = 1.25;
const BUFFER_SCROLL_THRESHOLD = 35;
const MAX_SCROLL_SPEED = 200;
const SCROLL_ANIMATION_DURATION = 400;

export default function Home() {
  const router = useRouter();
  
  // Check for mobile redirect
  useEffect(() => {
    if (shouldRedirectToQuickLinks()) {
      router.push('/quicklinks');
    }
  }, [router]);

  // Refs
  const portfolioRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollDeltaRef = useRef(0);

  // State
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isFullpageScrollingEnabled, setIsFullpageScrollingEnabled] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Ensure fullpage.js is properly initialized
  const fullpageLicenseKey = process.env.NEXT_PUBLIC_FULLPAGE_LICENSE || 'GPL3';

  // Handlers
  const handlePortfolioVisibility = useCallback((isVisible: boolean) => {
    setIsPortfolioVisible(isVisible);
    setIsFullpageScrollingEnabled(!isVisible);
    if (window.fullpage_api) {
      window.fullpage_api.setAllowScrolling(!isVisible);
    }
  }, []);

  const handleWheel = useCallback((event: WheelEvent) => {
    const swiper = swiperInstanceRef.current;
    if (!swiper || !isPortfolioVisible || isFullpageScrollingEnabled) return;

    event.preventDefault();

    let delta = event.deltaY / SCROLL_SENSITIVITY;
    delta = Math.max(-MAX_SCROLL_SPEED, Math.min(MAX_SCROLL_SPEED, delta));
    scrollDeltaRef.current += delta;

    swiper.translateTo(
      swiper.translate - scrollDeltaRef.current,
      SCROLL_ANIMATION_DURATION
    );

    const upwardThreshold = scrollDeltaRef.current < 0 ? BUFFER_SCROLL_THRESHOLD * 0.7 : BUFFER_SCROLL_THRESHOLD;

    if (
      (swiper.progress <= 0.05 && scrollDeltaRef.current < -upwardThreshold) || 
      (swiper.progress >= 0.95 && scrollDeltaRef.current > BUFFER_SCROLL_THRESHOLD)
    ) {
      setIsFullpageScrollingEnabled(true);
      if (window.fullpage_api) {
        window.fullpage_api.setAllowScrolling(true);
      }
      scrollDeltaRef.current = 0;
    }
  }, [isPortfolioVisible, isFullpageScrollingEnabled]);

  // Effects
  useEffect(() => {
    const currentPortfolioRef = portfolioRef.current;
    if (!currentPortfolioRef || observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        handlePortfolioVisibility(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(currentPortfolioRef);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [handlePortfolioVisibility]);

  useEffect(() => {
    if (isPortfolioVisible) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      window.removeEventListener("wheel", handleWheel);
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isPortfolioVisible, handleWheel]);

  const handleAfterLoad = useCallback((origin: SectionAnchor, destination: SectionAnchor) => {
    setIsFooterVisible(destination.anchor === 'contact');
    trackSectionView(destination.anchor);
  }, []);

  return (
    <>
      <Head>
        <title>Maalik Ahmad | Creative Developer & Software Engineer</title>
        <meta name="description" content="Maalik Ahmad (Maalik Hornbuckle) is a creative developer and software engineer specializing in modern web applications and user experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Maalik Ahmad | Creative Developer" />
        <meta property="og:description" content="Creative developer and software engineer specializing in modern web applications." />
        <meta property="og:image" content="/maalik-avatar.png" />
        <meta property="og:url" content="https://maalikahmad.tech" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Maalik Ahmad | Creative Developer" />
        <meta name="twitter:description" content="Creative developer and software engineer specializing in modern web applications." />
        <meta name="twitter:image" content="/maalik-avatar.png" />
        
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

      <GoogleAnalytics />

      <ReactFullpage
        credits={{ enabled: false }}
        licenseKey={fullpageLicenseKey}
        navigation
        anchors={["hero", "portfolio", "aboutMe", "services", "contact"]}
        scrollingSpeed={700}
        afterLoad={handleAfterLoad}
        onLeave={(_origin, destination) => {
          // Handle section changes
          const sectionName = destination.anchor?.toString();
          if (sectionName) {
            trackSectionView(sectionName);
          }
        }}
        render={() => (
          <ReactFullpage.Wrapper>
            <section className="section container-fluid bg-black">
              <Hero content={heroContent} />
            </section>
            <section className="section container-fluid" ref={portfolioRef}>
              <PortfolioMA
                swiperInstanceRef={swiperInstanceRef}
                content={portfolioContent}
              />
            </section>
            <section className="section container-fluid">
              <AboutMe content={aboutMeContent} />
            </section>
            <section className="section container-fluid">
              <Services content={servicesContent} />
            </section>
            <section className="section container-fluid">
              <Contact content={contactContent} />
            </section>
          </ReactFullpage.Wrapper>
        )}
      />
      <GarageFooter isVisible={isFooterVisible} />
    </>
  );
}
