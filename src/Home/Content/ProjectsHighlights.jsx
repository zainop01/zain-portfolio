import React from "react";
import ProjectsCards from "../../Components/ProjectCards";
import Card1Img from "../../assets/Card1Img.png";
import Card2Img from "../../assets/Card2Img.png";
import Card3Img from "../../assets/Card3Img.png";
import { FiArrowRight } from "react-icons/fi";


const ProjectsHighlights = () => {
  return (
    <div className="main-projects">
      <div className="projects-heading  d-flex justify-content-center align-items-center my-5 py-5">
        <h1>Projects <span className="highlight">HighLights</span></h1>
      </div>
      <ProjectsCards
        count="01"
        title="Code Seekho"
        technologies={["GSAP", "JavaScript"]}
        image={Card1Img}
      />

      <ProjectsCards
        count="02"
        title="Car Care"
        technologies={["React", "Node.js"]}
        image={Card2Img}
      />

      <ProjectsCards
        count="03"
        title="Clay"
        technologies={["React", "Redux"]}
        image={Card3Img}
      />
       {/* <div className="more-about">
        <button>about-me <FiArrowRight /> </button>
      </div> */}
    </div>
  );
};

export default ProjectsHighlights;
