import React,{useState} from 'react'
import Image from 'next/Image'

function FilterButton({filters,setFilters}) {

    const FilterTypes = [{title:'Development',color:'#85B9E8'},{title:'Design',color:'#FFC8C8'}]
    const[isOpen,setIsOpen] = useState(false)


    const onclickHandler = () =>{
        setIsOpen(preVal=>!preVal)
    }

    const addFilter = () => {
        let data = filters
        filters.includes(Title)?(data=data.filter(item => item!==Title)):data.push(Title)
        setFilters(data)
    }
    

    return (
    <div className="mx-10 relative z-[0] m-10 overflow-visible">
        <div onClick={onclickHandler} className="z-[10] relative  w-[10rem]  h-[2rem] flex items-center justify-around border-2 rounded-md font-mada cursor-pointer drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] active:drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] bg-[#ffffff]">
            <h2 className="font-mada text-textSecondary font-[600] text-[1.2rem]">Filter</h2>
            {isOpen?<Image src={'/upArrow.png'} height={10} width={20}/>:<Image src={'/dropArrow.png'} height={10} width={20}/>}
            <div className="bg-main rounded-full absolute top-[-0.5rem] right-0 w-5 h-5 text-center text-accent">
                {filters.length-1}
            </div>
        </div>


        {isOpen&&<div className="absolute pt-10 top-1 z-[0] w-[10rem] min-h-[5rem] flex flex-col items-center justify-around border-2 rounded-b-md font-mada bg-accent">
            {FilterTypes.map((item, i) =>(
                <div onClick={()=>setFilters((prevVal)=>{console.log(prevVal)})} className="w-[90%] h-[20%] rounded-md my-2 px-2 flex justify-between items-center cursor-pointer " style={filters.includes(item.title) ?{backgroundColor:item.color,color:"#FFFFFF"}:{backgroundColor:"#FFFFFF"}} key={i}>
                    <h2>{item.title}</h2>
                    {filters.includes(item.title)&&<Image src={'/tik.png'} height={10} width={10} className="absolute right-0"/>}
                </div>
            ))}
        </div>}


    </div>
    )
}

export default FilterButton