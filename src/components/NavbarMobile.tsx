'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// icons
import { Download, HomeIcon, ListCollapse, Mail, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

// data
const links = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'My Projects', path: '/projects', icon: <ListCollapse /> },
    { name: 'Contact', path: '/contact', icon: <Mail /> },
]
const socialData = [
    {
        iconPath: '/assets/hero/instagram.jpg',
        shadowColor: '#FF33A8',
        link: '',
        name: 'instagram'
    },
    {
        iconPath: '/assets/hero/facebook.png',
        shadowColor: '#3396ff',
        link: '',
        name: 'facebook'
    },
    {
        iconPath: '/assets/hero/zalo.png',
        shadowColor: '#3396ff',
        link: '',
        name: 'zalo'
    },

]
const NavbarMobile = () => {
    const [openMenu,setOpenMenu] = useState<boolean>(false)
    const divWrapperRef = useRef<HTMLDivElement | null>(null)
    const divContentRef = useRef<HTMLDivElement | null>(null)
    const path = usePathname()
    const toggleMenuMobile = useCallback((wrapper:HTMLDivElement,content:HTMLDivElement,open:boolean)=>{
        if(open){
            wrapper.style.inset = '0';
            wrapper.style.right = '0'
            wrapper.style.opacity = '1';
            content.style.right = '0'
        }else{
            wrapper.style.opacity = '0';
            content.style.right = '-100%'
           const timeOutRemoveInset = setTimeout(()=>{
                wrapper.style.removeProperty('inset')
            },300)
            // Trả về hàm cleanUp để xóa setTimeout
            return () => clearTimeout(timeOutRemoveInset);
        }
    },[])
    useEffect(()=>{
        if(divContentRef?.current && divWrapperRef?.current){
            const cleanUp = toggleMenuMobile(divWrapperRef.current,divContentRef.current,openMenu)

             // Gọi hàm cleanUp khi component unmount hoặc khi dependencies thay đổi
        return () => {
            if (cleanUp) cleanUp();
        };
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[divContentRef,divWrapperRef,openMenu])
    return (
        <div className=' lg:hidden'>
            <Menu className='cursor-pointer' onClick={()=>setOpenMenu(!openMenu)} />
            <div ref={divWrapperRef} className='fixed backdrop-blur-sm -right-full z-30 opacity-0  transition-all duration-300 ease-in-out'>
                <div ref={divContentRef} className=' fixed inset-y-0 -right-full w-9/12 bg-white h-screen z-30 transition-all duration-500 ease-in-out '>
                    <div className='px-3 pt-3 flex flex-col h-full'>
                    <X onClick={()=> setOpenMenu(false)} className=' cursor-pointer size-8  hover:text-orange-600 mb-6' />
                    
                    {/* contents  */}
                    <div className='h-full relative'>
                        {/* menu  */}
                        <ul className='flex flex-col gap-6 uppercase font-bold text-sm  mb-6'>
                            {links?.map((link) => (
                                <li key={link.name} className=' relative hover:text-orange-600'>
                                    <Link className={`${path === link.path ? 'text-orange-600 pb-3' : ''}  flex items-center justify-between `} href={link.path}>{link.name} {link.icon} </Link>
                                    <span className={`${path === link.path ? 'w-full ' : 'w-0'} absolute top-full  h-[2px] bg-gray-400 transition-all duration-300 ease-in-out`}></span>
                                </li>
                            ))}


                        </ul>

                        {/* button  */}
                        <div className=' absolute bottom-0 pb-6 w-full'>
                            <div className='flex items-center gap-8 w-max mx-auto mb-4'>
                                {socialData?.map((item) => (
                                    <Link key={item?.name} href={item?.link}>
                                        <button className={`size-10 border  rounded-full text-lg flex justify-center items-center  transition-all duration-500 ease-in-out  hover:shadow-md hover:shadow-[${item.shadowColor}] hover:-translate-y-1 `}>
                                            <div className='size-8 rounded-full overflow-hidden'>
                                                <Image src={item.iconPath} width={32} height={32} alt='facebook' className='h-full w-full object-center' />
                                            </div>
                                        </button>
                                    </Link>
                                ))}
                            </div>
                            <Button className='flex items-center gap-x-2 w-full rounded-full shadow shadow-gray-600 py-6  '>
                                DownLoad CV
                                <Download />
                            </Button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile