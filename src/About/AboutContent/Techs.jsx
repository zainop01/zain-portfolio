import React from "react";
import { FaWindowMinimize, FaWindowMaximize, FaTimes } from "react-icons/fa";

const Tech = () => {
  return (
    <div className="tech-container">
        <div className="tech-inner-container w-100">
      <div className="tech-heading">
        {" "}
        <h1>
          Some of the techs I like to{" "}
          <span className="text-color">work with</span>
        </h1>
      </div>

      <div className="tech-card-container">
        <div className="tech-card-top">
          <h3 className="m-0 p-0">write-me</h3>
          <div className="icons">
            <i>
              <FaWindowMinimize />
            </i>
            <i>
              <FaWindowMaximize />
            </i>
            <i>
              <FaTimes />
            </i>
          </div>
         
        </div>
        <div className="tech-body">
            <div className="tech1 d-flex justify-content-between align-items-center mb-5">
              <h2>REACT</h2>
              <h2>GSAP</h2>
              <h2>JAVASCRIPT</h2>
            </div>
            <div className="tech2  d-flex justify-content-between align-items-center">
              <h2>REDUX</h2>
              <h2>SASS</h2>
              <h2>LOCOMOTIVE</h2>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Tech;
