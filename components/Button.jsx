import React from 'react'
import styles from '../styles/Button.module.scss'
import Image from 'next/image'
import Link from 'next/link';
function Button({Content, onClick, link='',Color}) {
    console.log({Content, onClick, link,Color});
    return (
     
        <Link href={link}>
            <a className={styles.button}
                href={link}
                style={{backgroundColor:Color}}>
                {Content}
            </a>
            </Link> 
    )
}

export default Button