import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './GarageFooter.module.scss';
import { useEffect } from 'react';

interface GarageFooterProps {
  isVisible: boolean;
}

const GarageFooter = ({ isVisible }: GarageFooterProps) => {
  useEffect(() => {
    // console.log('GarageFooter isVisible:', isVisible);
  }, [isVisible]);
  
  return (
    <motion.footer 
      className={styles.garageFooter}
      initial={{ y: '100%' }}
      animate={{ y: isVisible ? 0 : '100%' }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/maalikh" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/maalikhornbuckle" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/maalikahmad" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://instagram.com/maalikahmad" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} HBKL Labs. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default GarageFooter; 