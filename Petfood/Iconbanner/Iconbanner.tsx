import { bannerContent } from "./constants";
import styles from "./IconBanner.module.css";

export const Iconbanner = () => {
  const { headline, subHeadline, items } = bannerContent;

  return (
    <section className={styles.iconbannerWrapper}>
      <h2>{headline}</h2>
      <p>{subHeadline}</p>
      <div className={styles.iconWrapper}>
        {items.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.iconText} className={styles.iconItem}>
              <IconComponent className={styles.icon} />
              <p className={styles.iconCopy}>{item.iconText}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
