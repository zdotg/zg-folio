"use client";

import LightSwitch from "./LightSwitch";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import HeaderNavLink from "./HeaderNavLink";
import styles from "./Header.module.css"; // Import the CSS module

const menuItems = [
  { label: `Home`, url: `/` },
  { label: `Portfolio`, url: `zg/portfolio` },
  { label: `Experience`, url: `zg/experience` },
  { label: `Contact`, url: `zg/contact` },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`flex items-center justify-between  ${styles.navbar}`}>
      <div className={`flex items-center`}>
        <div className={`${styles.logo} ${styles.title}`}>Zach Gallman</div>
        <LightSwitch />
      </div>
      <nav>
        <div className={` ${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={` sm:gap-x-0.5 text-white ${styles.menuItems}`}>
            {menuItems.map(({ url, label }, index) => (
              <li key={index}>
                <HeaderNavLink href={url}>{label}</HeaderNavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`flex justify-end ${styles.toggleButton}`}
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
      </nav>
    </header>
  );
};

export default Header;
