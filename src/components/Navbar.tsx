import styles from "@/styles/Navbar.module.scss";
import React from "react";
import Logo from "./Logo";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.allItems}>
          <li className={styles.logo}>
            <a href="https://www.lobe.ai/">
              <Logo width="5rem" height="auto" />
            </a>
          </li>
          <li>
            <ul className={styles.navItems}>
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
          </li>
          <li className={styles.downloadButton}>
            <button>Download</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
