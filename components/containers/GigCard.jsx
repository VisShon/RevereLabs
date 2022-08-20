import axios from "axios";
import React, {useState, useEffect, useContext} from "react";
import Image from 'next/image'
import {BlockchainContext} from "../../context/BlockchainContext";
import ChatWindow from '../ChatWindow'


export default function GigCard({gigId}) {
    const [gig, setGig] = useState({});
    const {data} =
      useContext(BlockchainContext);
    useEffect(() => {
        axios.get(`/api/gig/${gigId}`).then(res => {
            setGig(res.data);
        })
    }, [gigId]);

    return (
        <div className="flex relative z-10 justify-between px-10 py-12 w-[55%] h-[60vh] bg-[#ffffff]  border-4 rounded-[5px] drop-shadow-[10px_10px_0px_rgba(0,0,0,1)]">

            <div className="flex flex-col justify-around font-mada font-medium text-[3rem]  ">
                <div className="flex flex-col h-[60%]">
                    <h2 className="mx-2 mb-1 mt-10 text-[2rem] font-mada font-[700] text-main">{gig.title}</h2>
                    <h2 type="text"
                        className="mx-2  text-textSecondary  text-[1.25rem] font-[600] h-[60%]">{gig.description}</h2>
                </div>

                <div className="flex flex-col">
                    <div className="flex  items-center  text-[4rem]">
                        <Image src={'/vectors/cash.png'}
                            width="60"
                            height="50"/>
                        <h2 type="text"
                            className="h-[3rem] mx-5  text-secondary text-[2rem]">RTN {gig.bounty}</h2>
                    </div>
                    <div className="flex  items-center text-[4rem]">
                        <Image src={'/vectors/time.png'}
                            width="60"
                            height="60"/>
                        <h2 type="text"
                            className="h-[3rem] mx-5  text-main text-[2rem]">{gig.time}</h2>
                    </div>

                    <span className='font-mada text-textSecondary text-[1rem] mt-10'>
                Requested By
                        {/* <span> {Profile.name} </span> */}
                        <span className='text-main'> {gig.issuedBy} </span>
                    </span>
                </div>
            </div>

            <ChatWindow
                isUserLoggedIn={data.isLoggedIn}
                details={gig}
                user={data.user}
            />
        </div>
    )
}
