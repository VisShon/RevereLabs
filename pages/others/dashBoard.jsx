import React from 'react'
import DashButton from '../components/DashBoardButton'
import Image from 'next/image'
import BG from '../public/dashBoardbG.png'
function DashBoard() {
  return (
    <>
      <div className="absolute z-[-10]">
          <Image src={BG} width={2000} height={1140}/>
      </div>

      <div className="flex flex-col items-center justify-center h-[100vh]">
        <div className="flex items-center">
          <DashButton Content={'New Project'} image={'/project.png'} colour={'#1178D7'} Link={'/createprojects'}/>
          <DashButton Content={'Projects'} image={'/projects.png'} colour={'#FDB600'} Link={'/projects'}/>
        </div>
        <div className="flex itmes-center">
          <DashButton Content={'Home'} image={'/home.png'} colour={'#E03E24'} Link={'/dashBoard'}/>
          <DashButton Content={'DAO list'} image={'/profile.png'} colour={'#008A61'} Link={'/daos'}/>
        </div>
      </div>
    </>
  )
}

export default DashBoard