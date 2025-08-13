"use client";

import { useRef, createRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

import classNames from "classnames";
import styles from "./Services.module.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Service {
  title: string;
  description: string;
  icon: IconDefinition;
}

interface Props {
  content: {
    sectionName: string;
    title: string;
    services: Service[];
  };
}

gsap.registerPlugin(ScrollTrigger);

export default function Services({ content }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  if (cardRefs.current.length !== content.services.length) {
    cardRefs.current = content.services.map(() => createRef<HTMLDivElement>());
  }

  // initialize Lenis for horizontal scrolling of cards
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;
    const lenis = new Lenis({
      orientation: "horizontal",
      wrapper: wrapper,
      content: content,
      smoothWheel: true,
      lerp: 0.5,
    });
    function animate(time: number) {
      lenis.raf(time);
      console.log("Lenis animation frame", time);
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    return () => lenis.destroy();
  }, []);

  // Only pin the cards wrapper, NOT the title
  useGSAP(() => {
    const wrapperEl = wrapperRef.current;
    const contentEl = contentRef.current;
    if (!wrapperEl || !contentEl) return;
    const cardEls = Array.from(contentEl.children) as HTMLElement[];
    if (cardEls.length < 2) return;
    // Get computed gap
    const style = getComputedStyle(contentEl);
    const gap = parseFloat(style.getPropertyValue("column-gap") || style.getPropertyValue("gap"));
    // Calculate card width (all cards are equal with flex: 1 0 0)
    const cardWidth = cardEls[0].getBoundingClientRect().width;
    // Number of cards
    const numCards = cardEls.length;
    // The visible width (wrapper)
    const visibleWidth = wrapperEl.clientWidth;
    // The total width of all cards + total gap
    const totalGap = gap * (numCards - 1);
    const totalWidth = cardWidth * numCards + totalGap;
    // Initial offset: so only 2 cards are visible
    const initialOffset = totalWidth - (cardWidth * 2 + gap);
    // Animate from initialOffset to 0
    gsap.fromTo(
      contentEl,
      { x: initialOffset },
      {
        x: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top+=120px",
          end: () => `+=${initialOffset}`,
          scrub: true,
          pin: sectionRef.current,
          anticipatePin: 1,
          markers: true,
        }
      }
    );
  }, [content.services.length]);


  return (
    <div
      ref={sectionRef}
      className={classNames("container", styles.servicesContainer)}
    >
      <div className={classNames(styles.servicesTitleSection, "mb-16")} ref={titleRef}>
        <h5 className="text-primary/70 tracking-widest uppercase">
          {content.sectionName}
        </h5>
        <h2 className="text-4xl font-semibold">{content.title}</h2>
      </div>
      <div className={styles.servicesCardsWrapper}>
        <div ref={wrapperRef} style={{ overflow: "hidden", width: "100%" }}>
          <div
            ref={contentRef}
            className={styles.serviceCards}
            style={{ display: "flex", gap: "2.5rem" }}
          >
            {content.services.map((service, index) => (
              <div
                key={index}
                className={classNames("card", styles.serviceCard)}
                ref={cardRefs.current[index]}
              >
                <div>
                  <div className={styles.iconContainer}>
                    <FontAwesomeIcon
                      className={styles.icon}
                      icon={service.icon}
                    />
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}