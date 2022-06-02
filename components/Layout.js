import MobileMenu from "./MobileMenu"
import Navbar from "./Navbar"
export default function Layout({children}) {
 return (
  <div>
   <Navbar />
   <MobileMenu />
   {children}
  </div>

 )
}