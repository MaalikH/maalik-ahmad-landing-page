import { memo, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import type { RefObject } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";

// Types
import type { Project } from "../portfolio";

export interface CarouselProps {
  swiperInstanceRef: RefObject<SwiperType>;
  onSwiperReady?: (swiper: SwiperType) => void;
  featuredProjects: Project[];
}

const SWIPER_CONFIG = {
  modules: [Mousewheel, Navigation, Pagination],
  spaceBetween: 20,
  slidesPerView: 1.1,
  navigation: true,
  freeMode: false,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
  },
  speed: 500,
} as const;

const Carousel = memo(({ swiperInstanceRef, onSwiperReady, featuredProjects }: CarouselProps) => {
  const handleSwiperReady = useCallback((swiper: SwiperType) => {
    swiperInstanceRef.current = swiper;

    swiper.on("progress", () => {
      // Handle progress updates if needed
    });

    onSwiperReady?.(swiper);
  }, [swiperInstanceRef, onSwiperReady]);

  return (
    <div className={classNames(styles.carouselContainer, "container")}>
      <div className={styles.swiperWrapper}>
        <Swiper
          {...SWIPER_CONFIG}
          onSwiper={handleSwiperReady}
        >
          {featuredProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={styles.slideContainer}>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    fill
                    src={project.image}
                    alt={project.title}
                    className={styles.slideImage}
                    priority={project.id === featuredProjects[0].id}
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
