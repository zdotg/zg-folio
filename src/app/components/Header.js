"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAlignJustify, FaBars } from "react-icons/fa";
import HeaderNavLink from "./HeaderNavLink";
import MyEmoji from "../../../public/images/emoji-sticker.png";
import styles from "./Header.module.css"; // Import the CSS module

const menuItems = [
  { label: `Home`, url: `/` },
  { label: `Projects`, url: `zg/projects` },
  { label: `Experience`, url: `zg/experience` },
  { label: `Contact`, url: `zg/contact` },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      {" "}
      {/* Apply the CSS module class */}
      <div className="flex items-center">
        <Link href="/">
          <Image width={70} height={70} src={MyEmoji} className="" alt="logo" />
          Zach Gallman
        </Link>
        <nav>
          <div className={` ${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
            {" "}
            {/* Apply the CSS module classes */}
            <ul
              className={`flex flex-wrap sm:gap-x-0.5 text-white ${styles.menuItems}`}
            >
              {" "}
              {/* Apply the CSS module class */}
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
            {" "}
            {/* Apply the CSS module class */}
            <FaBars />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
