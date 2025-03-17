import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { RefObject } from "react";
import { Swiper as SwiperType } from "swiper";
import { Project } from "../portfolio";

interface Props {
  swiperInstanceRef: RefObject<SwiperType>;
  onSwiperReady?: (swiper: SwiperType) => void;
  featuredProjects: Project[];
}

const Carousel = ({
  swiperInstanceRef,
  onSwiperReady,
  featuredProjects,
}: Props) => {
  return (
    <div className={classNames(styles.carouselContainer, "container")}>
      <Swiper
        modules={[Mousewheel, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.1}
        navigation
        freeMode={false}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        speed={500}
        onSlideChange={() => {console.log('slide change')}}
        onSwiper={(swiper) => {
          console.log("🎯 Swiper instance set:", swiper);
          swiperInstanceRef.current = swiper;

          // Attach progress event
          swiper.on("progress", (s, progress) => {
            console.log(`📊 Swiper Progress: ${progress}`);
          });

          if (onSwiperReady) {
            onSwiperReady(swiper);
          }
        }}
      >
        {featuredProjects.map((project: Project) => (
          <SwiperSlide key={project.id}>
            <div
              style={{
                height: "650px",
                backgroundColor: "#f5f5f5",
                borderRadius: "20px",
              }}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  style={{ objectFit: "cover", borderRadius: "20px" }}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
