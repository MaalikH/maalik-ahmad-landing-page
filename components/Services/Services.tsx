import classNames from "classnames";
import styles from "./Services.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

interface props {
  content: any;
}

const Services = ({ content }: props) => {
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
        {content.services.map((service: any, index: number) => (
          <motion.div
            key={index}
            className={classNames("card", styles.serviceCard)}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
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
              <span>{service.description}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
