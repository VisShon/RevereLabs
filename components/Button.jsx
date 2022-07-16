import React from 'react'
import styles from '../styles/Button.module.scss'
import Image from 'next/image'

function Button({Content, onClick, Link='#'}) {
  return (
    <div>
      <a onClick={onClick} className={styles.button} href={Link}>
        {Content}
      </a>
    </div>
  )
}

export default Button