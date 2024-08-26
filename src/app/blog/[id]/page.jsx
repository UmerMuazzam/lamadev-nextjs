import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </h1>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              ex corrupti cumque rem ad est quibusdam suscipit eligendi
              praesentium. Ea reprehenderit error, inventore quis minima
              molestias nulla, labore earum nesciunt maiores repellendus odit
              facilis.
            </p>
            <div className={styles.author}>
              <Image
                src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                height={40}
                width={40}
                className={styles.avatar}
                alt="auther"
              />
              <span className={styles.username}>John doe</span>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              fill={true}
              className={styles.image}
              alt="post"
            />
          </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            aliquam voluptates. Quis iste odio consectetur vitae quia
            temporibus, molestias dolor, quos eius tenetur, vel corporis dicta
            animi dolorem repellat illum? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dignissimos architecto corrupti. <br /> <br /> Corporis similique illo ducimus aut quaerat maxime
            adipisci quos. Consectetur unde necessitatibus tenetur itaque ut
            autem excepturi ipsa hic quis, qui exercitationem voluptates? Quis
            debitis accusamus sint laboriosam natus ex earum itaque numquam
            alias, explicabo beatae possimus, fugit similique sapiente quae in,
            nihil nulla illum culpa aliquid? Provident amet animi corporis ipsum
            nostrum sunt obcaecati delectus sed sapiente reiciendis quaerat
            dignissimos commodi placeat sequi, <br /> <br /> eius praesentium voluptas quos
            veritatis dicta, saepe velit quidem consectetur in earum. Aperiam
            itaque quibusdam autem sunt, quasi laudantium animi qui laboriosam
            vitae corporis assumenda accusantium impedit! Odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nihil, accusantium quibusdam velit quisquam nobis cumque harum aliquam laborum architecto? Facere fuga enim asperiores obcaecati voluptatem voluptates architecto dolore ad?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore vel ex est impedit maxime, cumque temporibus a veritatis, possimus explicabo eaque adipisci voluptate eligendi consequatur vitae qui consectetur, vero ipsa!
          </p>
        </div>
      </div>
    </div>
  );
}

export default page
