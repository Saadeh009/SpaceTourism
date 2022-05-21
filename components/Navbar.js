import styles from '/styles/Navbar.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
export default function Navbar() {
 const [active,setActive] = useState("a")

// const items = document.querySelectorAll("ul li")
 function handleClickOne(event) { 
  setActive("a")
 }
 function handleClickTwo(event) {
  setActive("b")
 }
 function handleClickThree(event) {
  setActive("c")
 }
 function handleClickFour(event) {
  setActive("d")
 }
 return (
  <section className={styles.main}>
   
   <nav className={styles.navbar}>
   <div>
   <Image src="/../logo.svg" width={40} height={40} className={styles.logo} />
   </div>
   <div className={styles.list}>
   <div className={styles.listWrap}>
    <ul>
      <Link href="/">
     <li onClick={handleClickOne} className={styles.listItem} id={(active === "a") ? styles.active : null }>Home</li>
      </Link>
     <Link href="/destination">
     <li onClick={handleClickTwo} className={styles.listItem} id={(active === "b") ? styles.active : null }>Destination</li>
     </Link>
     <Link href="/crew">
     <li onClick={handleClickThree} className={styles.listItem} id={(active === "c") ? styles.active : null }>Crew</li>
     </Link>
     <Link href="technology">
     <li onClick={handleClickFour} className={styles.listItem} id={(active === "d") ? styles.active : null }>Technology</li>
     </Link>
    </ul>
   </div>
  
   </div>
   </nav>     
  
  </section>
 )
}