import React from 'react'
import Image from 'next/image'
import edit from '../public/edit.png'
function ProjectCard({isGigActive=false,jobTitle,amount,descp}) {
  return (
    <div className=" w-[15rem]  h-[20rem] p-5 mx-10 my-10 border-2 rounded-md font-mada cursor-pointer drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] active:drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] bg-[#ffffff]">
        {isGigActive&&<div className="bg-secondary rounded-full w-[0.8rem] h-[0.8rem] my-2 mx-[90%]"></div>}
        <div className="h-[0.1rem] bg-[#DBDBDB]"></div>
        <h1 className="font-[600] text-main text-[1.5rem]">{jobTitle}</h1>
        <span className="font-[600] text-textMain text-[1.2rem]">{amount}</span>
        <p className="font-[400] text-textSecondary text-[0.8rem]">{descp}</p>
    </div>
  )
}

export default ProjectCard