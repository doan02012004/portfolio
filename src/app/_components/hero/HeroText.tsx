'use client'

import React from 'react'
import Link from 'next/link'

//motion
import { motion } from "motion/react"

// varriants
import { containerVarriants } from '@/utils/varriants'

// icons
import { Download, Mail } from 'lucide-react'

// components
import { Button } from '@/components/ui/button'
import HeroLink from './HeroLink'


const HeroText = () => {
    return (
        <motion.div
           variants={containerVarriants}
           initial='toRight'
           animate='visible'
        >
            <h2 className=' font-bold text-3xl mb-3 lg:text-5xl'>Hello</h2>
            <h1 className=' text-5xl flex gap-x-2 mb-4 lg:text-6xl'>
                <span className='text-lg font-semibold text-orange-600 lg:text-xl block'>I am</span>
               <span> Bui Van Doan</span>
            </h1>
            <h4
             className=' uppercase text-xl font-bold flex gap-x-2 items-center tracking-wide mb-3 py-2 px-3 bg-black w-max'>
                <span className='text-orange-600'>Front-end</span>
                <span className='text-white'>Developer</span>
            </h4>
            <p className='max-w-[600px] text-base text-slate-500 mb-6 tracking-wider'>Used by some of the largest companies, Next.js enables you to create high-quality web applications with the power of React components.</p>
            <div className='flex w-max mx-auto items-center gap-x-4 mb-6 lg:w-auto'>
                <Link href={'/contact'}>
                    <Button className='flex items-center gap-x-2  rounded-full text-white bg-orange-600 border border-orange-600 shadow-lg shadow-orange-300 hover:text-orange-600 hover:bg-white'>
                        Contact Me
                        <Mail />
                    </Button>
                </Link>
                <Button className='flex items-center gap-x-2 rounded-full shadow-lg shadow-gray-600  '>
                    DownLoad CV
                    <Download />
                </Button>
            </div>
            <HeroLink />
        </motion.div>
    )
}

export default HeroText