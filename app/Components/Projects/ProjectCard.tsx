import React from 'react'

const ProjectCard = (props: { content: any; }) => {
  const { content } = props; 

  return (
    <div key={content.id} className='w-64 h-54 flex flex-col grow border m-2'>
        <h1 className='text-white font-bold text-xl'>{content.title}</h1>
        <div className='grow-3 bg-white'>INSERT IMAGE HERE</div>
        <p className='text-white text-md'>{content.desc}</p>
    </div>
  )
}

export default ProjectCard