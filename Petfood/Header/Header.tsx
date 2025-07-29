import styles from "./Header.module.css";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
