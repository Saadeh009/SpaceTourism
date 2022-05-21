import Navbar from "../components/Navbar";
import styles from "../styles/Destination.module.css"
import Image from "next/image";
import Head from 'next/head'
import {useState} from 'react'
export default function Destination() {
 const [active,setActive] = useState("a")
 const [planet , setPlanet] = useState("moon")
// const items = document.querySelectorAll("ul li")
 function handleClickOne(event) { 
  setActive("a")
  setPlanet("moon")
 }
 function handleClickTwo(event) {
  setActive("b")
  setPlanet("mars")
 }
 function handleClickThree(event) {
  setActive("c")
  setPlanet("europa")
 }
 function handleClickFour(event) {
  setActive("d")
  setPlanet("titan")
 }
 return(
  <section className={styles.main}>
   <Head>
        <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
      </Head>

   <div className={styles.gap}></div>
   <p className={styles.subheading}><span className={styles.span}>01</span>Pick your destination</p>

   <main className={planet === "moon" ? styles.show : styles.hide}>
   <div className={styles.bodyWrap}>
    <div className={styles.left}>
     <Image src="/image-moon.png" width={350} height={350} />
    </div>
    <div className={styles.right}>
     <div className={styles.planetNav}>
      <ul className={styles.list}>
       <li onClick={handleClickOne} id={(active === "a") ? styles.active : null }>Moon</li>
       <li onClick={handleClickTwo} id={(active === "b") ? styles.active : null }>Mars</li>
       <li onClick={handleClickThree} id={(active === "c") ? styles.active : null }>Europa</li>
       <li onClick={handleClickFour} id={(active === "d") ? styles.active : null }>Titan</li>
      </ul>
     </div>
     <br />
     <p className={styles.text}>
      <span className={styles.spanMoon}>Moon</span>
       <br />
       See our planet as you’ve never seen it before.

       A perfect relaxing trip away to help 
       regain perspective and come back refreshed.

       While you’re there, take in some history 
       by visiting the Luna 2 and Apollo 11 landing sites.
     </p>
     <br />
     <hr className={styles.line} />
     <div className={styles.math}>
      <p>Avg Distance 384,400 km</p>
      <p>Est. travel time 3 days</p>
     </div>
    </div>
   </div>
   </main>
   

   <main className={planet === "mars" ? styles.show : styles.hide}>
   <div className={styles.bodyWrap}>
    <div className={styles.left}>
     <Image src="/image-mars.png" width={350} height={350} />
    </div>
    <div className={styles.right}>
     <div className={styles.planetNav}>
      <ul className={styles.list}>
       <li onClick={handleClickOne} id={(active === "a") ? styles.active : null }>Moon</li>
       <li onClick={handleClickTwo} id={(active === "b") ? styles.active : null }>Mars</li>
       <li onClick={handleClickThree} id={(active === "c") ? styles.active : null }>Europa</li>
       <li onClick={handleClickFour} id={(active === "d") ? styles.active : null }>Titan</li>
      </ul>
     </div>
     <br />
     <p className={styles.text}>
      <span className={styles.spanMoon}>Mars</span>
       <br />
      Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. It’s two and a half times 
      the size of Everest!
     </p>
     <br />
     <hr className={styles.line} />
     <div className={styles.math}>
      <p>Avg Distance 225 mil. km</p>
      <p>Est. travel time 9 months</p>
     </div>
    </div>
   </div>
   </main>

   <main className={planet === "europa" ? styles.show : styles.hide}>
   <div className={styles.bodyWrap}>
    <div className={styles.left}>
     <Image src="/image-europa.png" width={350} height={350} />
    </div>
    <div className={styles.right}>
     <div className={styles.planetNav}>
      <ul className={styles.list}>
       <li onClick={handleClickOne} id={(active === "a") ? styles.active : null }>Moon</li>
       <li onClick={handleClickTwo} id={(active === "b") ? styles.active : null }>Mars</li>
       <li onClick={handleClickThree} id={(active === "c") ? styles.active : null }>Europa</li>
       <li onClick={handleClickFour} id={(active === "d") ? styles.active : null }>Titan</li>
      </ul>
     </div>
     <br />
     <p className={styles.text}>
      <span className={styles.spanMoon}>Europa</span>
       <br />
       The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
       winter lover’s dream. With an icy surface, it’s perfect for a bit of 
       ice skating, curling, hockey, or simple relaxation in your snug 
       wintery cabin.
     </p>
     <br />
     <hr className={styles.line} />
     <div className={styles.math}>
      <p>Avg Distance 628 mil. km</p>
      <p>Est. travel time 3 years</p>
     </div>
    </div>
   </div>
   </main>

   <main className={planet === "titan" ? styles.show : styles.hide}>
   <div className={styles.bodyWrap}>
    <div className={styles.left}>
     <Image src="/image-titan.png" width={350} height={350} />
    </div>
    <div className={styles.right}>
     <div className={styles.planetNav}>
      <ul className={styles.list}>
       <li onClick={handleClickOne} id={(active === "a") ? styles.active : null }>Moon</li>
       <li onClick={handleClickTwo} id={(active === "b") ? styles.active : null }>Mars</li>
       <li onClick={handleClickThree} id={(active === "c") ? styles.active : null }>Europa</li>
       <li onClick={handleClickFour} id={(active === "d") ? styles.active : null }>Titan</li>
      </ul>
     </div>
     <br />
     <p className={styles.text}>
      <span className={styles.spanMoon}>Titan</span>
       <br />
      The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of the Rings of Saturn.
     </p>
     <br />
     <hr className={styles.line} />
     <div className={styles.math}>
      <p>Avg Distance 1.6 bil. km</p>
      <p>Est. travel time 7 years</p>
     </div>
    </div>
   </div>
   </main>
  </section>
  
  
 )
}