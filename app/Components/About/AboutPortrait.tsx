import React from 'react'
import Image from 'next/image'
import { Lobster } from "next/font/google";

const subtitleFont = Lobster({
  weight: ['400'],
  subsets: ['latin']
})

const AboutPortrait = () => {
  return (
  <div className="col-span-1 w-full h-full relative">
    <div className='w-full h-full absolute z-500 hover:opacity-10 transition'>
        <Image src="/Images/AboutPortrait.png" fill={true} objectFit='cover' alt="Picture of the author"/>
        <h1 className={`${subtitleFont.className} text-gray-200 font-bold text-3xl text-center
            absolute right-[-5%] bottom-[25%] w-60 text-wrap z-500`}>
            Steven Darren Wijaya
        </h1>
    </div>
    <div className='bg-gray-900 w-full h-full absolute z-400'>
        <div className="w-full h-full absolute flex justify-center items-center">
            <h1 className={`${subtitleFont.className} w-[90%] text-white text-4xl text-center`}>Graphic design is still my passion</h1>
        </div>
        <div>
            <p className='text-white text-sm absolute bottom-0'>Any feedback and complaints related to this web's design can be directed to the contacts beside {'\u2192'}</p>
        </div>
    </div>
  </div>
  )
}

export default AboutPortrait