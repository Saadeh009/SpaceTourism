import Navbar from "./Navbar"
import styles from "../styles/layout.module.css"
export default function Layout({children}) {
 return (
  <div className={styles.main}>
   <Navbar />
   {children}
  </div>

 )
}