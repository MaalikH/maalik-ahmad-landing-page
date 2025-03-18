import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavClick = (sectionId: string) => {
    if (window.fullpage_api) {
      window.fullpage_api?.moveTo(sectionId);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsCollapsed(true); // Close menu on mobile after clicking a link
  };

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
              <button className={styles.navLink} onClick={() => handleNavClick("portfolio")}>
                Portfolio
              </button>
            </li>
            <li className="nav-item">
              <button className={styles.navLink} onClick={() => handleNavClick("aboutMe")}>
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button className={styles.navLink} onClick={() => handleNavClick("services")}>
                Services
              </button>
            </li>
            <li className="nav-item">
              <button className={styles.navLink} onClick={() => handleNavClick("contact")}>
                Contact
              </button>
            </li>
          </ul>
          <div className={styles.socialLinks}>
            <a href="https://github.com/maalikahmad" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/maalikahmad" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/maalikahmad" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaXTwitter />
            </a>
            <a href="https://instagram.com/maalikahmad" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
