import classNames from "classnames";
import styles from "./Services.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div className={classNames("container", styles.servicesContainer)}>
      <h5>Our Services</h5>
      <h1>What We Offer</h1>
      <div className={styles.serviceCards}>
      <div className={classNames("card", styles.serviceCard)}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon className={styles.icon} icon={faCode} />
          </div>
          <div>
            <h3>Web Development</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit leo
              ullamcorper cum sagittis condimentum, habitant malesuada euismod
            </span>
          </div>
        </div>

        <div className={classNames("card", styles.serviceCard)}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon className={styles.icon} icon={faCode} />
          </div>
          <div>
            <h3>Web Development</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit leo
              ullamcorper cum sagittis condimentum, habitant malesuada euismod
            </span>
          </div>
        </div>

        <div className={classNames("card", styles.serviceCard)}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon className={styles.icon} icon={faCode} />
          </div>
          <div>
            <h3>Web Development</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit leo
              ullamcorper cum sagittis condimentum, habitant malesuada euismod
            </span>
          </div>
        </div>

        <div className={classNames("card", styles.serviceCard)}>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon className={styles.icon} icon={faCode} />
          </div>
          <div>
            <h3>Web Development</h3>
            <span>
              Lorem ipsum dolor sit amet consectetur adipiscing, elit leo
              ullamcorper cum sagittis condimentum, habitant malesuada euismod
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
