import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import NewProjectCard from '../components/containers/NewProjectCard'
import ProjectCard from '../components/containers/PostCard'

function Project({props}) {

  const [type,setType] = useState('')

  useEffect(() => {
    const checkTypes =() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      setType(urlParams.get('type'))
    }
    checkTypes();
  },[])
  
  return (
    <div className="flex flex-col items-center">
      {type=='New'&&<NewProjectCard/>}
      {!type&&<ProjectCard/>}
      <a className="absolute z-0 top-[20%] left-[5%]"><Image src="/background/circle.png" height={700} width={700}/></a>
      <div className="mt-10 w-[60%] flex items-center justify-end">
      </div>
    </div>
  )
}

// export function getServerSideProps(){
//   //code to fetch data
// }

export default Project