import Head from 'next/Head'
import Image from 'next/image'
import styles from "../styles/Crew.module.css"
import { useState } from 'react'
import cn from 'classnames'
import Team from '../components/Team'
export default function crew() {
  const names = ["DOUGLAS HURLEY","MARK SHUTTLEWORTH","VICTOR GLOVER","ANOUSHEH ANSARI"]
  const roles =["COMMANDER","MISSION SPECIALIST","PILOT","FLIGHT ENGINEER"]
  const texts =[
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
  ]
  const images =["/image-douglas-hurley.png","/image-mark-shuttleworth.png","/image-victor-glover.png","/image-anousheh-ansari.png"]
  /*
 const [crew , setCrew] = useState({
   key:["douglas","mark","viktor","anousheh"],
   current:"douglas"
  })
  function handleClick(key) { 
  if (key === "douglas") {
    setPlanet({...planet,current:"douglas"})
  }
  else if (key === "mark") {
   setPlanet({...planet,current:"mark"})
  }
  else if (key === "viktor") {
   setPlanet({...planet,current:"viktor"})
  }
  else {
   setPlanet({...planet,current:"anousheh"})
  }
 }
 */
 const [ballBlock,setBallBlock] = useState(0)
 const [ball,setBall] = useState({
  ballStatus: 0,
  balls: [{id:1} , {id:2} , {id:3},{id:4}]
 })
 function handleBall(index) {
  setBall({...ball, ballStatus: ball.balls[index]})
  setBallBlock(index)
 }
 function handleBallStyles(index) {
   
  if(ball.ballStatus === ball.balls[index]) {
    
    return true
  } else {
    return false
  }
 }
 return (
  <main className={styles.main}>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Bellefair&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Barlow&display=swap" rel="stylesheet" />
    </Head>
  <p className={styles.meet}> <span className={styles.subheading}>02</span> Meet your crew </p>
  <main className={ballBlock === 0 ? styles.show : styles.hide}>
  <Team
  role={roles[0]}
  fullName={names[0]}
  text={texts[0]}
  img={images[0]}
  />
  </main>
  <main className={ballBlock === 1 ? styles.show : styles.hide}>
  <Team
  role={roles[1]}
  fullName={names[1]}
  text={texts[1]}
  img={images[1]}
  />
  </main>
  <main className={ballBlock === 2 ? styles.show : styles.hide}>
  <Team
  role={roles[2]}
  fullName={names[2]}
  text={texts[2]}
  img={images[2]}
  />
  </main>
  <main className={ballBlock === 3 ? styles.show : styles.hide}>
  <Team
  role={roles[3]}
  fullName={names[3]}
  text={texts[3]}
  img={images[3]}
  />
  </main>
   <div className={styles.sliderWrap}>
       {ball.balls.map((val , index) => {
      return (<div key={index} onClick={() => handleBall(index)} className={cn({
        [styles.ball]: 'ball',
        [styles.white]: handleBallStyles(index) ? "white" : "" ,
      })}></div>)
     }
     )}
       </div>

  </main>
 )
}