"use client";

import { useRef, createRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
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
  const cardRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  if (cardRefs.current.length !== content.services.length) {
    cardRefs.current = content.services.map(() => createRef<HTMLDivElement>());
  }

  useGSAP(() => {
    // Pin the title
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top top+=120px",
        end: "+=120",
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        // markers: true,
      }
    });
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className={classNames("container", styles.servicesContainer)}>
      <div className="text-start mb-16" ref={titleRef}>
        <h5 className="text-primary/70 tracking-widest uppercase">
          {content.sectionName}
        </h5>
        <h2 className="text-4xl font-semibold">{content.title}</h2>
      </div>
      <div className={styles.serviceCards} style={{ gap: '2.5rem' }}>
        {content.services.map((service, index) => (
          <div
            key={index}
            className={classNames("card", styles.serviceCard)}
            ref={cardRefs.current[index]}
          >
            <div>
              <div className={styles.iconContainer}>
                <FontAwesomeIcon className={styles.icon} icon={service.icon} />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
