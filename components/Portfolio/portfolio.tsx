import classNames from "classnames";
import styles from "./portfolio.module.scss";
import Carousel from "./Carousel/Carousel";

interface Props {
  swiperInstanceRef: any; // Swiper instance reference
  onSwiperReady?: (swiper: any) => void; // Pass Swiper event handler
}

const PortfolioMA = ({ swiperInstanceRef, onSwiperReady}: Props) => {
  return (
      <div className={classNames("container", styles.portfolioMAContent)}>
        <div className={classNames(styles.portfolioMATitleContainer)}>
          <h5>PORTFOLIO</h5>
          <h1>Featured Works</h1>
        </div>
        <div className={classNames(styles.portfolioMACarousel)}>
          <Carousel
            swiperInstanceRef={swiperInstanceRef}
            onSwiperReady={onSwiperReady}
          />
        </div>
      </div>
  );
};

export default PortfolioMA;
