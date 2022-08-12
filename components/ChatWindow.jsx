import React from 'react'
import Image from 'next/Image'
import Button from './Button'
import AddMember from './AddMember'

function ChatWindow({isClient=true,isFreeLancer=false}) {

  const onclickHandlerFreeLancer = () => {
    //handle
  }

  return (
    <>
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
  
  </>
  )
}

export default ChatWindow