import { memo } from "react";
import classNames from "classnames";
import { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";

// Components
import Carousel from "./Carousel/Carousel";

// Styles
import styles from "./portfolio.module.scss";

// Types
export interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
}

export interface PortfolioContent {
  title: string;
  subtitle: string;
  projects: Project[];
}

export interface PortfolioProps {
  swiperInstanceRef: RefObject<SwiperType>;
  onSwiperReady?: (swiper: SwiperType) => void;
  content: PortfolioContent;
}

const PortfolioMA = memo(({ swiperInstanceRef, onSwiperReady, content }: PortfolioProps) => {
  const { title, subtitle, projects } = content;

  return (
    <div className={classNames("container", styles.portfolioContainer)}>
      <div className={styles.portfolioHeader}>
        <h5>{title}</h5>
        <h1>{subtitle}</h1>
      </div>
      <div className={styles.portfolioCarousel}>
        <Carousel
          swiperInstanceRef={swiperInstanceRef}
          onSwiperReady={onSwiperReady}
          featuredProjects={projects}
        />
      </div>
    </div>
  );
});

PortfolioMA.displayName = "PortfolioMA";

export default PortfolioMA;
