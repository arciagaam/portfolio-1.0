import React, { useState } from 'react'

const TechStackItem = ({image, title}) => {

    const [isHovering, setIsHovering] = useState(false)

    return (
        <button className=' px-2 relative flex items-center justify-center aspect-square h-full' onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
            <div className={`${isHovering ? 'opacity-1000' : 'opacity-0'} flex items-center justify-center absolute h-full w-full font-inter font-bold bg-primary/80 transition-all duration-200 ease-in-out z-10`}>
                <p>{title}</p>
            </div>
            <img className={`${isHovering ? 'grayscale' : 'grayscale-0'}`} src={`images/techstack/${image}`} alt="" />
        </button>
    )
}

export default TechStackItem