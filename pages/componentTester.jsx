import React,{useState} from 'react'
import SearchBar from '../components/main/SearchBar'
function componentTester() {

    const[searchParam,setSearchParam] = useState("")

    return (
    <>
        <SearchBar searchParam={searchParam} setSearchParam={setSearchParam}/>
    </>
  )
}

export default componentTester