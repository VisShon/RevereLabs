import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../components/Home'


export default function Index() {
    return (
        <div className={styles.container}>
            <Head>
                <title>revere labs</title>
                <meta name="description"
                    content="Generated by create next app" />
                <link rel="icon"
                    href="/favicon.ico" />
            </Head>
            <Home/>
        </div>
    )
}
