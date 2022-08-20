import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import NewProjectCard from '../../components/containers/NewProjectCard'
import ProjectCard from '../../components/containers/PostCard'

export default function Project() {
    return (
        <div className="flex flex-col items-center">
            <ProjectCard/>
            <a className="absolute z-0 top-[20%] left-[5%]"><Image src="/background/circle.png"
                height={700}
                width={700}/></a>
            <div className="mt-10 w-[60%] flex items-center justify-end">
            </div>
        </div>
    )
}

