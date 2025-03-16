import classNames from "classnames";
import styles from "./portfolio.module.scss";
import Carousel from "./Carousel/Carousel";
import { Swiper as SwiperType } from "swiper";
import { RefObject } from "react";

export interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface Content {
  title: string;
  subtitle: string;
  projects: Project[];
}

interface Props {
  swiperInstanceRef: RefObject<SwiperType>;
  onSwiperReady?: (swiper: SwiperType) => void;
  content: Content;
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
