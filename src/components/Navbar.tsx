'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
const links = [
    { name: 'Home', path: '/' },
    { name: 'My Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
]
const Navbar = () => {
    const path = usePathname()
    return (
        <div className='hidden lg:flex items-center gap-x-8'>
            <ul className='flex gap-x-6 uppercase font-bold text-sm'>
                {links?.map((link) => (
                    <li key={link.name} className=' relative hover:text-orange-600'>
                        <Link className={`${path === link.path ? 'text-orange-600' : ''} block`} href={link.path}>{link.name}</Link>
                        <span className={`${path === link.path ? 'w-full ' : 'w-0'} absolute top-full  h-[2px] bg-gray-400 transition-all duration-300 ease-in-out`}></span>
                    </li>
                ))}
            </ul>
            <Button className='flex items-center text-sm gap-x-2 rounded-full shadow shadow-gray-600  '>
                DownLoad CV
            </Button>
        </div>
    )
}

export default Navbar