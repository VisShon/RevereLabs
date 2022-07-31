import React from 'react'
import Image from 'next/Image'
import { Menu } from '@headlessui/react'

function AddMember() {



  return (
    <div className="bg-[#B8DED3] w-[30%] flex flex-col items-center">
        <Menu>
            <Menu.Button className="cursor-pointer mt-10 icon">
                <Image src={'/plus.png'} width={20} height={20}/>
            </Menu.Button>
            <Menu.Items className="w-[100%] flex flex-col items-center" >
                <input type="text" className="p-1 rounded-[5px] border-2 mt-2 w-[60%] z-[10]" placeholder="enter name"/>
                <div className="w-[60%] h-auto p-10 bg-accent mt-[-10px]">
                    {//datamap of the developer profiles from the search api
                    }
                </div>
            </Menu.Items>
        </Menu>
    </div>
  )
}

export async function getServerSideProps() {
    //call to get developers
}


export default AddMember