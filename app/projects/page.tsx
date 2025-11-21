import React from 'react'
import SectionNav from '../Components/Navbar/SectionNav'
import { ProjectsCategory } from '../Components/constant';
import Link from 'next/link';



const Projects = () => {
return (
    <div className="w-full h-full bg-gray-700">
        <SectionNav></SectionNav>
        <div className="w-[90%] h-[88%] relative left-[10%] top-23 text-gray-500 flex flex-col gap-y-5">
          {ProjectsCategory.map((category)=>{
            return (
              <div key={category.id} id={`project${category.id}`} className='w-[95%] mx-auto p-2 border'>
                <h1 className='text-white font-bold text-3xl'>{category.label}</h1>
                <div className={`grid grid-flow-col
                  ${category.content.length < 2 ? "grid-rows-1" : "grid-rows-2"} // One row if there's only one content, two rows else.
                  auto-cols-min`}>
                  {category.content.map((content)=>{
                    return (
                      <div key={content.id} className='w-64 h-54 flex flex-col grow border m-2'>
                        <h1 className='text-white font-bold text-xl'>{content.title}</h1>
                        <div className='grow-3 bg-white'>INSERT IMAGE HERE</div>
                        <p className='text-white text-md'>{content.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <h1>SPAM</h1>
        </div>
    </div>
  )
}

export default Projects