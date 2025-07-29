import styles from "./Welcome.module.css";

export const Welcome = () => {
  return (
    <div className={styles.welcomeWrapper}>
      <div className={styles.welcomeCopy}>
        <div className={styles.leftCopy}>
          <p>Get the</p>
          <p>best</p>
        </div>
        <div className={styles.rightCopy}>
          <div className={styles.scroller}>
            <div className={styles.inner}>
              <p>
                Dog<span className={styles.highlight}>food</span>
              </p>
              <p>
                Cat<span className={styles.highlight}>treats</span>
              </p>
              <p>
                Bird<span className={styles.highlight}>seeds</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
