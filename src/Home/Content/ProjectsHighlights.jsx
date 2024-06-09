import React from "react";
import ProjectsCards from "../../Components/ProjectCards";
import Card1Img from "../../assets/Card1Img.png";
import Card2Img from "../../assets/Card2Img.png";
import Card3Img from "../../assets/Card3Img.png";

const ProjectsHighlights = () => {
  return (
    <div className="main-projects">
      <div className="projects-heading  d-flex justify-content-center align-items-center my-5 py-5">
        <h1>Projects HighLights</h1>
      </div>
      <ProjectsCards
        count="01"
        title="Code Seekho"
        technologies="GSAP"
        image={Card1Img}
        // technologies= "JS"
      />

      <ProjectsCards
        count="02"
        title="Car Care"
        technologies="React"
        image={Card2Img}
        // technologies= "JS"
      />

      <ProjectsCards
        count="03"
        title="Clay"
        technologies="React"
        image={Card3Img}
        // technologies= "JS"
      />
    </div>
  );
};

export default ProjectsHighlights;
