import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button';
import Image from 'next/image';

const page = ({params}) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
          <Button link="#" text="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt="category"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
          <Button link="#" text="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt="category"
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>title</h1>
          <p className={styles.desc}>desc</p>
          <Button link="#" text="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill={true}
            alt="category"
            className={styles.image}
          />
        </div>
      </div>

      
    </div>
  );
}

export default page
