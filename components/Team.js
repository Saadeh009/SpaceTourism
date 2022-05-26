import styles from "../styles/Team.module.css"
import Image from "next/image";

export default function Team(props) {
 const crew =  ["one","two","three","four"]
 //<div className={styles.slider}></div>
 return (
   <div className={styles.bodyWrap}>

     <div className={styles.left}>
       <p className={styles.text}>
         <span className={styles.role}> {props.role} </span>
         <span className={styles.heading}> {props.fullName} </span>
         {props.text}
       </p>
     </div>

     <div className={styles.right}>
       <Image className={styles.img} src={props.img} height={500} width={400}  />
     </div>
   </div>
 )
}