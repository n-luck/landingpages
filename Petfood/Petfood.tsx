import { Banner } from "./Banner";
import { ContentBanner } from "./ContentBanner";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Welcome } from "./Welcome";

import styles from "./Petfood.module.css";
import { Iconbanner } from "./Iconbanner";
import { ScrollBanner } from "./ScrollBanner";

export const Petfood = () => {
  return (
    <>
      <Header />
      <Banner />
      <main className={styles.mainWrapper}>
        <div className={styles.contentWrapper}>
          <Welcome />
          <ContentBanner />
          <Iconbanner />
        </div>
      </main>
      <ScrollBanner />
      <Footer />
    </>
  );
};
