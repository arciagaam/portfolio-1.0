import { useLayoutEffect, useRef, useState } from 'react'
import Home from './pages/Home'
import { gsap } from "gsap";
function App() {

  const clientPointerPosition = useRef(null);

  // useLayoutEffect(() => {
  //   const pointer =  document.querySelector('#pointer');
  
  //   document.body.onpointermove = e => {
  //       const {pageX, pageY} = e;
  //       clientPointerPosition.current = {x:pageX, y:pageY}
  //       pointer.style.left = `${pageX}px`;
  //       pointer.style.top = `${pageY}px`;
  //   }

  //   window.addEventListener('scroll', (e) => {
  //     console.log(window)
  //     pointer.style.top = `${clientPointerPosition.current.y + Math.floor(window.scrollY)}px`;
  //   });


  // }, []);

  return (
    <>
      {/* <i id="pointer" className='absolute bx bxs-circle text-white z-10' ref={clientPointerPosition}></i> */}
      <Home/>
    </>
  )
}

export default App
