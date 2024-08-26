import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://www.casita.com/images/files/public/04102022083903AM-shutterstock_1009710289.jpg"
          className={styles.img}
          alt="about page"
          fill={true}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital story teller</h1>
          <h2 className={styles.imgDesc}>
            Hand craft award winning digital experience
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, et
            deserunt. Repellat, minus delectus a quo at distinctio perferendis
            voluptate doloribus cupiditate?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati et fugiat excepturi vero
            quos voluptatem suscipit quidem, doloremque quasi nemo accusamus ad,
            est dolorem fugit harum impedit nesciunt iusto? Laudantium.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            qui veniam facilis necessitatibus ducimus itaque, quas, ad provident
            velit culpa, nulla quo aut impedit id! Porro assumenda fuga quas
            voluptate?
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, et
            deserunt. Repellat, minus delectus a quo at distinctio perferendis
            voluptate doloribus cupiditate?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Obcaecati et fugiat excepturi vero
            quos voluptatem suscipit quidem, doloremque quasi nemo accusamus ad,
            <br /> <br />
            -Fast website
            <br /> <br />
            -mobile responsive
            <br /> <br />
            -High performance
          </p>
          <Button link={"/contact"} text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default page;
