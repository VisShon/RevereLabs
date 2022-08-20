import React,{useEffect,useState} from 'react'
import Button from './Button'
import Image from 'next/image'
import '../pages/_document'
import Link from 'next/link';
function Navbar() {
    const [pageLocation,setPageLocation] =useState(null);
    const [isUserLoggedIn,setIsUserLoggedIn] = useState();

    useEffect(() => {
        const getPageLocation = () => {
            const res = new URL(window.location.href).pathname;
            setIsUserLoggedIn(true&&window.localStorage.getItem('user'))
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
                        style={pageLocation=='/Home'?{color:"#1178D7"}:{}}>Home</Link>
                    <Link href="/Project?type=New"
                        style={pageLocation=='/Project'?{color:"#1178D7"}:{}}>Project</Link>
                    <Link href="/daos"
                        style={pageLocation=='/daos'?{color:"#1178D7"}:{}}>DAOs</Link>
                    <Link href="https://linktr.ee/reverelabs">Contact Us</Link>
                </div>
                {!isUserLoggedIn?<Button Content={'Login'}
                    Link={'/login'}/>:
                    <Button Content={'Your Profile'}
                        Link={'/Profile'}/>}
            </div>
        </>
    )
}

export default Navbar