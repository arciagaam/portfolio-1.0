import React from 'react'

const ProjectItem = ({ type, title, roles, description, techStack, images }) => {
    return (
        <div className="grid grid-cols-2 gap-x-20">
            <div className="flex flex-col items-start sticky top-0 h-fit">
                <div className="flex flex-col py-10 gap-5">
                    <p className='text-accent'>{type}</p>

                    <div className="flex flex-col gap-20">
                        <div className="flex flex-col gap-2">
                            <p className='text-5xl font-bold font-inter'>{title}</p>
                            <div className="flex flex-row flex-wrap gap-4">
                                {roles.map((role, index) => (
                                    <div className='border border-secondary px-2 py-1' key={index}>{role}</div>
                                ))}
                            </div>
                        </div>
                        
                        <p className='text-justify'>{description}</p>

                        <div className="flex flex-col gap-2">
                            <p className='text-2xl font-bold font-inter'>Tech Stack</p>
                            <div className="flex flex-row flex-wrap gap-4 ml-1">
                                {techStack.map((tech, index) => (
                                    <div className='border border-secondary px-2 py-1' key={index}>{tech}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                {images.map((image, index) => (
                    <div key={index} className="relative flex h-[50vh] ">
                        <div className="flex rounded-sm h-fit w-fit overflow-hidden">
                            <img className='object-contain' src={`images/projects/${image}`} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectItem