import React, { ReactNode } from "react";
import styles from "./NavIconButton.module.scss";

interface NavIconButtonBaseProps {
  icon: ReactNode;
  ariaLabel: string;
}

interface NavIconButtonLinkProps extends NavIconButtonBaseProps {
  href: string;
  onClick?: never;
}

interface NavIconButtonActionProps extends NavIconButtonBaseProps {
  onClick: () => void;
  href?: never;
}

type NavIconButtonProps = NavIconButtonLinkProps | NavIconButtonActionProps;

const NavIconButton: React.FC<NavIconButtonProps> = ({
  icon,
  ariaLabel,
  href,
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.navIconButton}
        aria-label={ariaLabel}
      >
        {icon}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={styles.navIconButton}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};

export default NavIconButton;
