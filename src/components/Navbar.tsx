import styles from "@/styles/Home.module.scss";
import navbarStyles from "@/styles/Navbar.module.scss";
import React from "react";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div>
      <nav className={navbarStyles.nav}>
        <ul className={navbarStyles.main}>
          <li>
            <span>
              <a href="">
                <Logo width="5rem" height="auto" />
              </a>
            </span>
          </li>
          <li>
            <ul className={navbarStyles.categories}>
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
          <li>
            <span>
              <button
                className={`${styles.downloadButton} ${navbarStyles.downloadButton}`}
              >
                Download
              </button>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
