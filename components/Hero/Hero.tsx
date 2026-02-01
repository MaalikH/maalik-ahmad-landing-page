import styles from "./Hero.module.scss";
import classNames from "classnames";
import Navbar from "../NavBar/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type HeroProps = {
  content: {
    title: {
      before: string;
      highlighted: string;
      after: string;
    };
    typingStrings: string[]; // Now using an array for dynamic text
    ctaButtons: {
      label: string;
      link: string;
    }[];
    socialLinks: {
      platform: string;
      url: string;
    }[];
    email: string;
  };
};


const Hero = (props: HeroProps) => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  const socialVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10, delay: 4 },
    },
  };

  const emailVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 10, delay: 4 },
    },
  };

  const scrollArrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: [0, 10, 0],
      transition: {
        repeat: Infinity,
        duration: 2,
      },
    },
  };

  return (
    <div className={styles.heroContainer}>
      <Navbar />
      <div className={classNames("container", styles.heroMA)}>
        <motion.a
          href={`mailto:${props.content.email}`}
          className={styles.email}
          initial="hidden"
          animate="visible"
          variants={emailVariants}
          aria-label="Email me"
        >
          {props.content.email}
        </motion.a>
        <div className={styles.heroMainContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ReactTyped
              strings={props.content.typingStrings}
              typeSpeed={50}
              backSpeed={30}
              backDelay={1500}
              smartBackspace={true}
              loop={false}
              onComplete={() => setIsTypingDone(true)}
            />
          </motion.h1>
          {isTypingDone && (
            <>
              <motion.div
                className={styles.scrollIndicator}
                initial="hidden"
                animate="visible"
                variants={scrollArrowVariants}
              >
                <FaChevronDown color="black" />
              </motion.div>
            </>
          )}
        </div>
        <motion.span className={styles.social} initial="hidden" animate="visible" variants={socialVariants}>
          {props.content.socialLinks.map(({ platform, url }) => (
            <motion.div key={platform} variants={socialVariants}>
              <Link href={url} className={styles.socialIcon}>
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
