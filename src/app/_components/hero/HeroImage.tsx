'use client'
import { containerVarriants } from '@/utils/varriants'
// motion
import {motion} from 'motion/react'

// varriants

const HeroImage = () => {
  return (
    <motion.div
    variants={containerVarriants}
    initial='toLeft'
    animate='visible'
    className=' hidden h-[500px] border w-full lg:block'></motion.div>
  )
}

export default HeroImage