import styles from "/styles/Planet.module.css"
import Image from "next/image";
import { useState } from "react";
//if i can pass a function as prop it'll work
export default function Planet(props) {
  const planet =  ["moon","mars","europa","titan"]

//i want to pass the subnavbar using javascript to not have to hard code it 16 times
//refactor #1
/*
 function handleClick(key) { 
  if (key === props.current) {
    setPlanet({...planet,current:"moon"})
  }
  else if (key === "mars") {
   setPlanet({...planet,current:"mars"})
  }
  else if (key === "europa") {
   setPlanet({...planet,current:"europa"})
  }
  else {
   setPlanet({...planet,current:"titan"})
  }
 }
 */
 // <li onClick={props.planetClick} id={props.planetId}>{props.planetName}</li> 
 return (
    <div className={styles.bodyWrap}>
    <div className={styles.left}>
     <Image src={props.img} width={350} height={350} />
    </div>
    <div className={styles.right}>
     <div className={styles.planetNav}>
      <ul className={styles.list}>
      <li onClick={() => props.planetHandler(planet[0])} id={(props.current === "moon") ? styles.active : null }>Moon</li>
       <li onClick={() => props.planetHandler(planet[1])} id={(props.current === "mars") ? styles.active : null }>Mars</li>
       <li onClick={() => props.planetHandler(planet[2])} id={(props.current === "europa") ? styles.active : null }>Europa</li>
       <li onClick={() => props.planetHandler(planet[3])} id={(props.current === "titan") ? styles.active : null }>Titan</li>
      </ul>
     </div>
     <br />
     <p className={styles.text}>
       <span className={styles.spanMoon}>{props.planetName}</span>
       <br />
       {props.text}
     </p>
     <br />
     <hr className={styles.line} />
     <div className={styles.math}>
      <p>{props.mathOne}</p>
      <p>{props.mathTwo}</p>
     </div>
    </div>
   </div>
 )
}