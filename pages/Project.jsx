import React,{useState} from 'react'
import Image from 'next/image'
import NewProjectCard from '../components/containers/NewProjectCard'
import ProjectCard from '../components/containers/ProjectCard'
import Progress from '../components/Progress'
import Button from '../components/Button'

function Project({isNewProject=false}) {
  
  return (
    <div className="flex flex-col items-center">
      {isNewProject&&<NewProjectCard/>}
      {!isNewProject&&<ProjectCard/>}
      <a className="absolute z-0 top-[20%] left-[5%]"><Image src="/background/circle.png" height={700} width={700}/></a>
      <div className="mt-10 w-[60%] flex items-center justify-end">
      </div>
    </div>
  )
}

export default Project