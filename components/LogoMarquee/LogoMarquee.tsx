import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from './LogoMarquee.module.scss';

const LogoMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const logos = [
    "/logos/typescript.svg",
    "/logos/angular.svg",
    "/logos/react.svg",
    "/logos/nextjs.svg",
    "/logos/ionic.svg",
    "/logos/nodejs.svg",
    "/logos/figma.svg",
    "/logos/adobe.svg",
    "/logos/openai.svg",
    "/logos/github.svg"
  ];

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!marqueeRef.current || !trackRef.current) return;
    // Calculate the width of the track (one set of logos)
    const trackWidth = trackRef.current.scrollWidth / 2;
    const tween = gsap.to(trackRef.current, {
      x: -trackWidth,
      duration: isMobile ? 3 : 20, // Faster scroll on mobile
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, [isMobile]);

  return (
    <div
      className={`overflow-hidden w-100 py-6 ${styles.logoMarqueeContainer}`}
      ref={marqueeRef}
    >
      <div
        className="d-flex flex-row flex-nowrap marquee-track align-items-center"
        ref={trackRef}
        style={{ willChange: "transform" }}
      >
        {[...logos, ...logos].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`logo-${i}`}
            className={`mx-4 ${styles.logoBlack}`}
            style={{ height: 48, width: "auto", userSelect: "none" }}
            loading="lazy"
            draggable="false"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
