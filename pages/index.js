import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingMain from '../components/LandingMain'
import { useState } from 'react'
export default function Home() {
  return (


      <header className={styles.header}>
      <Head>
        <title>Space tourism</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.gap}></div>
        <div className={styles.bodyWrap}>
        <LandingMain />
        </div>
      </header>
  
  )
}
