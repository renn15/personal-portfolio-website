import React from 'react'
import ProjectSection from '../Components/Projects/ProjectSection';
import SectionNav from '../Components/Navbar/SectionNav'
import { ProjectsCategory } from '../Components/constant';


const Projects = () => {
return (
    <div className="w-full h-full bg-gray-700">
        <SectionNav></SectionNav>
        <div className="w-[90%] h-[88%] relative left-[10%] top-23 text-gray-500 flex flex-col gap-y-5">
          {ProjectsCategory.map((projectCategory) => (
            <ProjectSection key={projectCategory.id} category={projectCategory} />
          ))}
          <h1>SPAM</h1>
        </div>
    </div>
  )
}

export default Projects