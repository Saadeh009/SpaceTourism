import Head from 'next/Head'
import styles from "../styles/Crew.module.css"

export default function crew() {
 return (
  <main className={styles.main}>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
    </Head>
   <p className={styles.text}>
   02 Meet your crew

  Commander
  Douglas Hurley

  Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
  and former NASA astronaut. He launched into space for the third time as 
  commander of Crew Dragon Demo-2.s
   </p>
  </main>
 )
}