import styles from "@/styles/Hamburger.module.scss";

interface HamburgerProps {
  currentState?: boolean;
}

export default function Hamburger({ currentState }: HamburgerProps) {
  return (
    <>
      <span
        className={`${styles.hamburger} ${currentState ? styles.hamburgerClose : ""}`}
      ></span>
    </>
  );
}
