import React,{useState} from 'react'
import Image from 'next/image'
import NewProjectCard from '../components/containers/NewProjectCard'
import Progress from '../components/Progress'
import Button from '../components/Button'

function CreateProject() {
  
  return (
    <div className="flex flex-col items-center">
      <NewProjectCard/>
      <a className="absolute z-0 top-[20%] left-[5%]"><Image src="/background/circle.png" height={700} width={700}/></a>
      <div className="mt-10 w-[60%] flex items-center justify-end">

      </div>
    </div>
  )
}

export default CreateProject