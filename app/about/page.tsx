import React from 'react'
import AboutCard from '../Components/About/AboutCard'
import { AboutContent } from '../Components/constant';
import AboutPortrait from '../Components/About/AboutPortrait';

const About = () => {
  return (
    <div className="bg-gray-700 w-full h-screen flex flex-col justify-center items-center">
      <div className="w-[70%] h-[70%] relative top-10 items-center grid grid-cols-3 gap-x-5">
        <AboutPortrait/>
        <div className="col-span-2 w-full h-full flex flex-col">
          {AboutContent.map((aboutCard) => (
            <AboutCard key={aboutCard.id} content={aboutCard} />
          ))}
        </div>
      </div>
      <div className='absolute bottom-[5%] text-white flex flex-row gap-5'>
        <div><a target="_blank" href="https://icons8.com/icon/2848/letter" className="text-gray-300">Mail</a> icon by <a target="_blank" href="https://icons8.com" className="text-gray-300">Icons8</a></div>
        <div><a target="_blank" href="https://icons8.com/icon/jShwZ2RCyPSO/phone" className="text-gray-300">Phone</a> icon by <a target="_blank" href="https://icons8.com" className="text-gray-300">Icons8</a></div>
      </div>
    </div>
  )
}

export default About