import classNames from "classnames";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const handleNavClick = (sectionId: string) => {
    if (window.fullpage_api) {
      window.fullpage_api?.moveTo(sectionId);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <nav className={classNames("navbar navbar-dark navbar-transparent")}>
      <div className={classNames("container", styles.navbarMA)}>
        <Link
          className={classNames("navbar-brand", styles.navbarBrand)}
          href="/"
        >
          Maalik Ahmad
        </Link>
        <ul
          className={classNames(
            "navbar-nav d-flex flex-row",
            styles.navbarLinks
          )}
        >
          <li className="nav-item mx-2">
            <button
              className={classNames("nav-link", styles.navLink)}
              onClick={() => handleNavClick("portfolio")}
            >
              Portfolio
            </button>
          </li>
          <li className="nav-item mx-2">
            <button
              className={classNames("nav-link", styles.navLink)}
              onClick={() => handleNavClick("aboutMe")}
            >
              About Me
            </button>
          </li>
          <li className="nav-item mx-2">
            <button
              className={classNames("nav-link", styles.navLink)}
              onClick={() => handleNavClick("services")}
            >
              Services
            </button>
          </li>
          <li className="nav-item mx-2">
            <button
              className={classNames("nav-link", styles.navLink)}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
