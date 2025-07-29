"use client";

import { useEffect, useState } from "react";

import styles from "./ScrollBanner.module.css";
import { Button } from "../Button";

export const ScrollBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400) {
      setIsVisible(true);
    } else if (scrolled <= 400) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div
      className={`${styles.scrollBannerWrapper} ${
        isVisible && styles.scrollBannerVisible
      }`}
    >
      <div className={styles.scrollBannerContent}>
        <h3>Get the latest news and offers in our newsletter. </h3>
        <Button href="/" buttonText="Sign up now" secondary />
      </div>
    </div>
  );
};
