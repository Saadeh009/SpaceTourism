import styles1 from '../styles/Home2.module.css'

//css classes in root directory are working
export default function New() {
 return (
  <>
  
  <h1 className={styles1.testing}>hiii</h1>
  <h1 className={styles1.earth}>EARTH</h1>
  <p className={styles1.subheading}>A subheading</p>
  </>
 )
}