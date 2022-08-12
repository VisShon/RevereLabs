import React,{useState} from 'react'
import Image  from 'next/Image'

function Filter({Title="Development",Color="#85B9E8",setFilterCount}) {
  const [isSelected,setIsSelected] =useState(false)
  const onclickHandler = () => {
    setIsSelected(preVal=>!preVal)
    setFilterCount(preVal=>(!isSelected?++preVal:--preVal))
  }

  return (
    <div onClick={onclickHandler} className="w-[90%] h-[20%] rounded-md my-2 px-2 flex justify-between items-center" style={isSelected ?{backgroundColor:Color,color:"#FFFFFF"}:{backgroundColor:"#FFFFFF"}}>
      <h2>{Title}</h2>
      {isSelected&&<Image src={'/tik.png'} height={10} width={10} className="absolute right-0"/>}
    </div>
  )
}

export default Filter