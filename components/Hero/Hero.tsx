import styles from "./Hero.module.scss";
import classNames from "classnames";
import Navbar from "../NavBar/Navbar";
import HeroCTA from "./HeroCTA";
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

  const scrollArrowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: [0, 10, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.5,
        },
      },
    },
  };

  return (
    <div className={styles.heroContainer}>
      <Navbar />
      <div className={classNames("container", styles.heroMA)}>
        <motion.a href="mailto:someone@example.com" initial="hidden" animate="visible" variants={socialVariants} className={styles.email}>{props.content.email}</motion.a>
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
              loop={false}
              onComplete={() => setIsTypingDone(true)}
            />
          </motion.h1>
          {isTypingDone && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className={styles.ctaButtonContainer}
              >
                {props.content.ctaButtons.map((btn, index) => (
                  <HeroCTA
                    key={index}
                    btnText={btn.label}
                    btnLink={btn.link}
                    btnType={index === 0 ? "primary" : "secondary"}
                    sectionId={index === 0 ? "portfolio" : "contact"}
                  />
                ))}
              </motion.div>
              <motion.div
                className={styles.scrollIndicator}
                initial="hidden"
                animate="visible"
                variants={scrollArrowVariants}
              >
                <FaChevronDown />
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
