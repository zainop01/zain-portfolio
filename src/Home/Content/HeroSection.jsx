import React, { useEffect } from 'react';
import "../../styles/home.css";
import ZainOp1 from "../../assets/Own1.png";
import "bootstrap/dist/css/bootstrap.css";
import { gsap } from "gsap";

const HeroSection = () => {

  useEffect(() => {
    // Animate background text
    function animateCodeText() {
        gsap.to(".bg-text h1", {
            x: "20%",
            duration: 10,
            ease: "linear",
            repeat: -1,
            yoyo: true,
        });
    }
    animateCodeText();

    // Typing animation for roles
    const roles = ['developer', 'designer', 'editor'];
    let index = 0;
    let charIndex = 0;
    const spanElement = document.querySelector('.text-area .text-changing');
    
    function type() {
        if (charIndex < roles[index].length) {
            spanElement.textContent += roles[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            spanElement.textContent = roles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            index = (index + 1) % roles.length;
            setTimeout(type, 500);
        }
    }
    
    setTimeout(type, 1000);

    // Parallax effect on mouse move only for the image
    const bgImg = document.querySelector('.bg-img img');
    
    function handleMouseMove(event) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        
        const xPos = (clientX / innerWidth - 0.5) * 20;
        const yPos = (clientY / innerHeight - 0.5) * 20;
        
        gsap.to(bgImg, {
            x: -xPos,
            y: -yPos,
            duration: 0.3,
            ease: "power3.out"
        });
    }

    window.addEventListener('mousemove', handleMouseMove);
    
    // Clean up event listener on component unmount
    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
    };
    
}, []);

  return (
   <>
     {/* hero section */}
     <div className="herosection">
        <div className="text-area d-flex flex-column justify-content-center align-items-center h-100">
          <h1>Hi, I'm Zain, a <span className='text-color'>creative</span> <span className="text-changing"></span><span className="blinking-cursor">|</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis rerum quod libero suscipit illum voluptatibus quidem modi autem nam corporis, harum sunt neque dolor iusto quisquam architecto doloremque voluptates ut.</p>
        </div>
        {/* <div className="bg-img position-absolute">
          <img className="img-fluid" src={ZainOp1} alt="" />
        </div> */}
        <div className="bg-text">
          <h1>zain</h1>
        </div>
      </div>
   </>
  )
}

export default HeroSection;
