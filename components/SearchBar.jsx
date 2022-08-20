import Image from 'next/image'
import React,{useState} from 'react'

function SearchBar({searchParam,setSearchParam}) {

    const[value,setValue] = useState("");

    return (
        <div className="relative w-[12rem] z-[10]">
            <a onClick={()=>{setSearchParam(value); console.log(searchParam)}}
                className="absolute right-2 z-[10] top-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] active:drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer" >
                <Image src={'/vectors/search.png'}
                    height={25}
                    width={25} />
            </a>
            <input value={value}
                onChange={(e)=>{setValue(e.target.value)}}
                placeholder="Search"
                type="search"
                className="p-1 border-2 rounded-md cursor-text drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]   bg-[#ffffff]"/>
        </div>
    )
}

export default SearchBar