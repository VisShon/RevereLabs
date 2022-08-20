import React, {useState, useEffect, useContext} from "react";
import Image from 'next/image'
import ViewWindow from '../CreateWindow'

import {BlockchainContext} from "../../context/BlockchainContext.tsx";


function NewProjectCard() {
    const {data, setData} = useContext(BlockchainContext);

    const[details,setDetails] = useState({title:'',description:'',bounty:'',time:''});
    const {title,description,bounty,time} = details;

    console.log(data, 'data');
    console.log(details, 'details');
    useEffect(() => {
        if (data.newProject !== undefined && details.title === '' &&
            details.description === '' && details.bounty === '' && details.time === '') {
            const {newProject, ...newData} = data;
            console.log(newProject, "newProject");
            setDetails(newProject);
            setData(newData);
        }
    // Intentionally suppress the warning about missing dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setData, ])

    return (
        <div className="flex relative z-2 justify-between px-10 py-12 h-[36rem] w-[60rem] bg-[#ffffff]  border-4 rounded-[5px] drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">

            <div className="flex flex-col justify-around font-mada font-medium text-[3rem]  ">
                <div className="flex flex-col h-[60%]">
                    <input type="text"
                        className="border-2 rounded-md px-2 mb-1 mt-10 text-[2rem] font-mada font-[700] text-main"
                        placeholder="Title"
                        value={title}
                        onChange={(e)=>setDetails({...details, title: e.target.value})}></input>
                    <textarea
                        className="border-2 rounded-md px-2 border-textSecondary text-textSecondary  text-[1.25rem] font-[600] h-[60%]"
                        placeholder="Description"
                        value={description}
                        onChange={(e)=>setDetails({...details, description: e.target.value})}></textarea>
                </div>

                <div className="flex flex-col">
                    <div className="flex  items-center  text-[4rem] justify-between">
                        <Image src={'/vectors/cash.png'}
                            width="60"
                            alt="df"
                            height="50"/>
                        <input type="text"
                            className="border-2 h-[3rem] rounded-md px-2 border-secondary text-secondary text-[1.2rem]"
                            placeholder="Bounty"
                            value={bounty}
                            onChange={(e)=>setDetails({...details, bounty: e.target.value})}></input>
                    </div>
                    <div className="flex  items-center text-[4rem] justify-between">
                        <Image src={'/vectors/time.png'}
                            alt="df"
                            width="60"
                            height="60"/>
                        <input type="text"
                            className="border-2 h-[3rem] rounded-md px-2 border-main text-main text-[1.2rem]"
                            placeholder="Time"
                            value={time}
                            onChange={(e)=>setDetails({...details, time: e.target.value})}></input>
                    </div>
                </div>
            </div>

            <ViewWindow
                isUserLoggedIn={data.isLoggedIn}
                details={details}
                user={data.user}
            />
        </div>
    )
}



export default NewProjectCard;
