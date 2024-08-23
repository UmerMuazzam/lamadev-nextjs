import React from "react";
import heroImg from "public/hero.png";
import Image from "next/image";
import styles from "./page.module.css";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital product</h1>
        <p className={styles.desc}>
          {" "}
          Turning your idea to reality, we bring the team from the glob tech
          industry
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={heroImg} className={styles.img} alt="hero image" />
      </div>
    </div>
  );
};

export default page;
