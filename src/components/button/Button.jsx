import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'

const Button = ({link,text}) => {
  return (
    <Link href={link}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
}

export default Button
