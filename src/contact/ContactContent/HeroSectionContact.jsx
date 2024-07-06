import React, { useEffect } from "react";
// import "../../styles/home.css";
// import ZainOp1 from "../assets/Own1.png";
import "bootstrap/dist/css/bootstrap.css";
import { gsap } from "gsap";

const HeroSectionContact = () => {
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
      <div className="hero-contact">
        <div className="text-area-contact d-flex flex-column justify-content-center align-items-center h-100">
          <h1>
            Lets grab a virtual cofee or{" "}
            <span className="text-color">drop a line</span>{" "}
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis
            rerum quod libero suscipit illum voluptatibus quidem modi autem nam
            corporis, harum sunt neque dolor iusto quisquam architecto
            doloremque voluptates ut. harum sunt neque dolor iusto quisquam architecto
            doloremque voluptates ut.
          </p>
        </div>
        <div className="bg-text">
          <h1>code</h1>
        </div>
      </div>
    </>
  );
};

export default HeroSectionContact;
