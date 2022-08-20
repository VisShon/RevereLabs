import React,{useEffect,useState, useContext} from 'react'
import Button from './Button'
import Image from 'next/image'
import '../pages/_document'
import Link from 'next/link';
import {
    BlockchainContext,
} from "../context/BlockchainContext.tsx";

import { useRouter } from 'next/router'

function Navbar() {
    const router = useRouter();
    const [pageLocation,setPageLocation] =useState(null);
    const {connectedAccount, setData, data} =
    useContext(BlockchainContext);
    useEffect(() => {

        const getPageLocation = () => {
            const res = new URL(window.location.href).pathname;
            console.log(res);

            setPageLocation(res);
        }
        getPageLocation();
    })



    return (
        <>
            <div className="flex justify-between items-center  p-10 font-Mada text-[1vw] w-[100%] z-10 ">
                <Link href="https://reverelabs.org/">
                    <Image src="/logo.png"
                        width={120}
                        height={60}/>
                </Link>
                {/* login && (<></>) */}
                <div className="flex justify-between w-[25%] text-textMain text-[1rem] small:hidden">
                    <Link href="/Home"
                        style={pageLocation==='/Home'?{color:"#1178D7"}:{}}>Home</Link>
                    <Link href="/gig/create"
                        style={pageLocation==='/gig/create'?{color:"#1178D7"}:{}}>Post a new gig</Link>
                    <Link href="/daos"
                        style={pageLocation==='/daos'?{color:"#1178D7"}:{}}>DAOs</Link>
                    <Link href="https://linktr.ee/reverelabs">Contact Us</Link>
                </div>
                {!data.isLoggedIn?<Button Content={'Login'}
                    link={'/login'}/>:
                    <Button Content={'Your Profile'}
                        link={'/Profile'}/>}
            </div>
        </>
    )
}

export default Navbar
