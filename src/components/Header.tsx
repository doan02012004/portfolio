'use client'
import React, {  useEffect, useState } from 'react'

// components
import Navbar from './Navbar'
import Logo from './Logo'
import NavbarMobile from './NavbarMobile'

const Header = () => {
    const [header,setHeader] = useState<boolean>(false)

    useEffect(()=>{
        const handleScroll = () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])
    return (
        <div className={`${header?' shadow-lg bg-white': 'bg-transparent'} sticky top-0 py-6  z-30  `}>
            <div className='container'>
                <div className=' flex justify-between items-center'>
                   <Logo />
                    <Navbar />
                    <NavbarMobile />
                </div>
            </div>
        </div>
    )
}

export default Header