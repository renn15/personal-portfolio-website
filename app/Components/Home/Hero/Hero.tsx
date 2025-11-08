import Link from 'next/link'
import React from 'react'
import { SectionNavLinks } from '../../../Constant/constant';

const Hero = () => {
  return (
    <div className="bg-gray-700 w-full h-screen flex justify-center items-center">
        <div className="w-[90%] md:w-[80%] h-[90%] md:h-[80%] relative top-17.5 items-center grid grid-cols-1 grid-rows-3 lg:grid-cols-2 gap-x-5">
            {/* Images */}
            <div className="bg-white w-full h-full mx-auto row-[1] lg:row-span-2 lg:col-[1] flex justify-center items-center">PLACEHOLDER TEXT PRETEND THERE'S A PORTRAIT HERE</div>
            {/* Texts */}
            <div className="text-white font-bold row-[2] lg:row-[3] lg:col-[1] flex flex-col text-center">
                <h1 className="text-base sm:text-2xl md:text-4xl">Welcome to <span className="text-gray-300">renn15</span>'s Website</h1>
                <p className="text-med sm:text-base md:text-xl">Nerdy Stuff and Such</p>
            </div>
            {/* Buttons */}
            <div className="row-[3] lg:row-span-3 lg:col-[2] h-[80%] flex flex-col justify-center border-solid gap-10">
                <h1 className="text-white font-bold text-4xl">Projects</h1>
                {SectionNavLinks.map((link)=>{
                      return (
                          <Link href={link.url} key={link.id} className="relative inline-flex items-center justify-center grow px-10 py-3 overflow-hidden font-medium translation-all bg-white rounded hover:bg-gray-200 group text-xl">
                              <p>{link.label}</p>
                          </Link>
                      );
                  })}
            </div>
        </div>
    </div>
  )
}

export default Hero