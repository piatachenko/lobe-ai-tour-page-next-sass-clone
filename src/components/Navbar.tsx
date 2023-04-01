import styles from "@/styles/Navbar.module.scss";
import React, { useState } from "react";
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
    <div>
      <nav className={styles.nav}>
        <ul
          className={`${styles.allItems} ${
            mobileDropdownNavbar ? styles.dropped : ""
          }`}
        >
          <li>
            <ul className={styles.dropdownHeader}>
              <li className={styles.logo}>
                <a href="https://www.lobe.ai/">
                  <Logo width="5rem" height="auto" />
                </a>
              </li>
              <li className={styles.navToggle}>
                <button onClick={handleClick}>
                  <span
                    className={`${styles.hamburger} ${
                      mobileDropdownNavbar ? styles.hamburgerClose : ""
                    } `}
                  ></span>
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
              <li>
                <hr />
              </li>
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
            <span>
              <button className={styles.dropdownDownloadButton}>
                Download
              </button>
            </span>
          </li>
          <li>
            <button className={styles.downloadButton}>Download</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
