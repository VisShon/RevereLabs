import React from 'react'
import styles from '../styles/Button.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
function Button({Content, onClick, link='',Color}) {
     const router = useRouter();
    
    console.log({Content, onClick, link,Color});
    return (
     
        <Link href={link}>
        <button className={styles.button}  style={{backgroundColor:Color}} onClick={() => {
            router.push(link);
        }}>
                {Content}

        </button>
            </Link> 
    )
}

export default Button