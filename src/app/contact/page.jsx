import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.image}
            src={"/contact.png"}
            fill={true}
            alt="Contact us"
          />
        </div>
        <form  className={styles.form}>
          <input type="text" placeholder="Email" className={styles.input} />
          <input type="text" placeholder="Password" className={styles.input} />
          <textarea
            placeholder="Message"
            cols="30"
            rows="10"
            className={styles.textArea}
          />
          <Button link='#' text='Send'/>
        </form>
      </div>
    </div>
  );
};

export default page;
