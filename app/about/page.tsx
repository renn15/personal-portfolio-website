import React from 'react'
import AboutCard from '../Components/About/AboutCard'
import { AboutContent } from '../Components/constant';

const About = () => {
  return (
    <div className="bg-gray-700 w-[full] h-screen flex justify-center items-center">
      <div className="w-[70%] h-[70%] relative top-10 items-center grid grid-cols-3 gap-x-5">
        <div className="col-span-1 bg-red-100 w-[full] h-full">
          <h1>Insert my beautiful figure</h1>
        </div>
        <div className="col-span-2 bg-blue-100 w-full h-full flex flex-col">
          {AboutContent.map((aboutCard) => (
            <AboutCard key={aboutCard.id} content={aboutCard} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default About