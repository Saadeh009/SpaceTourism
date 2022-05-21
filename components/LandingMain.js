import styles from '/styles/LandingMain.module.css'
import {useState} from 'react'
export default function LandingMain() {

 return (
 <section className={styles.main}>
  <div className={styles.text}>
   <p className={styles.subheading}>So, you want to travel to</p>
   <br />
   <p className={styles.heading}>Space</p>
   <p className={styles.lorem}>
    Let's face it; if you want to go to space, you might as well genuinely go to 
    outer space and not hover kind of on the edge of it. Well sit back, and relax 
    because we'll give you a truly out of this world experience!
   </p>
  </div>
  <div>
   <br />
   <br />
   <button className={styles.exploreBtn}>Explore</button>
  </div>
 </section>
 )
}