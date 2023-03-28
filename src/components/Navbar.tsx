import styles from "@/styles/Navbar.module.scss";
import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.allItems}>
          <li className={styles.logo}>
            <a href="">
              <Logo width="5rem" height="auto" />
            </a>
          </li>
          <li>
            <ul className={styles.navItems}>
              <li>
                <a href="">Overview</a>
              </li>
              <li>
                <a href="">Examples</a>
              </li>
              <li>
                <a href="">Tour</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Help</a>
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
