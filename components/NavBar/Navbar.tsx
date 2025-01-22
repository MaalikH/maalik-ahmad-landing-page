import classNames from 'classnames';
import Link from 'next/link';
import styles from "./Navbar.module.scss";
import HeroCTA from '../Hero/HeroCTA';

const Navbar = () => {
  return (
    <nav className={classNames('navbar navbar-dark navbar-transparent')}>
      <div className={classNames("container", styles.navbarMA)}>
        <Link href="/" className="navbar-brand m-0">
          Maalik Ahmad
        </Link>
        <ul className={classNames("navbar-nav d-flex flex-row", styles.navbarLinks)}>
          <li className="nav-item mx-2">
            <Link href="#featured-works" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link href="#about-me" className="nav-link">
              About Me
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link href="#services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link href="#services" className="nav-link">
              Services
            </Link>
          </li>
        </ul>
        <HeroCTA />
      </div>
    </nav>
  );
};

export default Navbar;
