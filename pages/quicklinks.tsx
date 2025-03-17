import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../styles/QuickLinks.module.scss';
import { quickLinksContent } from '@/app/content/quicklinks';

const QuickLinks = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroContent}
        >
          <div className={styles.profileImage}>
            <Image 
              src="/maalik-avatar-ql.png" 
              alt="Maalik Ahmad"
              width={150}
              height={150}
              priority
            />
          </div>
          <h2 className={styles.title}>Maalik Ahmad</h2>
          <p className={styles.subtitle}>Software Engineer</p>
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
        </motion.div>
      </section>

      {/* Projects Section */}
      <main className={styles.main}>
        <section className={styles.projects}>
          {quickLinksContent.projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.projectCard}
            >
              <Image 
                src={project.image} 
                alt={`${project.title} - View Project`}
                width={800}
                height={200}
                layout="responsive"
                priority={index === 0}
              />
            </motion.a>
          ))}
        </section>
      </main>
    </div>
  );
};

export default QuickLinks; 