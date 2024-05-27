import React, { useEffect } from 'react';
import "../../styles/home.css";
import ZainOp1 from "../../assets/Own1.png";
import "bootstrap/dist/css/bootstrap.css";
// import { gsap } from "gsap";
import HeroSection from './HeroSection';
import DraggableComponent from './Draggable';
// import Lenis from '@studio-freight/lenis';


const Content = () => {

  // useEffect(() => {
  //   const follower = document.querySelector(".mouse-follower");
  
  //   const moveFollower = (e) => {
  //     gsap.to(follower, {
  //       x: e.clientX,
  //       y: e.clientY,
  //       duration: 0.2,
  //       ease: "power2.out"
  //     });
  //   };
  
  //   window.addEventListener("mousemove", moveFollower);
  
  //   return () => {
  //     window.removeEventListener("mousemove", moveFollower);
  //   };
  // }, []);
  

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smooth: true,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <div className='content'>
    <HeroSection/>
    <DraggableComponent/>
      {/* content end */}
    </div>
  );
}

export default Content;
