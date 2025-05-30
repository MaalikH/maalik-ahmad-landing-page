import classNames from "classnames";
import styles from "./AboutMe.module.scss";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import LogoMarquee from "../LogoMarquee/LogoMarquee";

interface Props {
  content: Content;
}

interface Metric {
  label: string;
  value: string;
}

interface Section {
  title: string;
  description: string;
  metrics: Metric[];
}

interface Content {
  title: string;
  sections: {
    tech: Section;
  };
}

const AboutMe = ({ content }: Props) => {
  // Only one version of About Me, no pills/tabs logic
  const activeContent = content.sections.tech;
  const [isMetricInView, setIsMetricInView] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!metricsRef.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsMetricInView(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(metricsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className={classNames(styles.aboutMeContent, "container")}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="row">
        <motion.div
          className="col-md-9"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <h5>{content.title}</h5>
          <h1>{activeContent.title}</h1>
          {activeContent.description.split('\n\n').map((para, idx) => (
            <p className={styles.description} key={idx}>{para}</p>
          ))}
        </motion.div>
        <motion.div
          className="col-md-3 d-flex align-items-start justify-content-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
            {activeContent.metrics && activeContent.metrics.length > 0 && (
              <div className={styles.metricContainer} ref={metricsRef}>
                {activeContent.metrics.map((metric) => (
                  <div key={metric.label} className={styles.metric}>
                    <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      {isMetricInView ? (
                        <>
                          <CountUp
                            start={0}
                            end={parseInt(metric.value)}
                            duration={3}
                            key={metric.label}
                          />
                          <span>+</span>
                        </>
                      ) : (
                        0
                      )}
                    </motion.h1>
                    <h5>{metric.label}</h5>
                  </div>
                ))}
              </div>
            )}
        </motion.div>
      </div>
      <LogoMarquee />
    </motion.div>
  );
};

export default AboutMe;
