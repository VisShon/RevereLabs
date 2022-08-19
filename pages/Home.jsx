import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SearchBar from '../components/SearchBar'
import FilterButton from '../components/FilterButton'
import ProjectCard from '../components/ProjectCard'
import Button from '../components/Button'



function Home({Projects}) {
  const[filters,setFilters]= useState(['*']);
  const [searchParam,setSearchParam] = useState('')

  Projects = [{"title":"TestGig2", "description":"Need to Design a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Design"},
  {"title":"TestGig2", "description":"Need to implement a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Development"},
  {"title":"TestGig2", "description":"Need to implement a website", "bounty":"USD400", "time":"2 months", "completed":true,  "category": "Development"},
  {"title":"TestGig2", "description":"Need to implement a website", "bounty":"USD400", "time":"2 months", "completed":true,  "category": "Design"},
  {"title":"TestGig2", "description":"Need to implement a website", "bounty":"USD400", "time":"2 months", "completed":true,  "category": "Design"},
  {"title":"TestGig2", "description":"Need to implement a website", "bounty":"USD400", "time":"2 months", "completed":true,  "category": "Design"},
  {"title":"TestGig2", "description":"Need to implement a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Design"},
  {"title":"TestGig2", "description":"Need to implement a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Development"},
  {"title":"TestGig3", "description":"Need to implement a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Development"}]


  return (
    <div className={styles.container}>
        <div className="fixed top-[10vh] left-[-5rem]"><Image src="/background/bg1.png" height="500" width="415" /></div>
        <div className="fixed top-[55vh] bottom-0 right-0"><Image src="/background/bg2.png" height="480" width="670" /></div>

        <div className="relative z-20 flex w-[100%] items-center justify-between overflow-visible">
            <SearchBar searchParam={searchParam} setSearchParam={setSearchParam}/>
            <h2 className="font-mada font-[800] text-main text-[5rem]">Welcome</h2>
            <FilterButton filters={filters} setFilters={setFilters} />
        </div>

        <div className="relative z-10 flex w-[95%] items-center justify-end overflow-visible">
            <Button Content={'Create Project'}  Link={'/createProject'}/>
        </div>


        <div className="flex flex-wrap w-[100%] justify-items-center  relative z-0">
            {Projects.filter(item=>filters.includes(item.category)||filters.length==1)
            .filter(item=>item.title==searchParam||searchParam=='')
            .map((project, i) =>(<ProjectCard isGigActive={!project.completed}  jobTitle={project.title} amount={project.bounty} descp={project.description} key={i}/>  ))}
        </div>
    </div>
  )
}

// export async function getServerSideProps(){
//     //code to fetch data 
// }

export default Home