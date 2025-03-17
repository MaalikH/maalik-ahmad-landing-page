import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "../components/Hero/Hero";
import Head from "next/head";
import PortfolioMA from "@/components/Portfolio/portfolio";
import { useEffect, useRef, useState } from "react";
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

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isFullpageEnabled, setIsFullpageEnabled] = useState(true);
  const [isFullpageScrollingEnabled, setIsFullpageScrollingEnabled] =
    useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const swiperInstanceRef = useRef<Swiper | null>(null);
  const scrollDeltaRef = useRef(0); // Accumulate scroll delta
  const SCROLL_SENSITIVITY = 1; // Adjust for smoother or snappier scrollingß


  const observerRef = useRef<IntersectionObserver | null>(null);


  useEffect(() => {
    const currentPortfolioRef = portfolioRef.current;
    if (!currentPortfolioRef || observerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        console.log("📌 Intersection Observer triggered:", entry.isIntersecting);

        if (entry.isIntersecting) {
          console.log("🛑 Portfolio section visible → Disabling Fullpage.js");
          setIsPortfolioVisible(true);
          if (isFullpageEnabled) {
            setIsFullpageScrollingEnabled(false);
            window.fullpage_api?.setAllowScrolling(false);
          }
        } else {
          console.log("✅ Portfolio section hidden → Enabling Fullpage.js");
          setIsPortfolioVisible(false);
          if (isFullpageEnabled) {
            setIsFullpageScrollingEnabled(true);
            window.fullpage_api?.setAllowScrolling(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current.observe(currentPortfolioRef);

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
      console.log("🗑️ Cleanup IntersectionObserver");
    };
  }, [isFullpageEnabled]);
  

  const BUFFER_SCROLL_THRESHOLD = 50; // How much extra scroll before switching back
  const MAX_SCROLL_SPEED = 250; // The maximum delta change allowed per scroll event
  
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const swiper = swiperInstanceRef.current;
      if (!swiper || !isPortfolioVisible || isFullpageScrollingEnabled) return;
  
      let delta = event.deltaY / SCROLL_SENSITIVITY;
  
      // 🔥 Clamp scroll speed to prevent zooming past content
      delta = Math.max(-MAX_SCROLL_SPEED, Math.min(MAX_SCROLL_SPEED, delta));
  
      scrollDeltaRef.current += delta;
  
      // Move Swiper
      swiper.translateTo(
        swiper.translate - scrollDeltaRef.current,
        500, // Animation duration
        false // Disable auto-animation
      );
  
      // 📌 Check when Swiper is at its edges (0 or 1) and extra scroll has accumulated
      if (
        (swiper.progress === 0 && scrollDeltaRef.current < -BUFFER_SCROLL_THRESHOLD) || 
        (swiper.progress === 1 && scrollDeltaRef.current > BUFFER_SCROLL_THRESHOLD)
      ) {
        console.log("🔄 Exceeded scroll threshold at edge → Switching to Fullpage.js");
        setIsFullpageScrollingEnabled(true);
        window.fullpage_api?.setAllowScrolling(true);
        scrollDeltaRef.current = 0; // Reset accumulated scroll
      }
  
      // Reset accumulated delta if it's too large
      if (Math.abs(scrollDeltaRef.current) > 100) {
        scrollDeltaRef.current = 0;
      }
    };
  
    if (isPortfolioVisible) {
      console.log("🎯 Adding 'wheel' event listener with BUFFER");
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      console.log("🛑 Removing 'wheel' event listener");
      window.removeEventListener("wheel", handleWheel);
    }
  
    return () => {
      console.log("🗑️ Cleanup: Removing 'wheel' event listener");
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isPortfolioVisible, isFullpageScrollingEnabled]);
  
  
  
  return (
    <>
      <Head>
        <title>Maalik Ahmad | Creative Developer</title>
      </Head>

      <div
        style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}
      >
        <button onClick={() => setIsFullpageEnabled(!isFullpageEnabled)}>
          {isFullpageEnabled ? "Disable Fullpage.js" : "Enable Fullpage.js"}
        </button>
      </div>

      {isFullpageEnabled ? (
        <ReactFullpage
          credits={{enabled: false}}
          licenseKey={process.env.NEXT_PUBLIC_FULLPAGE_LICENSE}
          navigation
          anchors={["hero", "portfolio", "aboutMe", "services", "contact"]}
          scrollingSpeed={700}
          afterLoad={(origin, destination) => {
            console.log(`Scrolled to section: ${destination.anchor}`);
            // Show footer only when on the last section (contact)
            setIsFooterVisible(destination.anchor === 'contact');
          }}
          render={() => (
            <ReactFullpage.Wrapper>
              <section className="section container-fluid bg-black">
                <Hero content={heroContent} />
              </section>
              <section
                className="section container-fluid"
                ref={portfolioRef}
              >
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
