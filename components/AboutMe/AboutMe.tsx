import classNames from "classnames";
import styles from "./AboutMe.module.scss";
import Image from "next/image";
import HeroCTA from "../Hero/HeroCTA";

const AboutMe = () => {
  return (
    <section className={classNames(styles.aboutMeContent, "container")}>
      <div className="row">
        <div className="col-md-6">
          <Image
            src="/about.png"
            alt="Portrait of Maalik Ahmad"
            width={500}
            height={500}
          />
        </div>
        <div className="col-md-6">
          <h5>About Me</h5>
          <h1>Engineering Functional Excellence</h1>
          <div className={styles.aboutPills}>
            <HeroCTA />
            <HeroCTA />
          </div>
          <hr></hr>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia dese runt mollit anim id est laboru doloremque laudantium,
            totaeaque ipsa quae ab illo inven tore veritatis et quasi architecto
            beatae vitae.
          </p>
          <hr></hr>
          <div className={styles.metricContainer}>
            <div className={styles.metric}>
                <h1>500+</h1>
                <h5>Project Completed</h5>
            </div>
            <div className={styles.metric}>
                <h1>50+</h1>
                <h5>Worldwide Clients</h5>
            </div>
            <div className={styles.metric}>
                <h1>10+</h1>
                <h5>Years Experience</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
