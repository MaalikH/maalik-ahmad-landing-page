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

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isFullpageEnabled, setIsFullpageEnabled] = useState(true);
  const [isFullpageScrollingEnabled, setIsFullpageScrollingEnabled] =
    useState(true);
  const swiperInstanceRef = useRef<any>(null); // Store Swiper instance
  const scrollDeltaRef = useRef(0); // Accumulate scroll delta
  const SCROLL_SENSITIVITY = 1; // Adjust for smoother or snappier scrollingß

  useEffect(() => {

    const currentPortfolioRef = portfolioRef.current; 

    if (!currentPortfolioRef) return;
    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setIsPortfolioVisible(true);

          if (isFullpageEnabled) {
            setIsFullpageScrollingEnabled(false);
            window.fullpage_api?.setAllowScrolling(isFullpageScrollingEnabled);
          }
        } else {
          setIsPortfolioVisible(false);

          if (isFullpageEnabled) {
            setIsFullpageScrollingEnabled(false);
            window.fullpage_api?.setAllowScrolling(isFullpageScrollingEnabled);
          }
        }
      },
      { threshold: 0.1 } // Sensitivity for detecting visibility
    );

    observer.observe(currentPortfolioRef);

    return () => {
        observer.unobserve(currentPortfolioRef); 
    
    };
  }, [isFullpageEnabled, portfolioRef, isFullpageScrollingEnabled]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (
        isPortfolioVisible &&
        swiperInstanceRef.current &&
        !isFullpageScrollingEnabled
      ) {
        scrollDeltaRef.current += event.deltaY / SCROLL_SENSITIVITY; // Smooth delta accumulation

        swiperInstanceRef.current.translateTo(
          swiperInstanceRef.current.translate - scrollDeltaRef.current,
          500,
          false // Disable animation for immediate response
        );

        // Reset delta when it exceeds a threshold
        if (Math.abs(scrollDeltaRef.current) > 100) {
          scrollDeltaRef.current = 0;
        }
      }
    };

    if (isPortfolioVisible) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      window.removeEventListener("wheel", handleWheel);
    }

    return () => {
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
    </>
  );
}
