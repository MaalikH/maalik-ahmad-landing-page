import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
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
      <div className={classNames("container", styles.navbarMA)}>
        <Link className={classNames("navbar-brand", styles.navbarBrand)} href="/">
          MaalikAhmadTech
        </Link>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className={classNames("collapse navbar-collapse", { show: !isCollapsed })} id="navbarNav">
          <ul className={classNames("navbar-nav ms-auto", styles.navbarLinks)}>
            <li className="nav-item">
              <button className={classNames("nav-link", styles.navLink)} onClick={() => handleNavClick("portfolio")}>
                Portfolio
              </button>
            </li>
            <li className="nav-item">
              <button className={classNames("nav-link", styles.navLink)} onClick={() => handleNavClick("aboutMe")}>
                About Me
              </button>
            </li>
            <li className="nav-item">
              <button className={classNames("nav-link", styles.navLink)} onClick={() => handleNavClick("services")}>
                Services
              </button>
            </li>
            <li className="nav-item">
              <button className={classNames("nav-link", styles.navLink)} onClick={() => handleNavClick("contact")}>
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
