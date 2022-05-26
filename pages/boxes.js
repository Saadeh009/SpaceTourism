import { useState } from "react"
import styles from "../styles/Boxes.module.css"
import cn from 'classnames'
/*
cn({
        [styles.box]: 'box',
        [styles.blue]:'blue',
      })
*/
export default function Boxes() {
 const [box,setBox] = useState({
  boxStatus: null,
  boxes: [{id:1} , {id:2} , {id:3} , {id:4}]
 })
 function handleBox(index) {
  setBox({...box, boxStatus: box.boxes[index]})
  console.log(box)
 }
 function handleBoxStyles(index) {
   
  if(box.boxStatus === box.boxes[index]) {
    
    return true
  } else {
    return false
  }
 }
 return (
  <main className={styles.main}>
   <div className={styles.wrap}>
     {box.boxes.map((val , index) => {
      return (<div key={index} onClick={() => handleBox(index)} className={cn({
        [styles.box]: 'box',
        [styles.red]: handleBoxStyles(index) ? "red" : "" ,
      })}></div>)
     }
     )}
   </div>
  </main>
 )
}