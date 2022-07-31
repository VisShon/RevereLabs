import React from 'react'
import AddMember from './AddMember'


function NewProjectCard() {
  return (
    <div className="flex justify-between w-[65%] h-[35rem] bg-[#ffffff]  border-2 rounded-[5px] drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">

        
        <div className="flex flex-col font-mada font-medium text-[3rem] mx-10 h-[100%] my-10">
            Project Agreement
            <input type="text" className="border-2 mb-1 mt-10 text-[2rem]" placeholder="Title"></input>
            <input type="text" className="border-2 border-secondary text-secondary mb-1 text-[1.5rem]" placeholder="Bounty"></input>
            <textarea type="text" className="border-2 border-textSecondary text-textSecondary mb-1 text-[1.5rem] font-normal h-[20%]" placeholder="Description"></textarea>

            <a href="#" className="text-textSecondary text-[1.5rem] mt-[25%] w-[10%]">T&C</a>
            <span className="text-main text-[1.5rem]">
                Connect to Daos
                <input type="checkbox" className="rounded-[5px] h-[1rem] w-[1rem] drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] mx-2"></input>
            </span>
        </div>

        

        <AddMember/>
    </div>
  )
}



export default NewProjectCard