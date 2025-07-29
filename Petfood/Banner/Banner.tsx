"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../Button";

import { banner } from "../constants";
import styles from "./Banner.module.css";
import Link from "next/link";

export const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const imageSrc = isMobile ? banner.bannerMobile : banner.bannerDesktop;

  return (
    <>
      <div className={styles.bannerOffer}>
        {!isMobile && "☀️ "}Ready for your holiday? Check out our{" "}
        <Link href="/">travel offers</Link>. ☀️
      </div>
      <section className={styles.bannerWrapper}>
        <div className={styles.bannerCopy}>
          <h1>{banner.bannerHeadline}</h1>
          <p>{banner.bannerText}</p>
          <Button buttonText={banner.buttonText} href={banner.buttonLink} />
        </div>
        <Image
          src={imageSrc}
          fill
          alt={banner.bannerAlt}
          objectFit="cover"
          priority
        />
      </section>
    </>
  );
};
