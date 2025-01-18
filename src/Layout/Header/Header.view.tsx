import styles from "./Header.module.scss";
import type { THeader } from "./Header.types.ts";
import { FC } from "react";
import { menuItems } from "./Header.config.ts";

const HeaderView: FC<THeader> = (props) => {
  const { isMenuOpen, toggleMenu, isScrolled } = props;

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.header__scrolled : ""}`}
    >
      <a href="#home" className={styles.logo}>
        @mask.bright
      </a>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.nav__open : ""}`}>
        <ul className={styles.menu}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`${styles.burger} ${isMenuOpen ? styles.burger__open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
};

export default HeaderView;
