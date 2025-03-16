import classNames from "classnames";
import styles from "./Services.module.scss";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Service {
  title: string;
  description: string;
  icon: IconDefinition; // FontAwesome icons don't have strict types, but we can improve this later
}

interface Content {
  sectionName: string;
  title: string;
  services: Service[];
}

interface Props {
  content: Content;
}
const Services = ({ content }: Props) => {
  return (
    <motion.div
      className={classNames("container", styles.servicesContainer)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h5>{content.sectionName}</h5>
      <h1>{content.title}</h1>
      <motion.div
        className={styles.serviceCards}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {content.services.map((service, index) => (
          <motion.div
            key={index}
            className={classNames("card", styles.serviceCard)}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.5 },
              },
            }}
          >
            <motion.div
              className={styles.iconContainer}
              whileHover={{ scale: 1.1 }}
            >
              <FontAwesomeIcon className={styles.icon} icon={service.icon} />
            </motion.div>
            <div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <span className="d-none d-sm-block">{service.description}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
