import React, { useEffect } from 'react';
import "../../styles/home.css";
import ZainOp1 from "../../assets/Own1.png";
import "bootstrap/dist/css/bootstrap.css";
// import { gsap } from "gsap";
import HeroSection from './HeroSection';
import DraggableComponent from './Draggable';
import ProjectsHighlights from './ProjectsHighlights';
import SwiperComponent from '../../Components/Testimonials';
// import TestimonialSlider from '../../Components/Testimonials';

// import Lenis from '@studio-freight/lenis';


const Content = () => {

  return (
    <div className='content'>
    <HeroSection/>
    <DraggableComponent/>
    <ProjectsHighlights/>
    <SwiperComponent />
    {/* <TestimonialSlider/> */}
      {/* content end */}
    </div>
  );
}


export default Content;
