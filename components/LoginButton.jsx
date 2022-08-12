import React from 'react'
import Image from 'next/Image'
import axios from 'axios'

function LoginButton({APIlink,data,setStepsDone}) {

  const onClicked = async () => {
    const result = await axios.get(APIlink)
    setStepsDone(preVal=>preVal+1);
  }

  return (
    <a onClick={onClicked} className="w-[20rem] h-[5rem]  mt-20 flex justify-center items-center rounded-[8px] hover:drop-shadow-[5px_5px_0px_rgba(159,159,159,1)]" style={{backgroundColor:data.backgroundColor}}>
      <Image src={data.logo} height="40" width="40"/>
      <span className="ml-10 font-mada font-[600] text-textMain">{data.title} <span style={{color:data.color}}>{data.titleHighlighted}</span></span>
    </a>
  )
}

export default LoginButton