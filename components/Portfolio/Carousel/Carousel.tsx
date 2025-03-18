import { memo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { RefObject } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import styles from "./Carousel.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import type { Project } from "../portfolio";

export interface CarouselProps {
  swiperInstanceRef: RefObject<SwiperType>;
  onSwiperReady?: (swiper: SwiperType) => void;
  featuredProjects: Project[];
  onProjectClick?: (project: Project) => void;
}

const SWIPER_CONFIG = {
  modules: [Navigation],
  spaceBetween: 40,
  slidesPerView: 1.1,
  navigation: {
    nextEl: `.${styles.swiperButtonNext}`,
    prevEl: `.${styles.swiperButtonPrev}`,
  },
  speed: 500,
  allowTouchMove: true,
  preventInteractionOnTransition: false,
  touchRatio: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1.1,
      spaceBetween: 40,
    },
  },
};

const Carousel = memo(({ swiperInstanceRef, onSwiperReady, featuredProjects, onProjectClick }: CarouselProps) => {
  const handleSwiperReady = useCallback((swiper: SwiperType) => {
    swiperInstanceRef.current = swiper;
    onSwiperReady?.(swiper);
  }, [swiperInstanceRef, onSwiperReady]);

  if (!featuredProjects?.length) {
    return null;
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.swiperWrapper}>
        <Swiper
          {...SWIPER_CONFIG}
          onSwiper={handleSwiperReady}
          className={styles.swiper}
        >
          {featuredProjects.map((project, index) => (
            <SwiperSlide key={project.id} className={styles.swiperSlide}>
              <div className={styles.slideContainer}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onProjectClick?.(project)}
                  style={{ position: 'relative', display: 'block', width: '100%', height: '100%' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title || ''}
                    className={styles.slideImage}
                    fill
                    loading={index <= 1 ? "eager" : "lazy"}
                    priority={index <= 1}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    quality={90}
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperButtonPrev} />
        <div className={styles.swiperButtonNext} />
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";

export default Carousel;
