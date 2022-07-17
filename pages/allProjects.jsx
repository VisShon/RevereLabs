import React,{useState} from 'react'
import Card from '../components/ProjectCard'
import BigButton from '../components/dashBoardButton'

function Projects() {
  return (
    <>
      <div className="flex ">
        <BigButton Content={'New Project'} image={'/project.png'}/>
        <div className="bg-[#D9D9D9] h-[40vh] w-[70%] mx-10"></div>
      </div>
      <h1 className="font-mada font-[500] text-[5rem] ml-10">Your Projects</h1>
      <Card/>
    </>
  )
}

export default Projects