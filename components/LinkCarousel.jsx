import React,{useState} from 'react'
import Image from 'next/image'

let data=[]
function LinkCarousel({userLinks,setUserLinks}) {


    const linkData = [{title:'linkedIn',logo:'/logos/linkedIn.png'},
        {title:'mail',logo:'/logos/mail.png'},
        {title:'twitter',logo:'/logos/twitter.png'},
        {title:'discord',logo:'/logos/discord.png'},
        {title:'linktree',logo:'/logos/linktree.png'},]


    const[newLink, setNewLink] = useState("")
    const[addLink,setAddLink] = useState(false)


    const onclickHandler = (title,logo,link) =>{
        const newData = {title:title,logo:logo,link:link};
        data.push(newData)
        setUserLinks(data);
        console.log(userLinks)
        setAddLink(preVal=>!preVal);
    }

    return (
        <>
            {userLinks.map((item,index)=>(<a key={index}
                href={item.link}
                className="w-[12rem] flex justify-between h-[2.5rem] z-[10] p-1 border-2 rounded-md cursor-pointer drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] mt-5 bg-[#ffffff]">
                <h2 className="text-textSecondary font-[600] ">{item.title}</h2>
                <Image src={item.logo}
                    height={20}
                    width={25} />
            </a>))}

            {
                addLink?
                    (<div className="relative w-[12rem] h-[2.5rem] z-[10] mt-5">
                        <a onClick={()=>setAddLink(prev=>!prev)}
                            className="absolute right-2 z-20 top-2 cursor-pointer" >
                            <Image src={'/vectors/cross.png'}
                                height={15}
                                width={15} />
                        </a>
                        <input value={newLink}
                            onChange={(e)=>setNewLink(e.target.value)}
                            placeholder="Search"
                            type="search"
                            className="p-1 relative z-10 border-2 rounded-md cursor-text drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]   bg-[#ffffff]"/>
                        <div className="absolute pt-10 top-1 left-2 z-0 w-[95%] min-h-[5rem] flex items-center justify-around border-2 rounded-b-md font-mada bg-accent">
                            {linkData.map((item, i)=>(
                                <a onClick={()=>onclickHandler(item.title,item.logo,newLink)}
                                    key={i}
                                    className="cursor-pointer drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] active:drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]" >
                                    <Image src={item.logo}
                                        height={20}
                                        width={25} />
                                </a>
                            ))}
                        </div>
                    </div>):


                    (<div onClick={()=>setAddLink(preVal=>!preVal)}
                        className="w-[12rem] cursor-pointer flex justify-center mt-5">
                        <Image src={'/plus.png'}
                            width={20}
                            height={20}/>
                    </div>)
            }
        </>
    )
}

export default LinkCarousel