
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socialData = [
    {
        iconPath:'/assets/hero/instagram.jpg',
        shadowColor:'#FF33A8',
        link:'',
        name:'instagram'
    },
    {
        iconPath:'/assets/hero/facebook.png',
        shadowColor:'#3396ff',
        link:'',
        name:'facebook'
    },
    {
        iconPath:'/assets/hero/zalo.png',
        shadowColor:'#3396ff',
        link:'',
        name:'zalo'
    },
    
]
const HeroLink = () => {
  return (
    <div className=' flex gap-6 items-center w-max mx-auto lg:w-auto'>
        {socialData?.map((item) =>(
            <Link key={item?.name} href={item?.link}>
                <button className={` size-10 rounded-full border text-lg flex justify-center items-center transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-gray-700 hover:-translate-y-1 `}>
                  <div className='size-8 rounded-full overflow-hidden'>
                  <Image src={item.iconPath} width={32} height={32} alt='facebook' className='h-full w-full object-center' />
                  </div>
                </button>
            </Link>
        ))}
    </div>
  )
}

export default HeroLink