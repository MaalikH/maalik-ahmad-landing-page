"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import classNames from 'classnames';
import styles from './LogoMarquee.module.scss';

const LogoMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (!marqueeRef.current || !trackRef.current) return;
    // Calculate the width of the track (one set of logos)
    const trackWidth = trackRef.current.scrollWidth / 2;
    const tween = gsap.to(trackRef.current, {
      x: -trackWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div
      className={`overflow-hidden w-100 py-6 bg-white ${styles.logoMarqueeContainer}`}
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
