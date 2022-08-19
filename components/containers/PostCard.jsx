import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import ChatWindow from '../ChatWindow'


function ProjectCard() {

  const[user,setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () =>{
        const person = window.localStorage.getItem('user')
        setUser(person)
    }
    checkAuth()
  },[]);

  return (
    <div className="flex relative z-10 justify-between px-10 py-12 w-[55%] h-[60vh] bg-[#ffffff]  border-4 rounded-[5px] drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">

        <div className="flex flex-col justify-around font-mada font-medium text-[3rem]  ">
            <div className="flex flex-col h-[60%]">
              <h2 className="mx-2 mb-1 mt-10 text-[2rem] font-mada font-[700] text-main">Title</h2>
              <h2 type="text" className="mx-2  text-textSecondary  text-[1.25rem] font-[600] h-[60%]">Description</h2>
            </div>

            <div className="flex flex-col">
              <div className="flex  items-center  text-[4rem]">
                <Image src={'/vectors/cash.png'} width="60" height="50"/>
                <h2 type="text" className="h-[3rem] mx-5  text-secondary text-[2rem]">$ 10000</h2>
              </div>
              <div className="flex  items-center text-[4rem]">
                <Image src={'/vectors/time.png'} width="60" height="60"/>
                <h2 type="text" className="h-[3rem] mx-5  text-main text-[2rem]">3 Months</h2>
              </div>

              <span className='font-mada text-textSecondary text-[1rem] mt-10'>
                Requested By 
                {/* <span> {Profile.name} </span> */}
                <span className='text-main'> Vishnu Shon </span>
              </span>
            </div>
        </div>

        <ChatWindow isUserLoggedIn={true&&user} isClient={false} isFreeLancer={true}/>
    </div>
  )
}

export default ProjectCard