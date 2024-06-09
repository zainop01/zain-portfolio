import React, { useEffect } from 'react'
import Router from './Routes/routes'
import Lenis from '@studio-freight/lenis';

// import Home from './Home/index'

const App = () => {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
  //     smooth: true,
  //     smoothTouch: false,
  //   });
  

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     // Clean up Lenis instance on unmount
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <div>
     <Router />
    </div>
  )
}

export default App
