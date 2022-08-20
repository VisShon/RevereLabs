import React,{useState} from 'react'
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Checkpoints() {

    const[isOpen,setIsOpen] = useState(false)
    const[date, setDate] = useState(null);
    const[userData,setUserData] = useState([]);

    const onclickHandler = () =>{
        setIsOpen(preVal=>!preVal)
    }

    const onTagClickHandler =(item) => {
        let data = userData;
        data.push({title:item.title,colour:item.colour,date:date});
        setUserData(data);
        console.log(userData)
    }

    const allTags = [{title:'Design By',colour:'#80C4B0'},
        {title:'Develop By',colour:'#88BBEB'},
        {title:'Deploy By',colour:'#D88080'},
        {title:'Deliver By',colour:'#EAE4A8'},]

    return (
        <div className="bg-accent h-[100%]  flex justify-between">

            <div className="w-[50%] h-[100%] flex flex-col justify-start pt-5">

                {userData.map((item,i)=>(
                    <div className="flex items-center w-[12rem] text-[0.75rem] mt-2"
                        key={i}>
                        <p>🗓</p>
                        <div className="rounded-md px-2 mx-1"
                            style={{backgroundColor:item.colour,color:"#FFFFFF"}}>{item.title}</div>
                        <p className="text-secondary">{item.date}</p>
                    </div>
                ))}

            </div>



            <div className="w-[50%] h-[100%] flex flex-col justify-around  relative"
                onClick={onclickHandler}>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Set Checkpoint"
                        value={date}
                        onChange={(newValue) => {
                            setDate(newValue)
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>


                <div className="bg-[white] relative z-[10] border-2 rounded-md h-[2rem] w-[100%] flex items-center justify-between px-1 cursor-pointer">
                    <h2>Search Tags</h2>
                    {isOpen?<Image src={'/upArrow.png'}
                        height={10}
                        width={20}/>:<Image src={'/dropArrow.png'}
                        height={10}
                        width={20}/>}
                </div>


                {isOpen&&<div className="absolute pt-5 top-[5rem] z-[0] w-[100%] min-h-[5rem] flex flex-col  justify-around border-2 rounded-md font-mada bg-[white]">
                    {allTags.map((tags, i) =>(<div onClick={onTagClickHandler(tags)}
                        className="rounded-md px-2 m-1 cursor-pointer"
                        key={i}
                        style={{backgroundColor:tags.colour,color:"black"}}>{tags.title}</div>))}
                </div>}


                <div>
                    <p>Platform Fees</p>
                    <input className="border-2 rounded-md"
                        placeholder="$10000"/>
                </div>
            </div>

        </div>
    )
}

export default Checkpoints