import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import ProjectItem from '../components/ProjectItem';
import TechStackItem from '../components/TechStackItem';


gsap.registerPlugin(ScrollTrigger)

const Home = () => {

    useLayoutEffect(() => {
        // const imageDiv = document.querySelectorAll('.images');
        // const images = document.querySelectorAll('img');

        // console.log(imageDiv)

        // gsap.to(imageDiv, {
        //     yPercent: -50,
        //     scrollTrigger : {
        //         trigger: imageDiv,
        //         start: 'top bottom',
        //         scrub: true,

        //         markers: true,
        //     },
        // })

    }, [])

    return (
        <div className="flex flex-col min-h-screen bg-primary text-secondary scroll-smooth font-inconsolata uppercase">

            {/* HERO */}

            <div className="relative flex flex-col min-h-screen items-center justify-center">
                <div className="flex flex-col justify-center items-center">
                    <p className='text-7xl font-inter font-bold uppercase'>Miguel Arciaga</p>
                    <p className='self-end text-accent'>Junior Web Developer</p>
                </div>

                <a href='#about' className="absolute flex items-center gap-2 bottom-20 left-20 cursor-pointer">
                    <div className='flex gap-2 items-center'>
                        <p className='text-lg'>SCROLL DOWN</p>
                        <i className='bx bx-chevron-down text-xl animate-bounce'></i>
                    </div>
                </a>
            </div>

            {/* SECTION 1 ABOUT ME */}
            <div id='about' className="relative flex flex-col p-20 min-h-screen justify-between">
                <div className='absolute flex flex-row gap-20 items-baseline top-20 left-20 text-white/20'>
                    <p className='font-inter font-bold text-9xl'>01</p>
                </div>

                <div  className="flex flex-1 justify-center gap-20">
                    <div className="flex flex-1 flex-col justify-center gap-5">
                        <p className='font-inter font-bold text-5xl'>About Me</p>
                        <p>Hello! I am <span className='font-bold text-justify '>Alberto Miguel Arciaga,</span> a 4th year Information Techonology student with specialization in Web and Mobile Applications from FEU Institute of Technology.</p>
                    </div>

                    <div className="flex flex-1 items-center justify-center">
                        <div className="relative flex aspect-square overflow-hidden h-[620px]">
                            <div className="absolute min-h-[200px] min-w-[400px] bg-primary top-0 left-0 translate-x-[-200px] translate-y-[-100px] -rotate-45 "></div>
                            {/* <div className="absolute min-h-[20px] min-w-[400px] bg-primary top-0 left-0 translate-x-[-28px] translate-y-[-25px] -rotate-45 "></div> */}
                            <div className="absolute min-h-[200px] min-w-[400px] bg-primary bottom-0 right-0 translate-x-[200px] translate-y-[100px] -rotate-45 "></div>
                            {/* <div className="absolute min-h-[20px] min-w-[400px] bg-primary bottom-0 right-0 translate-x-[200px] translate-y-[100px] -rotate-45 "></div> */}
                            <img className='object-cover w-full object-top' src="images/profile.jpg" alt="" />
                        </div>
                    </div>
                </div>

            </div>

            {/* SECTION 2 TECHSTACK */}
            <div className="relative flex flex-col p-20 min-h-screen justify-between">
                <p className='absolute top-20 left-20 font-inter font-bold text-9xl text-white/20'>02</p>

                <div className="flex flex-1 justify-center gap-20">
                    <div className="flex flex-1 flex-col justify-center gap-5">
                    <p className='font-inter font-bold text-5xl'>Tech Stack</p>
                        <p className='text-justify'>I work with front-end technologies such as HTML, CSS, and JavaScript, as well as popular frameworks like ReactJS. I also use TailwindCSS to style the webpages. On the back-end, I utilize PHP and Laravel to build web applications. I use either MySQL or Firebase depending on the project's needs. With these tools, i am able to create modern and functional applications. </p>
                    </div>

                    <div className="flex flex-1 items-center justify-center">
                        <div className="grid grid-cols-4 w-full gap-1">
                            <TechStackItem image={'html.png'} title={'HTML5'} />
                            <TechStackItem image={'css.png'} title={'CSS'}/>
                            <TechStackItem image={'js.png'} title={'JavaScript'}/>
                            <TechStackItem image={'php.png'} title={'PHP'}/>
                            <TechStackItem image={'laravel.png'} title={'Laravel'}/>
                            <TechStackItem image={'tailwind.png'} title={'Tailwind CSS'}/>
                            <TechStackItem image={'react.png'} title={'ReactJS / React Native'}/>
                            <TechStackItem image={'vite.png'} title={'Vite'}/>
                            <TechStackItem image={'firebase.png'} title={'Firebase'}/>
                            <TechStackItem image={'mysql.png'} title={'MySQL'}/>

                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3 PROJECTS */}
            <div className="relative flex flex-col p-20 min-h-screen justify-between">
                <p className='absolute top-20 left-20 font-inter font-bold text-9xl text-white/20'>03</p>

                <div className="flex min-h-screen flex-1 justify-center">
                    <div className='flex flex-col items-center justify-center'>
                        <p className='font-inter font-bold text-9xl'>Projects</p>
                        <p className='self-start'>Here are some of my projects.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-48">
                    {/* type = string
                    title = string
                    roles = array of strings
                    techStack = array of strings
                    images = array of strings (file_name) */}

                    <ProjectItem
                        type={'Recent Project'}
                        title={'Barangay Management System'}
                        roles={['Back-end Developer']}
                        description={'A Barangay Management System for General Trias, Cavite'}
                        techStack={['Laravel', 'Tailwind CSS', 'MySQL']}
                        images={['bsys1.jpeg', 'bsys2.jpeg', 'bsys3.png', 'bsys4.png']}
                    />

                    <ProjectItem
                        type={'Capstone Project'}
                        title={'Agendas'}
                        roles={['Lead Developer', 'Full-Stack Developer']}
                        description={'A Smart Scheduling Management System with the Aid of Decision Support'}
                        techStack={['PHP', 'CodeIgniter', 'jQuery', 'MySQL']}
                        images={['agendas1.png', 'agendas2.png', 'agendas3.png', 'agendas4.png']}
                    />

                    <ProjectItem
                        type={'School Project'}
                        title={'Sinagtala.ph'}
                        roles={['Lead Developer', 'Full-Stack Developer']}
                        description={'A Web and Mobile E-Commerce Application for Sinagtala.ph'}
                        techStack={['ReactJS', 'Tailwind CSS', 'Firebase']}
                        images={['sinagtala1.png', 'sinagtala2.png', 'sinagtala3.png']}
                    />

                    <ProjectItem
                        type={'School Project'}
                        title={'Quadro Calendars'}
                        roles={['Lead Developer', 'Full-Stack Developer']}
                        description={'A Web-based Calendar Organizer'}
                        techStack={['CodeIgniter', 'JavaScript', 'MySQL']}
                        images={['quadrocalendars1.png', 'quadrocalendars2.png', 'quadrocalendars3.png']}
                    />
                </div>

            </div>

            {/* FOOTER */}
            <div className="flex flex-row min-h-[50vh] border-t border-secondary w-[90%] self-center">
            </div>

        </div>
    )
}

export default Home