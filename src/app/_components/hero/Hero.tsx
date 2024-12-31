
import React from 'react'

// components
import HeroImage from './HeroImage'
import HeroText from './HeroText'

const Hero = () => {
  return (
    <section className='py-6 mb-16'>
      <div className='container'>
        <div className=' grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-8'>
          <HeroText />
          <HeroImage />
        </div>
      </div>
    </section>
  )
}

export default Hero