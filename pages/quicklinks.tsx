import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from '../styles/QuickLinks.module.scss';
import { quickLinksContent } from '@/app/content/quicklinks';
import Head from 'next/head';
import { trackProjectClick } from '../lib/gtag';
import { Project } from '../types/gtag';

const QuickLinks = () => {
  const handleProjectClick = (project: Project) => {
    trackProjectClick(project.title, 'quicklinks');
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Maalik Ahmad | Quick Links</title>
      </Head>
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
              <a href="https://github.com/maalikh" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/maalikhornbuckle" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/maalikahmadtech" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
              <a href="https://instagram.com/maalikahmad.tech" target="_blank" rel="noopener noreferrer">
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
                onClick={() => handleProjectClick(project)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.projectCard}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={180}
                  className="w-full h-auto object-cover rounded-lg"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </motion.a>
            ))}
          </section>
        </main>

        <footer className={styles.footer}>
          <motion.a 
            href="/"
            className={styles.desktopLink}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className={styles.desktopLinkText}>View Full Experience</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={styles.desktopLinkIcon}
            >
              <path d="M7 17l9.2-9.2M17 17V8H8" />
            </svg>
          </motion.a>
        </footer>
      </div>
    </>
  );
};

export default QuickLinks; 