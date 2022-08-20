
import axios from "axios";
import {useRouter} from "next/router";
import React, {useContext, useState} from "react";
import Image from 'next/image'
import {BlockchainContext} from "../context/BlockchainContext.tsx";
import Button from './Button'
import AddMember from './AddMember'

function ChatWindow({isUserLoggedIn=false,details,isOwner}) {

    const[posted,setPosted] = useState(false);
    const {data, setData} = useContext(BlockchainContext);
    const {push} = useRouter() ;
    const onclickHandlerFreeLancer = () => {
    //handle
    };

    console.log(isOwner);

    const onPostHandler = async () => {
        const response = await axios.post('/api/gig/create',{
            title: details.title,
            description: details.description,
            bounty: details.bounty,
            time: details.time,
            issuedBy: data.user.id,
            category: "Hardcoded",
        });
        setPosted(true);
        push('/gig/view/'+response.data.id);
        console.log("Project posted successfully");
    };


    return (
        <div className="relative z-2">
            {isOwner&&<div className="bg-accent relative h-[30rem] w-[25rem] border-[0.5rem] border-[#B8DED3] rounded-md flex flex-col items-center justify-center">
                <Image src={'/vectors/chat.png'}
                    height={100}
                    width={100}/>
                <h2 className="font-mada text-center font-[600] text-textSecondary mt-5">Your gig is being is shown to all freelancers. Interested people will appear here soon</h2>
                <AddMember/>
            </div>}
            {!isUserLoggedIn&&<div className="absolute left-2 top-2 backdrop-blur-sm w-[95%] h-[90%] z-20 flex flex-col justify-center items-center pt-10">
                <h2 className="text-textMain text-[1.5rem] font-[600] font-mada my-5">You need to login to proceed</h2>
                <Button
                    Content="Login"
                    onClick={() => {
                        setData({...data, newProject: details, next: window.location.href});
                        push('/login');
                    }
                    }
                />
            </div>}

            {!posted&&isUserLoggedIn&&<div className="absolute left-2 top-2 backdrop-blur-sm w-[95%] h-[90%] z-20 flex flex-col justify-center items-center pt-10">
                <h2 className="text-textMain text-[1.5rem] font-[600] font-mada my-5">Post the Gig to add freelancers</h2>
                <Button Content="Post"
                    onClick={onPostHandler}/>
            </div>}

            {!isOwner&&<div className="bg-accent relative h-[30rem] w-[25rem] border-[0.5rem] border-[#B8DED3] rounded-md flex flex-col items-center justify-center">
                <Image src={'/vectors/chat.png'}
                    height={100}
                    width={100}/>
                <h2 className="mb-10 font-mada text-center font-[600] text-textSecondary mt-5">To initiate the informal negotiation press Start and a notification will be sent to the creator of this gig</h2>
                <Button Content="Start"
                    Color="#008A61"
                    Onclick={onclickHandlerFreeLancer}/>
            </div>}

        </div>
    )
}

export default ChatWindow
