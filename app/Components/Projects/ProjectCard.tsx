import Image from 'next/image';
import React from 'react'

const ProjectCard = (props: { content: any; }) => {
  const { content } = props; 

  return (
    <div key={content.id} className='w-80 h-60 flex flex-col grow border m-2'>
        <h1 className='text-white font-bold text-xl'>{content.title}</h1>
        <div className='grow-3 bg-white'>INSERT IMAGE HERE</div>
        {/* <Image src={content.image} fill={true} alt={`Logo of {content.label}`}/> */}
        <p className='text-white text-md leading-5'>{content.desc}</p>
    </div>
  )
}

export default ProjectCard