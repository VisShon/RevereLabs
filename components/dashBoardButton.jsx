import React from 'react'
import styles from '../styles/Button.module.scss'
import Image from 'next/image'

function DashBoardButton({Content, onClick, Link='',image,colour}) {
  return (
      <a onClick={onClick} className={styles.dashBoardButton} href={Link} style={{backgroundColor:colour}}>
        <Image src={image} height='100' width='100'/>
        {Content}
      </a>
  )
}

export default DashBoardButton