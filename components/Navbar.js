import styles from '/styles/Navbar.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
export default function Navbar() {
 const [active,setActive] = useState(
   {
  key:["a","b","c","d"],
  current: "a"
})
// const items = document.querySelectorAll("ul li")
//i dont want 4 different handle click functions, it's bad practice i need to make it so one function can work for any nav item
 function handleClick(key) { 
  if (key === "a") {
    setActive({...active,current:"a"})
  }
  else if (key === "b") {
   setActive({...active,current:"b"})
  }
  else if (key === "c") {
   setActive({...active,current:"c"})
  }
  else {
   setActive({...active,current:"d"})
  }

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
     <li onClick={() => handleClick(active.key[0])} className={styles.listItem} id={(active.current === "a") ? styles.active : null }>Home</li>
      </Link>
     <Link href="/destination">
     <li onClick={() => handleClick(active.key[1])} className={styles.listItem} id={(active.current === "b") ? styles.active : null }>Destination</li>
     </Link>
     <Link href="/crew">
     <li onClick={() => handleClick(active.key[2])} className={styles.listItem} id={(active.current === "c") ? styles.active : null }>Crew</li>
     </Link>
     <Link href="technology">
     <li onClick={() => handleClick(active.key[3])} className={styles.listItem} id={(active.current === "d") ? styles.active : null }>Technology</li>
     </Link>
    </ul>
   </div>
  
   </div>
   </nav>     
  
  </section>
 )
}