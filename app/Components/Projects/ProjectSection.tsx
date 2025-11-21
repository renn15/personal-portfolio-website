import React from 'react'
import ProjectCard from './ProjectCard';

const ProjectSection = (props: { category: any; }) => {
    const { category } = props;
    return (
        <div key={category.id} id={`project${category.id}`} className='w-[95%] mx-auto p-2 border'>
            <h1 className='text-white font-bold text-3xl'>{category.label}</h1>
            <div className={`grid grid-flow-col auto-cols-min
                ${category.content.length < 2 ? "grid-rows-1" : "grid-rows-2"}`}> {/* // One row if there's only one content, two rows else. */}
                {category.content.map((projectContent: { id: any; })=>{
                return (
                    <ProjectCard key={projectContent.id} content={projectContent} />
                );
                })}
            </div>
        </div>
    );
}

export default ProjectSection