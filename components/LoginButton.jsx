import React from 'react'
import Image from 'next/Image'
import axios from 'axios'

function LoginButton({APIlink,data,setStepsDone,stepsDone}) {

  const onClicked = async () => {
    const result = await axios.get(APIlink)
    if(stepsDone==2){
      const user = {
        name:'Vishnu Shon',
        email: 'vishnu@gmail.com',
        profilePicture:'/profilepic.png',
        projects: [{"title":"TestGig2", "description":"Need to Design a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Design"},{"title":"TestGig2", "description":"Need to Design a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Design"},{"title":"TestGig2", "description":"Need to Design a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Design"}],
        work:[{"title":"TestGig2", "description":"Need to Design a website", "bounty":"USD400", "time":"2 months", "completed":false,  "category": "Design"},],
        link:[],
        Daos:[
            {title:'AtomDao',color:'#CBA3FF'},
            {title:'StatesDao',color:'#88BBEB'}
        ],
      }
      window.localStorage.setItem('user',user)
      window.history.back()
    }
    setStepsDone(preVal=>preVal+1);
  }

  return (
    <a onClick={onClicked} className="w-[20rem] h-[5rem] mt-5 flex justify-center items-center rounded-[8px] hover:drop-shadow-[5px_5px_0px_rgba(159,159,159,1)]" style={{backgroundColor:data.backgroundColor}}>
      <Image src={data.logo} height="40" width="50"/>
      <span className="ml-10 font-mada font-[600] text-textMain">{data.title} <span style={{color:data.color}}>{data.titleHighlighted}</span></span>
    </a>
  )
}

export default LoginButton