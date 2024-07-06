import React from 'react'
import HeroSectionAbout from './HeroSectionAbout'
import DraggableComponent from '../../Home/Content/Draggable';
import Tech from './Techs';

const AboutContent = () => {
  return (
    <div  className='about-content'>
      <HeroSectionAbout/>
    <DraggableComponent/>
    <Tech/>
    </div>
  )
}

export default AboutContent;
