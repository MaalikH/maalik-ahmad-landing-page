import styles from "./Hero.module.scss";
import classNames from "classnames";
import Navbar from "../NavBar/Navbar";
import HeroCTA from "./HeroCTA";
import Link from "next/link";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useState } from "react";


const Hero = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  const socialVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10, delay: 4 },
    },
  };

  return (
    <div className={styles.heroContainer}>
      <Navbar />
      <div className={classNames("container", styles.heroMA)}>
        <motion.a href="mailto:someone@example.com" initial="hidden" animate="visible" variants={socialVariants} className={styles.email}>maalikahmadtech@gmail.com</motion.a>
        <div className={styles.heroMainContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ReactTyped
              strings={[
                "I'm <span style='color: #FE2D1A;'>Maalik Ahmad</span>, a Creative Developer.",
                "I build solutions in tech and design.",
                "I'm <span style='color: #FE2D1A;'>Maalik Ahmad</span>, a Creative Developer.",
              ]}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              loop={false}
              onComplete={() => setIsTypingDone(true)}
            />
          </motion.h1>
          {isTypingDone && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={styles.ctaButtonContainer}
            >
              <HeroCTA btnText="View Portfolio" btnLink="google.com" btnType="primary" sectionId="portfolio" />
              <HeroCTA btnText="Hire Me" btnLink="google.com" btnType="secondary" sectionId="contact" />
            </motion.div>
          )}
        </div>
        <motion.span className={styles.social} initial="hidden" animate="visible" variants={socialVariants}>
          {["instagram", "twitter", "github", "youtube"].map((platform) => (
            <motion.div key={platform} variants={socialVariants}>
              <Link href={`https://www.${platform}.com`} className={styles.socialIcon}>
                <Image src={`/${platform}.svg`} alt={platform} width={25} height={25} />
              </Link>
            </motion.div>
          ))}
        </motion.span>
      </div>
    </div>
  );
};

export default Hero;
