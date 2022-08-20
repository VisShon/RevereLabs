import React,{useState} from 'react'
import Checkpoints from './others/Checkpoints'
import Bounty from './others/Bounty'
import Terms from './others/Terms'

function ContractPortal() {
    const[bounty,setBounty] = useState(false)
    const[checkpoint,setCheckpoint] = useState(false)
    const[terms,setTerms] = useState(true)

    const OnclickHandler = (id) => {
        if(id=='terms'){
            setTerms(true);setCheckpoint(false);setBounty(false);
        }
        if(id=='checkpoints'){
            setTerms(false);setCheckpoint(true);setBounty(false);
            
        }
        if(id=='bounty'){
            setTerms(false);setCheckpoint(false);setBounty(true);
        }
    }

    return (
        <div className=" bg-accent relative h-[30rem] w-[25rem] border-[0.5rem] border-[#B8DED3] rounded-md flex flex-col items-center justify-around ">
            <div onClick={()=>OnclickHandler('terms')} className="bg-helper cursor-pointer border-2 hover:border-main w-[100%] h-[7rem]  font-mada font-[700] text-center flex items-center justify-center"><h2>Terms</h2></div>
               {terms&&<div className=" h-[10rem] w-[100%]  p-2"><Terms/></div> }
            <div onClick={()=>OnclickHandler('checkpoints')} className="bg-helper cursor-pointer border-x-2 border-b-2 hover:border-main w-[100%] h-[7rem]  font-mada font-[700] text-center flex items-center justify-center"><h2>Checkpoints</h2></div>
                {checkpoint&&<div className=" h-[10rem] w-[100%]  p-2"><Checkpoints/></div>}
            <div onClick={()=>OnclickHandler('bounty')} className="bg-helper cursor-pointer border-x-2 border-b-2 hover:border-main w-[100%] h-[7rem]  font-mada font-[700] text-center flex items-center justify-center"><h2>Bounty</h2></div>
                {bounty&&<div  className=" h-[10rem] w-[100%]  p-2"><Bounty/></div>}
        </div>
    )
}

export default ContractPortal