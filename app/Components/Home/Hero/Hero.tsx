import React from 'react'

const Hero = () => {
  return (
    <div className="relative bg-lime-800 w-full h-screen flex justify-center flex-column">
        <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-10">
            {/* Images */}
            <div className="bg-white w-full h-24 lg:h-48 mx-auto mt-40 lg:mt-80 row-[1] lg:row-[1] lg:col-[1]">PLACEHOLDER TEXT PRETEND THERE'S A PORTRAIT HERE</div>
            {/* Texts */}
            <div className="text-white font-bold row-[2] lg:row-[2] lg:col-[1]">
                <h1 className="text-base sm:text-2xl md:text-4xl">Welcome to <span className="text-lime-200">renn15</span>'s Website</h1>
                <p className="text-med sm:text-base md:text-xl">Nerdy Stuff and Such</p>
            </div>
            {/* Buttons */}
            <div className="row-[3] lg:row-span-2 lg:col-[2] grid grid-cols-3 lg:grid-rows-3 lg:grid-cols-1 mx-auto my-auto">
                <a href="#" className="row-span-1 my-5 relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium translation-all bg-white rounded hover:bg-gray-200 group">Category 1</a>
                <a href="#" className="row-span-1 my-5 relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium translation-all bg-white rounded hover:bg-gray-200 group">Category 2</a>
                <a href="#" className="row-span-1 my-5 relative inline-flex items-center justify-start px-10 py-3 overflow-hidden font-medium translation-all bg-white rounded hover:bg-gray-200 group">Category 3</a>
            </div>
        </div>
    </div>
  )
}

export default Hero