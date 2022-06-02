import styles from "../styles/Animation.module.css"
import Image from "next/image"
export default function Animation() {
 return (
  <main className={styles.main}>
   <div className={styles.paragWrap}>
   <p className={styles.paragTrans}>with transition</p>
   <p className={styles.paragAnim}>with animation-name</p>
   <br />
   <div className={styles.images}>
    <Image className={styles.img} src="/pina.jpg" height={100} width={100}  />
    <Image className={styles.img} src="/margarita.jpg" height={100} width={100}  />
    <Image className={styles.img} src="/lemonade.jpg" height={100} width={100}  />
   </div>
   </div>

  </main>
 )
}