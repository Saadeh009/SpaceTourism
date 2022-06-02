import { useState } from "react"
import styles from "/styles/MobileMenu.module.css"
import cn from "classnames"
import Link from "next/link"
export default function MobileMenu() {
const [menuDisplay , setMenuDisplay] = useState(false)
function handleMenu() {
   setMenuDisplay(!menuDisplay)
 }
 return (
<div className={styles.menuMobileWrap}>
   <div className={styles.hamburger}>
   <i className={menuDisplay ? "fa fa-window-close" : "fa fa-bars"} aria-hidden="true" id={styles.menu} onClick={handleMenu} ></i>
   </div>
   <div className={cn({
        [styles.menuMobile]: menuDisplay ? "mobile" : "" ,
        [styles.menuHidden]: menuDisplay ? "" : "hidden" ,
      })}>
     <Link href="/">
      <p className={styles.mobileItem}>Home</p>
     </Link>
     <Link href="/destination"> 
      <p className={styles.mobileItem}>Destination</p>
     </Link>
     <Link href="/crew"> 
      <p className={styles.mobileItem}>Crew</p>
     </Link>
     <Link href="/technology"> 
      <p className={styles.mobileItem}>Technology</p>
     </Link>

   </div>
   </div>
 )
}