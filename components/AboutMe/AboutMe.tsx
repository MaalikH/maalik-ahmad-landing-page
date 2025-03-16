import classNames from "classnames";
import styles from "./AboutMe.module.scss";
import Image from "next/image";
import { useRef, useState, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

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
    merch: Section;
  };
  pills: { id: "tech" | "merch"; title: string }[];
}


const AboutMe = ({ content }: Props) => {
  const [activeTab, setActiveTab] = useState<"tech" | "merch">("tech");
  const activeContent = useMemo(
    () => content.sections[activeTab],
    [activeTab, content]
  );

  const metricRef = useRef(null);
  const isMetricInView = useInView(metricRef, { once: true });

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
          className="col-md-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className={styles.aboutMeImageContainer}>
            <Image
              src="/maalik-avatar.png"
              alt="Portrait of Maalik Ahmad"
              style={{ objectFit: "cover" }}  
              fill
              />
          </div>
        </motion.div>

        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <h5>{content.title}</h5>
          <h1>{activeContent.title}</h1>

          <div className={styles.aboutPills}>
            {content.pills.map((pill) => (
              <motion.button
                key={pill.id}
                className={classNames(
                  "btn",
                  styles.pillBtn,
                  { [styles.pillBtnActive]: activeTab === pill.id },
                  { [styles.pillBtnInactive]: activeTab !== pill.id }
                )}
                onClick={() => setActiveTab(pill.id)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {pill.title}
              </motion.button>
            ))}
          </div>

          <hr />
          <p>{activeContent.description}</p>
          <hr />

          {activeContent.metrics.length > 0 && (
            <motion.div
              ref={metricRef}
              className={styles.metricContainer}
              initial={{ opacity: 0, y: 30 }}
              animate={isMetricInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            >
              {activeContent.metrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {isMetricInView ? (
                      <div>
                        <CountUp
                          start={0}
                          end={parseInt(metric.value)}
                          duration={3}
                          key={metric.label}
                        />
                        <span>+</span>
                      </div>
                    ) : (
                      0
                    )}
                  </motion.h1>
                  <h5>{metric.label}</h5>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
