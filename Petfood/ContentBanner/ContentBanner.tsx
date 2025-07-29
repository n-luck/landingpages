import Image from "next/image";
import { contentBanner } from "./constants";
import styles from "./ContentBanner.module.css";

export const ContentBanner = () => {
  return (
    <section className={styles.contentBanner}>
      {contentBanner.map((content, index) => (
        <div className={styles.contentBannerWrapper} key={content.title}>
          <div
            className={`${styles.contentBannerImage} ${
              index % 2 === 1 ? styles.contentBannerOrder : ""
            }`}
          >
            <Image
              src={content.image}
              alt={content.title}
              fill
              objectFit="cover"
            />
          </div>
          <div className={styles.contentBannerCopy}>
            <h2>{content.title}</h2>
            <p>{content.copy}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
