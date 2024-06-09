import React, { useEffect } from 'react';
import "../../styles/home.css";
import ZainOp1 from "../../assets/Own1.png";
import "bootstrap/dist/css/bootstrap.css";
import { gsap } from "gsap";

const HeroSection = () => {

    useEffect(() => {
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
    
      }, []);

      
  return (
   <>
     {/* hero section */}
     <div className="herosection" >
        <div className="text-area d-flex flex-column justify-content-center align-items-center h-100">
          <h1>Hi, I'm Zain, a <span className='text-color'>creative</span> <span className="text-changing"></span><span className="blinking-cursor">|</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis rerum quod libero suscipit illum voluptatibus quidem modi autem nam corporis, harum sunt neque dolor iusto quisquam architecto doloremque voluptates ut.</p>
        </div>
        <div className="bg-img position-absolute">
          <img className="img-fluid" src={ZainOp1} alt="" />
        </div>
        <div className="bg-text border">
          <h1>code</h1>
        </div>
      </div>
   </>
  )
}

export default HeroSection
