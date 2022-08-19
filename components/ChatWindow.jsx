import React,{useState} from 'react'
import Image from 'next/Image'
import Button from './Button'
import AddMember from './AddMember'

function ChatWindow({isClient=true,isFreeLancer=false,isUserLoggedIn=false,details}) {

  const[posted,setPosted] = useState(false);

  const onclickHandlerFreeLancer = () => {
    //handle
  };

  const onPosthandler=() => {
    window.localStorage.setItem('post',JSON.stringify(details));
    setPosted(true);
  };


  return (
    <div className="relative z-10">


      {!isUserLoggedIn&&<div className="absolute left-2 top-2 backdrop-blur-sm w-[95%] h-[90%] z-20 flex flex-col justify-center items-center pt-10">
          {/* <Button Content="Login" Link='/login'/>  */}
          <Button Content="Login" Link={'/Login'}/> 
          <h2 className="text-textMain text-[1.5rem] font-[600] font-mada my-5">You need to logIn to proceed</h2>
      </div>}

      {!posted&&isClient&&isUserLoggedIn&&<div className="absolute left-2 top-2 backdrop-blur-sm w-[95%] h-[90%] z-20 flex flex-col justify-center items-center pt-10">
          <Button Content="Post" onClick={onPosthandler}/> 
          <h2 className="text-textMain text-[1.5rem] font-[600] font-mada my-5">Post the Gig to add freelancers</h2>
      </div>}

    {isClient&&<div className="bg-accent relative h-[30rem] w-[25rem] border-[0.5rem] border-[#B8DED3] rounded-md flex flex-col items-center justify-center">
      <Image src={'/vectors/chat.png'} height={100} width={100}/>
      <h2 className="font-mada text-center font-[600] text-textSecondary mt-5">Add Freelancers and start chatting with them</h2>
      <AddMember/>
    </div>}
    
    {isFreeLancer&&<div className="bg-accent relative h-[30rem] w-[25rem] border-[0.5rem] border-[#B8DED3] rounded-md flex flex-col items-center justify-center">
      <Image src={'/vectors/chat.png'} height={100} width={100}/>
      <h2 className="mb-10 font-mada text-center font-[600] text-textSecondary mt-5">To initiate the informal negotiation press Start and a notification will be sent to the creator of this gig</h2>
      <Button Content="Start" Color="#008A61" Onclick={onclickHandlerFreeLancer}/>
    </div>}
  
  </div>
  )
}

export default ChatWindow