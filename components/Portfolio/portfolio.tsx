import classNames from "classnames";
import styles from "./portfolio.module.scss";
import Carousel from "./Carousel/Carousel";

interface Props {
  swiperInstanceRef: any;
  onSwiperReady?: (swiper: any) => void; 
  content: any;
}

const PortfolioMA = ({ swiperInstanceRef, onSwiperReady, content }: Props) => {
  return (
    <div className={classNames("container", styles.portfolioContainer)}>
      <div className={styles.portfolioHeader}>
        <h5>{content.title}</h5>
        <h1>{content.subtitle}</h1>
      </div>
      <div className={styles.portfolioCarousel}>
        <Carousel
          swiperInstanceRef={swiperInstanceRef}
          onSwiperReady={onSwiperReady}
          featuredProjects={content.projects}
        />
      </div>
    </div>
  );
};

export default PortfolioMA;
