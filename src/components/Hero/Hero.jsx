import React from 'react';
import styles from "./HeroStyle.module.css";
import { getImageUrl } from "../../utils"; 

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Old Money Style</h1>
        <p className={styles.description}>
        Discover the timeless elegance of old money fashion. 
        Our collection features sophisticated designs and classic pieces that 
        exude refinement and grace.
        </p>
        <a href="" className={styles.contactBtn}>
          view more
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};