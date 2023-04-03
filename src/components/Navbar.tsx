import styles from "@/styles/Navbar.module.scss";
import React, { useState } from "react";
import DownloadBtn from "./DownloadBtn";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [mobileDropdownNavbar, setMobileDropdownNavbar] = useState(false);
  function handleClick() {
    setMobileDropdownNavbar(!mobileDropdownNavbar);
  }
  return (
    <>
      <nav
        className={`${styles.nav} ${
          mobileDropdownNavbar ? styles.dropped : ""
        }`}
      >
        <ul className={`${styles.allItems}`}>
          <li>
            <ul className={styles.dropdownHeader}>
              <li className={styles.logo}>
                <a href="https://www.lobe.ai/">
                  <Logo width="5rem" height="auto" />
                </a>
              </li>
              <li className={styles.navToggle}>
                <button onClick={handleClick}>
                  <span className={styles.hamburgerContainer}>
                    <Hamburger currentState={mobileDropdownNavbar} />
                  </span>
                </button>
              </li>
            </ul>
          </li>
          <li
            className={`${styles.dropdown} ${
              mobileDropdownNavbar ? "" : styles.hidden
            }`}
          >
            <ul className={styles.navItems}>
              <li>{/* <hr /> */}</li>
              <li>
                <a
                  href="https://www.lobe.ai/"
                  className={
                    currentPage === "overview" ? styles.currentPage : ""
                  }
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="https://www.lobe.ai/examples"
                  className={
                    currentPage === "examples" ? styles.currentPage : ""
                  }
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="https://www.lobe.ai/tour"
                  className={currentPage === "tour" ? styles.currentPage : ""}
                >
                  Tour
                </a>
              </li>
              <li>
                <a
                  href="https://www.lobe.ai/blog"
                  className={currentPage === "blog" ? styles.currentPage : ""}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://www.lobe.ai/docs/welcome/welcome"
                  className={currentPage === "help" ? styles.currentPage : ""}
                >
                  Help
                </a>
              </li>
            </ul>
            <span className={styles.dropdownDownloadButton}>
              <DownloadBtn />
            </span>
          </li>
          <li className={styles.downloadButton}>
            <DownloadBtn />
          </li>
        </ul>
      </nav>
    </>
  );
}
