
import axios from "axios";
import {useRouter} from "next/router";
import React, {useContext, useState, useEffect} from "react";
import Image from 'next/image'
import {BlockchainContext} from "../context/BlockchainContext.tsx";
import Button from './Button'
import AddMember from './AddMember'
import Chat from "../pages/demo/chat";
function ChatWindow({isUserLoggedIn=false,details,isOwner}) {

    const[posted,setPosted] = useState(false);
    const [people,setPeople] = useState(false);
    const {data, setData} = useContext(BlockchainContext);
    const {push} = useRouter() ;
    const onclickHandlerFreeLancer = () => {
    //handle
    };

    useEffect(() => {
        axios.get(`/api/gig-application/fetch?gigId="${details.objectId}"`).then((res) => {
            console.log("sharam aagyi toh", res.data.length,res.data)
            setPeople(res.data);
        }
        )


        for ( let i = 0; i<people.length;i++){
            axios.get(`/api/profile/fetch?objectId="${people[i].applicantId}"`).then((res) => {
                console.log("user value aagyi toh", res.data.length,res.data)
                setPeople(res.data);
            }
            )
        }
    }, [details])


    console.log(people," are people");


    return (
        <div className="relative z-2">
            {isOwner&& people.length===0&&<div className="bg-accent relative h-[30rem] w-[25rem] border-[0.5rem] border-[#B8DED3] rounded-md flex flex-col items-center justify-center">
                <Image src={'/vectors/chat.png'}
                    height={100}
                    alt={"sd"}

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
            {isOwner&& people.length!==0&&(
                <div>
                    <select name="cars"
                        id="cars">
                        { people?.map((person,index)=> (
                            <option key={index}
                                value="volvo">Volvo</option>
                        ))}


                    </select>
                    <Chat userToken={data?.user?.rocketChatToken}/>
                </div>
            )}
            {!isOwner&&<div className="bg-accent relative h-[30rem] w-[25rem] border-[0.5rem] border-[#B8DED3] rounded-md flex flex-col items-center justify-center">
                <Image src={'/vectors/chat.png'}
                    height={100}
                    alt={"sd"}
                    width={100}/>
                <h2 className="mb-10 font-mada text-center font-[600] text-textSecondary mt-5">To initiate the informal negotiation press Start and a notification will be sent to the creator of this gig</h2>
                <Button Content="Start"
                    Color="#008A61"
                    Onclick={onclickHandlerFreeLancer}/>
            </div>}
        </div>
    )
}

export default ChatWindow;
