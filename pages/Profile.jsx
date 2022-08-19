import React, { useState } from 'react'
import Image from 'next/image'
import ProjectCard from '../components/ProjectCard'
import LinkCarousel from '../components/LinkCarousel'
import styles from '../styles/Home.module.css'


function Profile({Profile}) {
    Profile={
        name:'Vishnu Shon',
        email: 'vishnu@gmail.com',
        profilePicture:'/profilepic.png',
        projects: [],
        work:[],
        link:[],
        Daos:[
            {title:'AtomDao',color:'#CBA3FF'},
            {title:'StatesDao',color:'#88BBEB'}
        ],

    }

  return (
    <div className={styles.container}>
        <div className="fixed z-0 top-[10vh] left-0"><Image src="/background/bg3.png" height="600" width="400" /></div>
        <div className="fixed z-0 top-[10vh] right-[-5rem]"><Image src="/background/bg4.png" height="700" width="500" /></div>
        <div className="fixed z-0 bottom-0 left-[30%]"><Image src="/background/bg5.png" height="200" width="700" /></div>

        <div className="relative z-10 w-[100%] flex flex-col items-center text-center">
            <a className="drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] ">
                <Image src={Profile.profilePicture} width="200" height="200"/>
            </a>
            
            <h2 className="text-main font-mada font-[700] text-[5rem]">{Profile.name}</h2>

            <div className='flex text-textMain font-mada font-[500]'>
                <span className="mx-2">
                    <span className="text-secondary">{Profile.work.length}</span> Gigs Done
                </span>
                <span className="mx-2">
                    <span className="text-[red]">{Profile.projects.length}</span> Gigs Provided
                </span>
            </div>

            <div className='flex'>
                {Profile.Daos.map((dao,i)=>(
                    <div className="w-[90%] h-[20%] mx-2 rounded-md my-2 px-2 flex justify-between items-center cursor-pointer " style={{backgroundColor:dao.color,color:"#FFFFFF"}} key={i}>
                        <h2>{dao.title}</h2>
                    </div>
                ))}
            </div>
            
            <LinkCarousel/>
        </div>

        <h2 className="text-main font-mada font-[700] text-[2.5rem] mx-10 relative z-10">My Projects</h2>
        <div className='flex  '>
            <ProjectCard/>   
        </div>
        <h2 className="text-main font-mada font-[700] text-[2.5rem] mx-10 relative z-10">My Work</h2>
        <div className='flex '>
            <ProjectCard/>  
        </div>

    </div>
  )
}

// export async function getServerSideProps(){
//     //code to fetch data 
// }

export default Profile