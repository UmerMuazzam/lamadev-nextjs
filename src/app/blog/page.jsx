import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={400}
            height={250}
            alt="blog image"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>

      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={400}
            height={250}
            alt="blog image"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>

      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={400}
            height={250}
            alt="blog image"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>

      <Link href="/blog/test" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/17655313/pexels-photo-17655313/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={400}
            height={250}
            alt="blog image"
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>

      
    </div>
  );
}

export default page
