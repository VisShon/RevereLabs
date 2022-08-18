import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import FilterButton from '../components/FilterButton'

function Home() {
  return (
    <div className={styles.container}>
        <div className="fixed top-[10vh] left-[-5rem]"><Image src="/background/bg1.png" height="500" width="415" /></div>
        <div className="fixed top-[55vh] bottom-0 right-0"><Image src="/background/bg2.png" height="480" width="670" /></div>

        <div className="relative flex w-[100%] h-auto items-center justify-between">
            <SearchBar/>
            <FilterButton/>
        </div>
    </div>
  )
}

export default Home