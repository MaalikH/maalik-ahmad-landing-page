import { memo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import styles from "./Carousel.module.scss";
import type { Project } from "../portfolio";

export interface CarouselProps {
  featuredProjects: Project[];
  onProjectClick?: (project: Project) => void;
}

const Carousel = memo(({ featuredProjects, onProjectClick }: CarouselProps) => {
  const lenisRef = useRef<Lenis | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("lenis").then(({ default: Lenis }) => {
      lenisRef.current = new Lenis({
        wrapper: scrollRef.current,
        content: scrollRef.current.firstElementChild as HTMLElement,
        gestureOrientation: "horizontal",
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });

      // Start the animation frame loop
      const animate = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    });

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  if (!featuredProjects?.length) return null;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.horizontalScrollWrapper} tabIndex={0}>
        <div className={styles.horizontalScrollTrack} ref={scrollRef}>
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={styles.slideContainer}>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onProjectClick?.(project)}
                style={{
                  position: "relative",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title || ""}
                  className={styles.slideImage}
                  width={734}
                  height={490}
                  loading={index <= 1 ? "eager" : "lazy"}
                  priority={index <= 1}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  quality={90}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";

export default Carousel;
