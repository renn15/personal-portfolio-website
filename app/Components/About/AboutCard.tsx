import React from 'react'

const AboutCard = (props: { content: any; }) => {
  const { content } = props; 

  return (
    <div key={content.id} className="grow m-1 flex flex-row gap-1 border p-1">
        <div className="bg-yellow-100 h-full aspect-square text-xs flex justify-center items-center">logo here</div>
        <div className="grow">
            <div className="h-full flex flex-col justify-center p-2">
                <div className='font-bold text-lg'>{content.label}</div>
                <div>{content.data}</div>
            </div>
        </div>
        <div className="w-30 h-full border flex justify-center items-center hover:bg-blue-300 transition">
            CONTACT
        </div>
    </div>
  )
}

export default AboutCard