import React,{useState} from 'react'
import DaoCard from '../components/main/DaoCard'

function componentTester() {

    const[searchParam,setSearchParam] = useState("")

    return (
    <>
        <DaoCard/>
    </>
  )
}

export default componentTester