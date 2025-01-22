import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";

interface Props {
  swiperInstanceRef: any; // Reference to Swiper instance
  onSwiperReady?: (swiper: any) => void; // New prop for event handlers
}

const Carousel = ({ swiperInstanceRef, onSwiperReady }: Props) => {
  return (
    <div className={styles.carouselContainer}>
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
          console.log("Swiper instance initialized:", swiper);
          swiperInstanceRef.current = swiper; // Store Swiper instance in ref
          onSwiperReady(swiper); // Call onSwiperReady prop
        }}
        
      >
        <SwiperSlide>
          <div style={{ height: "700px", backgroundColor: "#f5f5f5", borderRadius:"20px" }}>
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ height: "700px", backgroundColor: "#f5f5f5", borderRadius:"20px" }}>
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ height: "700px", backgroundColor: "#f5f5f5", borderRadius:"20px" }}>
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
