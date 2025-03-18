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
}

const SWIPER_CONFIG = {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 1.1,
  navigation: true,
  speed: 500,
  allowTouchMove: true,
  preventInteractionOnTransition: false,
  touchRatio: 1,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
  },
};

const Carousel = memo(({ swiperInstanceRef, onSwiperReady, featuredProjects }: CarouselProps) => {
  const handleSwiperReady = useCallback((swiper: SwiperType) => {
    swiperInstanceRef.current = swiper;
    onSwiperReady?.(swiper);
  }, [swiperInstanceRef, onSwiperReady]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.swiperWrapper}>
        <Swiper
          {...SWIPER_CONFIG}
          onSwiper={handleSwiperReady}
        >
          {featuredProjects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <div className={styles.slideContainer}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
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
      </div>
    </div>
  );
});

Carousel.displayName = "Carousel";

export default Carousel;
