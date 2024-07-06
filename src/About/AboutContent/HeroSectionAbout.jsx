import React, { useEffect } from "react";
// import "../../styles/home.css";
// import ZainOp1 from "../assets/Own1.png";
import "bootstrap/dist/css/bootstrap.css";
import { gsap } from "gsap";

const HeroSectionAbout = () => {
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
  }, []);
  return (
    <>
      <div className="hero-about">
        <div className="text-area-about d-flex flex-column justify-content-center align-items-center h-100">
          <h1>
            Lets get to know
            <span className="text-color"> each other</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            rerum quod libero suscipit illum voluptatibus quidem modi autem nam
            corporis, harum sunt neque dolor iusto quisquam architecto
            doloremque voluptates ut. harum sunt neque dolor iusto quisquam
            architecto doloremque voluptates ut.
          </p>
        </div>
        <div className="bg-text">
          <h1>code</h1>
        </div>
      </div>
    </>
  );
};

export default HeroSectionAbout;
