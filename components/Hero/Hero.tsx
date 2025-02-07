import styles from "./Hero.module.scss";
import classNames from "classnames";
import Navbar from "../NavBar/Navbar";
import HeroCTA from "./HeroCTA";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Navbar />
      <div className={classNames("container", styles.heroMA)}>
        <div className={styles.ellipse}></div>
        <div className={styles.heroContent}>
          <span className={styles.email}>email</span>
          <div className={styles.heroMainContent}>
            <h1 className={styles.title}>
              I am <span className={styles.titleRedText}>Maalik Ahmad,</span>
              <br />a Creative Developer
            </h1>
            <p className={styles.tagline}>
              I design and code beautifully simple things and I love what I do.
              Just simple like that!
            </p>
            <div className={styles.ctaButtonContainer}>
              <HeroCTA />
              <HeroCTA />
            </div>
          </div>
          <span className={styles.social}>
            <button className="btn btn-danger">Social</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
