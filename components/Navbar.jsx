import React from 'react'
import Button from '../components/Button'
import Logo from '../public/logo.png'
import '../pages/_document'
function Navbar() {

  
  return (
    <>
        <div className="flex justify-between items-center  p-10 font-Mada text-[1vw] w-[100%] z-10 absolute">
          <a href="https://www.reverelabs.org/">
            <h1 className="font-mada font-[700] text-main text-[2.4rem]">revere</h1>
          </a>
          {/* login && (<></>) */}
          {/* <div className="flex justify-between w-[35%] text-textMain text-[1rem] small:hidden">
             <a href="/dashBoard">Home</a>
             <a href="/projects">Projects</a>
             <a href="/daos">DAOs</a>
             <a href="#">Contact Us</a>
          </div> */}
          <Button Content={'Login'} Link={'/login'}/>
        </div>
    </>
  )
}

export default Navbar