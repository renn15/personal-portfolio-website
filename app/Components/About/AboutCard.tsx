import React from 'react'
import Image from 'next/image';

const AboutCard = (props: { content: any; }) => {
  const { content } = props; 

  return (
    <div key={content.id} className="grow m-1 flex flex-row gap-1 bg-white rounded p-1">
        <div className="bg-black h-full aspect-square text-xs flex justify-center items-center rounded">
          <div className='relative h-[70%] w-[70%] relative'>
            <Image src={content.logo} fill={true} alt={`Logo of {content.label}`}/>
          </div>
        </div>
        <div className="grow">
            <div className="h-full flex flex-col justify-center p-2">
                <div className='font-bold text-lg'>{content.label}</div>
                <div>{content.data}</div>
            </div>
        </div>
        <div className="w-30 h-full border flex justify-center items-center hover:bg-gray-200 font-medium transition-all">
            CONTACT
        </div>
    </div>
  )
}

export default AboutCard