import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from './GarageFooter.module.scss';

interface GarageFooterProps {
  isVisible: boolean;
}

const GarageFooter = ({ isVisible }: GarageFooterProps) => {
  return (
    <motion.footer 
      className={styles.footer}
      initial={{ y: '100%' }}
      animate={{ y: isVisible ? 0 : '100%' }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
    >
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/maalikahmad" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/maalikahmad" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/maalikahmad" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/maalikahmad" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p className={styles.copyright}>© {new Date().getFullYear()} Maalik Ahmad. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default GarageFooter; 