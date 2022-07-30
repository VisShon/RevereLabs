import React from 'react'
import styles from '../styles/Button.module.scss'
import Image from 'next/image'

function Button({Content, onClick, Link=''}) {
  return (
      Link=='null'? <a onClick={onClick} className={styles.button}>
        {Content}
      </a>:
      <a onClick={onClick} className={styles.button} href={Link}>
        {Content}
      </a>
  )
}

export default Button