import { memo } from "react";
import classNames from "classnames";
import { Swiper as SwiperType } from "swiper";
import type { RefObject } from "react";
import { trackProjectClick } from '../../lib/gtag';

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
  content: PortfolioContent;
}

const handleProjectClick = (project: Project) => {
  if (project?.title) {
    trackProjectClick(project.title, 'desktop');
  }
};

const PortfolioMA = memo(({ content }: PortfolioProps) => {
  const { title, subtitle, projects } = content || {};

  if (!content || !projects?.length) {
    return null;
  }

  return (
    <div className={classNames("container", styles.portfolioContainer)}>
      <div className={styles.portfolioHeader}>
        <h5 className={styles.portfolioTitle}>{title || ''}</h5>
        <h1 className={styles.portfolioHeading}>{subtitle || ''}</h1>
      </div>
      <div className={styles.portfolioCarousel}>
        <Carousel
          featuredProjects={projects}
          onProjectClick={handleProjectClick}
        />
      </div>
    </div>
  );
});

PortfolioMA.displayName = "PortfolioMA";

export default PortfolioMA;
