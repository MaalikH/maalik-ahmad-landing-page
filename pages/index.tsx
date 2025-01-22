import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "../components/Hero/Hero";
import Head from "next/head";
import PortfolioMA from "@/components/Portfolio/portfolio";
import { useEffect, useRef, useState } from "react";
import AboutMe from "@/components/AboutMe/AboutMe";

export default function Home() {
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [isPortfolioVisible, setIsPortfolioVisible] = useState(false);
  const [isFullpageEnabled, setIsFullpageEnabled] = useState(true);
  const swiperInstanceRef = useRef<any>(null); // Store Swiper instance
  const scrollDeltaRef = useRef(0); // Accumulate scroll delta
  const SCROLL_SENSITIVITY = 1; // Adjust for smoother or snappier scrolling

  const handleSwiperEvents = (swiper: any) => {
    swiper.on("reachBeginning", () => {
      console.log("Reached Beginning");
      if (isFullpageEnabled) {
        window.fullpage_api?.setAllowScrolling(true);
      }
    });

    swiper.on("reachEnd", () => {
      console.log("Reached End");
      if (isFullpageEnabled) {
        window.fullpage_api?.setAllowScrolling(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("Portfolio in view");
          setIsPortfolioVisible(true);

          if (isFullpageEnabled) {
            window.fullpage_api?.setAllowScrolling(false); // Disable Fullpage.js scrolling
          }
        } else {
          console.log("Portfolio out of view");
          setIsPortfolioVisible(false);

          if (isFullpageEnabled) {
            window.fullpage_api?.setAllowScrolling(true); // Re-enable Fullpage.js scrolling
          }
        }
      },
      { threshold: 0.5 }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, [isFullpageEnabled]);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isPortfolioVisible && swiperInstanceRef.current) {
        event.preventDefault(); // Prevent default scrolling
        scrollDeltaRef.current += event.deltaY / SCROLL_SENSITIVITY; // Smooth delta accumulation

        // Translate slides based on scroll delta
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
      console.log("Adding wheel listener");
      window.addEventListener("wheel", handleWheel, { passive: false });
    } else {
      console.log("Removing wheel listener");
      window.removeEventListener("wheel", handleWheel);
    }

    return () => {
      console.log("Cleaning up wheel listener");
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isPortfolioVisible]);

  return (
    <>
      <Head>
        <title>Maalik Ahmad | Creative Developer</title>
      </Head>

      <div style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
        <button onClick={() => setIsFullpageEnabled(!isFullpageEnabled)}>
          {isFullpageEnabled ? "Disable Fullpage.js" : "Enable Fullpage.js"}
        </button>
      </div>

      {isFullpageEnabled ? (
        <ReactFullpage
          navigation
          anchors={["hero", "portfolio", "about-me", "services", "contact"]}
          scrollingSpeed={700}
          render={() => (
            <ReactFullpage.Wrapper>
              <section className="section">
                <Hero />
              </section>
              <section className="section" ref={portfolioRef}>
                <PortfolioMA swiperInstanceRef={swiperInstanceRef} onSwiperReady={handleSwiperEvents}/>
              </section>
              <section className="section">
                           <AboutMe />
              </section>
            </ReactFullpage.Wrapper>
          )}
        />
      ) : (
        <div>
          <section className="section">
            <Hero />
          </section>
          <section className="section" ref={portfolioRef}>
            <PortfolioMA swiperInstanceRef={swiperInstanceRef} />
          </section>
          <section className="section">
            <AboutMe />
          </section>
        </div>
      )}
    </>
  );
}
