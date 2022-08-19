import React from 'react'
import Image from 'next/image'
import ChatWindow from '../../components/ChatWindow'


function NewProjectCard({Profile}) {
  return (
    <div className="flex relative z-10 justify-between px-10 py-12 w-[55%] h-[60vh] bg-[#ffffff]  border-4 rounded-[5px] drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">

        <div className="flex flex-col justify-around font-mada font-medium text-[3rem]  ">
            <div className="flex flex-col h-[60%]">
              <input type="text" className="border-2 rounded-md px-2 mb-1 mt-10 text-[2rem] font-mada font-[700] text-main" placeholder="Title"></input>
              <textarea type="text" className="border-2 rounded-md px-2 border-textSecondary text-textSecondary  text-[1.25rem] font-[600] h-[60%]" placeholder="Description"></textarea>
            </div>

            <div className="flex flex-col">
              <div className="flex  items-center  text-[4rem] justify-between">
                <Image src={'/vectors/cash.png'} width="60" height="50"/>
                <input type="text" className="border-2 h-[3rem] rounded-md px-2 border-secondary text-secondary text-[1.2rem]" placeholder="Bounty"></input>
              </div>
              <div className="flex  items-center text-[4rem] justify-between">
                <Image src={'/vectors/time.png'} width="60" height="60"/>
                <input type="text" className="border-2 h-[3rem] rounded-md px-2 border-main text-main text-[1.2rem]" placeholder="Time"></input>
              </div>

              <span className='font-mada text-textSecondary text-[1rem] mt-10'>
                Requested By 
                {/* <span> {Profile.name} </span> */}
                <span className='text-main'> Vishnu Shon </span>
              </span>
            </div>
        </div>

        <ChatWindow/>
    </div>
  )
}



export default NewProjectCard