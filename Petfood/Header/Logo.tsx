import styles from "./Header.module.css";

export const Logo = () => {
  return (
    <p className={styles.logo}>
      Pet<span className={styles.logoHighlight}>Food</span>
    </p>
  );
};
