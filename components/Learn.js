import { useEffect, useState } from "react"

export default function Learn() {
 const [count, setCount] = useState(0)
 function handleClick() {
  setCount(count++)
 }
 useEffect(e => {
  console.log("Rendered")
 },[count]) //compares old count array with new count array, if same won't re-render
 return (
  <>
  <p>counter is at {count} times</p>
  <button onClick={handleClick}>tap</button>
  </>
 )
}