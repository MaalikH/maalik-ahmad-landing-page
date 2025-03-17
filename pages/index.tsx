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

// Types
interface SectionAnchor {
  anchor: string;
  index: number;
  item: HTMLElement;
  isFirst: boolean;
  isLast: boolean;
}

interface FullpageCallback {
  origin: SectionAnchor;
  destination: SectionAnchor;
  direction: string;
}

// Constants
const SCROLL_SENSITIVITY = 1;
const BUFFER_SCROLL_THRESHOLD = 50;
const MAX_SCROLL_SPEED = 250;
const SCROLL_ANIMATION_DURATION = 500;

export default function Home() {
  // Refs
  const portfolioRef = useRef<HTMLDivElement>(null);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const scrollDeltaRef = useRef(0);

  // State
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isFullpageEnabled, setIsFullpageEnabled] = useState(true);
  const [isFullpageScrollingEnabled, setIsFullpageScrollingEnabled] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Handlers
  const handlePortfolioVisibility = useCallback((isVisible: boolean) => {
    setIsPortfolioVisible(isVisible);
    if (isFullpageEnabled) {
      setIsFullpageScrollingEnabled(!isVisible);
      window.fullpage_api?.setAllowScrolling(!isVisible);
    }
  }, [isFullpageEnabled]);

  const handleWheel = useCallback((event: WheelEvent) => {
    const swiper = swiperInstanceRef.current;
    if (!swiper || !isPortfolioVisible || isFullpageScrollingEnabled) return;

    let delta = event.deltaY / SCROLL_SENSITIVITY;
    delta = Math.max(-MAX_SCROLL_SPEED, Math.min(MAX_SCROLL_SPEED, delta));
    scrollDeltaRef.current += delta;

    swiper.translateTo(
      swiper.translate - scrollDeltaRef.current,
      SCROLL_ANIMATION_DURATION,
      false
    );

    if (
      (swiper.progress === 0 && scrollDeltaRef.current < -BUFFER_SCROLL_THRESHOLD) || 
      (swiper.progress === 1 && scrollDeltaRef.current > BUFFER_SCROLL_THRESHOLD)
    ) {
      setIsFullpageScrollingEnabled(true);
      window.fullpage_api?.setAllowScrolling(true);
      scrollDeltaRef.current = 0;
    }

    if (Math.abs(scrollDeltaRef.current) > 100) {
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
      observerRef.current?.disconnect();
      observerRef.current = null;
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
  }, []);

  return (
    <>
      <Head>
        <title>Maalik Ahmad | Creative Developer</title>
      </Head>

      <div className="fullpage-toggle" style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
        <button onClick={() => setIsFullpageEnabled(!isFullpageEnabled)}>
          {isFullpageEnabled ? "Disable Fullpage.js" : "Enable Fullpage.js"}
        </button>
      </div>

      {isFullpageEnabled ? (
        <ReactFullpage
          credits={{ enabled: false }}
          licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE}
          navigation
          anchors={["hero", "portfolio", "aboutMe", "services", "contact"]}
          scrollingSpeed={700}
          afterLoad={handleAfterLoad}
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
      ) : (
        <div>
          <section className="section container-fluid bg-black" id="hero">
            <Hero content={heroContent} />
          </section>
          <section className="section container-fluid" id="aboutMe">
            <AboutMe content={aboutMeContent} />
          </section>
          <section className="section container-fluid" id="services">
            <Services content={servicesContent} />
          </section>
          <section className="section container-fluid" id="contact">
            <Contact content={contactContent} />
          </section>
        </div>
      )}
      <GarageFooter isVisible={isFooterVisible} />
    </>
  );
}
