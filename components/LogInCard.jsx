import React,{useState} from 'react'
import Image from 'next/image'
import steps from '../data/loginSteps.json'

function LogInCard({setStepsDone,stepsDone}) {
  const [data,setData] = useState(steps[stepsDone-1]);
  const onclickHandler = () => {
    var j = stepsDone+1;
    setStepsDone(j);
    setData(steps[stepsDone]);
  }
  return (
    <>
      <div className=" flex flex-col justify-evenly items-center w-[45rem] h-[30rem] bg-[#9DCEFB]  border-2 rounded-[5px] drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">


        {data==steps[2]?
        (<div className="flex">
          {data.options.map((item,i)=>(
            <a className="group" href="#" key={i}>
              <div className="w-[10rem] h-[13rem] flex flex-col items-center justify-between bg-[#ffffff] mx-20">
                <div className="w-[100%] h-[3rem] bg-[#E8E8E8] group-hover:drop-shadow-[0px_5px_0px_rgba(159,159,159,1)]"></div>
                <Image src={item.image} height='80' width='80'/>
                <span className="font-mada font-[600] mb-2" style={{color: item.titleColor}}>{item.title}</span>
              </div>
            </a>
            ))}
        </div>):
        (<a href={data.linkUrl} onClick={onclickHandler} className="w-[20rem] h-[5rem]  mt-20 flex justify-center items-center rounded-[8px] hover:drop-shadow-[5px_5px_0px_rgba(159,159,159,1)]" style={{backgroundColor:data.backgroundColor}}>
            <Image src={data.logo} height="40" width="40"/>
            <span className="ml-10 font-mada font-[600] text-textMain">{data.title} <span style={{color:data.color}}>{data.titleHighlighted}</span></span>
        </a>)}


        <p className="font-mada font-[600] text-[0.9rem] mx-[8rem] mb-10">{data.description}</p>
      </div>
    </>
  )
}


export default LogInCard