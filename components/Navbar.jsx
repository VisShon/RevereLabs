import React,{useEffect,useState} from 'react'
import Button from './Button'
import Image from 'next/Image'
import '../pages/_document'
function Navbar() {
  const [pageLocation,setPageLocation] =useState(null);
  const [isUserLoggedIn,setIsUserLoggedIn] = useState();

  useEffect(() => {
    const getPageLocation = () => {
        const res = new URL(window.location.href).pathname;
        setIsUserLoggedIn(true&&window.localStorage.getItem('user'))
        setPageLocation(res);
    }
    getPageLocation();
  })


   
  return (
    <>
        <div className="flex justify-between items-center  p-10 font-Mada text-[1vw] w-[100%] z-10 ">
          <a href="https://reverelabs.org/">
            <Image src="/logo.png" width={120} height={60}/>
          </a>
          {/* login && (<></>) */}
          <div className="flex justify-between w-[25%] text-textMain text-[1rem] small:hidden">
             <a href="/Home" style={pageLocation=='/Home'?{color:"#1178D7"}:{}}>Home</a>
             <a href="/Project" style={pageLocation=='/Project'?{color:"#1178D7"}:{}}>Project</a>
             <a href="/Daos" style={pageLocation=='/Daos'?{color:"#1178D7"}:{}}>DAOs</a>
             <a href="https://linktr.ee/reverelabs">Contact Us</a>
          </div>
          {!isUserLoggedIn?<Button Content={'Login'} Link={'/Login'}/>:
          <Button Content={'Your Profile'} Link={'/Profile'}/>}
        </div>
    </>
  )
}

export default Navbar