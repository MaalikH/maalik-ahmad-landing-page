import { useState, useEffect } from "react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import NavIconButton from "./NavIconButton";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("");
  const { theme, toggleTheme } = useTheme();

  const isHomePage = router.pathname === '/';

  const scrollToSection = (sectionName: string) => {
    // Map section names to the actual CSS class selectors
    const sectionSelectors: Record<string, string> = {
      services: '[class*="servicesContainer"]',
      portfolio: '[class*="portfolioContainer"]',
      aboutMe: '[class*="aboutMeContent"]',
      contact: '[class*="contactContent"]'
    };

    const selector = sectionSelectors[sectionName];
    if (selector) {
      const section = document.querySelector(selector);
      if (section) {
        // For Contact, scroll to exact position where ScrollTrigger fires
        if (sectionName === 'contact') {
          const sectionTop = section.getBoundingClientRect().top;
          const targetPosition = sectionTop + 5; // 5px past "top top" to ensure trigger

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        } else {
          section.scrollIntoView({ behavior: 'smooth' });
        }

        setActiveSection(sectionName); // Set active section
      }
    }
  };

  const handleNavClick = (sectionName: string) => {
    setIsCollapsed(true); // Close menu on mobile after clicking a link

    if (isHomePage) {
      // On home page: use DOM-based scroll
      scrollToSection(sectionName);
    } else {
      // On other pages: navigate to home with hash
      router.push(`/#${sectionName}`);
    }
  };

  // Track active section based on scroll position (only on home page)
  useEffect(() => {
    // Only track sections on the home page
    if (!isHomePage) {
      setActiveSection(''); // Clear active section on other pages
      return;
    }

    const handleScroll = () => {
      const sections = [
        { name: 'hero', selector: '[class*="heroContainer"]' }, // Add Hero to clear active state
        { name: 'services', selector: '[class*="servicesContainer"]' },
        { name: 'portfolio', selector: '[class*="portfolioContainer"]' },
        { name: 'aboutMe', selector: '[class*="aboutMeContent"]' },
        { name: 'contact', selector: '[class*="contactContent"]' }
      ];

      const scrollY = window.scrollY + 150; // Offset for navbar height

      for (const section of sections) {
        const element = document.querySelector(section.selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const bottom = top + rect.height;

          // Special handling for Portfolio - it needs more scroll to become visible
          if (section.name === 'portfolio') {
            // Portfolio becomes fully visible at "top top+=200px", so activate when we're closer to that point
            const portfolioActivationPoint = top - 1000; // Activate Portfolio much much earlier (testing)
            if (scrollY >= portfolioActivationPoint && scrollY < bottom) {
              setActiveSection(section.name);
              break;
            }
          } else {
            // Normal detection for other sections
            if (scrollY >= top && scrollY < bottom) {
              setActiveSection(section.name);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <nav className={classNames("navbar navbar-expand-lg navbar-dark navbar-transparent", styles.navBar)}>
      <div className={styles.navbarMA}>
        <Link className={styles.navbarBrand} href="/">
          MaalikAhmadTech
        </Link>

        {/* Hamburger Button */}
        <button
          className={styles.navbarToggler}
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className={styles.navbarTogglerIcon}></span>
        </button>

        {/* Collapsible Navbar */}
        <div className={classNames(styles.navbarCollapse, { show: !isCollapsed })} id="navbarNav">
          <ul className={styles.navbarLinks}>
            <li className="nav-item">
              <button 
                className={classNames(styles.navLink, { 
                  [styles.active]: activeSection === "services" 
                })} 
                onClick={() => handleNavClick("services")}
              >
                Services
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={classNames(styles.navLink, { 
                  [styles.active]: activeSection === "portfolio" 
                })} 
                onClick={() => handleNavClick("portfolio")}
              >
                Portfolio
              </button>
            </li>
            <li className="nav-item">
              <button 
                className={classNames(styles.navLink, { 
                  [styles.active]: activeSection === "aboutMe" 
                })} 
                onClick={() => handleNavClick("aboutMe")}
              >
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button
                className={classNames(styles.navLink, {
                  [styles.active]: activeSection === "contact"
                })}
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </button>
            </li>
            <li className="nav-item">
              <Link href="/blog" className={styles.navLink}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <div className={styles.iconGroup}>
                <NavIconButton
                  href="https://github.com/maalikh"
                  icon={<FaGithub />}
                  ariaLabel="GitHub"
                />
                <NavIconButton
                  href="https://twitter.com/maalikahmadtech"
                  icon={<FaXTwitter />}
                  ariaLabel="X (Twitter)"
                />
                <NavIconButton
                  onClick={toggleTheme}
                  icon={theme === "light" ? <FaSun /> : <FaMoon />}
                  ariaLabel={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                />
              </div>
            </li>
          </ul>
          <div className={styles.socialLinks}>
            <a href="https://github.com/maalikh" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/maalikahmad" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/maalikahmadtech" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
