import React,{useState} from 'react'
import Card from '../components/ProjectCard'
import BigButton from '../components/dashBoardButton'

function Projects() {
  return (
    <>
      <BigButton Content={'New Project'} image={'/project.png'}/>
      <h1 className="font-mada font-[600] text-[5rem] ml-10">Your Projects</h1>
      <Card/>
    </>
  )
}

export default Projects