import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

interface Props {
  swiperInstanceRef: any; 
  onSwiperReady?: (swiper: any) => void;
  featuredProjects: any;
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
        freeMode={true}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
        }}
        speed={500}
        onSwiper={(swiper) => {
          swiperInstanceRef.current = swiper; 
          if (onSwiperReady) {
            onSwiperReady(swiper); 
          }
        }}
      >
        {featuredProjects.map((project: any) => (
          <SwiperSlide key={project.id}>
            <div
              style={{
                height: "700px",
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
