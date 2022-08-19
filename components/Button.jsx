import React from 'react'
import styles from '../styles/Button.module.scss'
import Image from 'next/image'

function Button({Content, onClick, Link='',Color}) {
  return (
      Link==''? <a onClick={onClick} className={styles.button}>
        {Content}
      </a>:
      <a className={styles.button} href={Link} style={{backgroundColor:Color}}>
        {Content}
      </a>
  )
}

export default Button