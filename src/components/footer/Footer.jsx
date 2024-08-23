import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2024 copyright act, all rights reserved</div>
      <div className={styles.social}>
        <Image width={15} height={15} className={styles.icon} src="/1.png" alt="lama dev" />
        <Image width={15} height={15} className={styles.icon} src="/2.png" alt="lama dev" />
        <Image width={15} height={15} className={styles.icon} src="/3.png" alt="lama dev" />
        <Image width={15} height={15} className={styles.icon} src="/4.png" alt="lama dev" />
      </div>
    </div>
  );
};

export default Footer;
