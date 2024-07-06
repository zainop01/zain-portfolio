import React from 'react'
import MyForm from './ContactForm';
import HeroSectionContact from './HeroSectionContact';

const ContactContent = () => {
  return (
    <div className='contact-content'>
      <HeroSectionContact/>
      <MyForm/>
    </div>
  )
}

export default ContactContent;
