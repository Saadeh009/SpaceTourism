import Head from 'next/head'
import styles from '../styles/Technology.module.css'
import Learn from '../components/Learn'
export default function technology() {
 return (
  <main className={styles.main}>
  <Head>
        <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
      </Head>
   <p className={styles.text}>
   The terminology...
  Space capsule
  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
  capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
  you'll spend your time during the flight. It includes a space gym, cinema, 
  and plenty of other activities to keep you entertained.
   </p>
   <div className={styles.learn}>
  <Learn />
   </div>   
  </main>
 )
}