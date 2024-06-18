import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { FaWindowMinimize, FaWindowMaximize, FaTimes } from "react-icons/fa";
import "../../styles/home.css";
import { FiArrowRight } from "react-icons/fi";
import ZainOp2 from "../../assets/Own3.png";
import useTypewriter from "../../Components/Typewriiter";

const DraggableComponent = () => {
  const roles = ["Developer", "Designer", "Editor"];
  const typewriterText = useTypewriter(roles);

  useEffect(() => {
    gsap.registerPlugin(Draggable);

    Draggable.create(".draggable", {
      bounds: ".container",
      type: "x,y",
      edgeResistance: 0.65,
      onDragStart: function () {
        gsap.to(this.target, {
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          duration: 0.2,
        });
      },
      onDragEnd: function () {
        gsap.killTweensOf(this.target);
        gsap.to(this.target, {
          x: this.x,
          y: this.y,
          ease: "power2.out",
          duration: 0.5,
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
        });
      },
    });
  }, []);

  return (
    <div className="container">
      <div className="heading d-flex justify-content-center align-items-center mt-5 pt-5">
        <h1>Your <span className="interactive-txt">Interactive</span> {typewriterText}</h1>
      </div>
      {/* Potrait */}
      <div className="draggable potrait" id="potrait">
        <div className="card-top-potrait">
          <h3 className="fs-5 m-0 p-0">Potrait</h3>
          <div className="icons">
            <i><FaWindowMinimize /></i>
            <i><FaWindowMaximize /></i>
            <i><FaTimes /></i>
          </div>
        </div>
        <img src={ZainOp2} alt="" />
      </div>
      {/* About */}
      <div className="draggable about-me" id="about-me">
        <div className="card-top-about-me">
          <h3 className="fs-5 m-0 p-0">about-me</h3>
          <div className="icons">
            <i><FaWindowMinimize /></i>
            <i><FaWindowMaximize /></i>
            <i><FaTimes /></i>
          </div>
        </div>
        <div className="about-content">
          {/* Point 1 */}
          <p>
            <span className="points">1 -</span>Nice to meet you! I'm Zain, I'm a
            <span style={{ color: "greenyellow" }}>Web Developer,</span>{" "}
            <span style={{ color: "skyblue" }}>UI/UX Designer,</span>{" "}
            <span style={{ color: "orange" }}>Video Editor,</span>{" "}
            <span style={{ color: "rgb(186, 113, 255)" }}>Graphic Designer.</span>
          </p>
          {/* Point 2 */}
          <p>
            <span className="points">2 -</span>I'm passionate about both
            <span style={{ color: "yellow" }}>web design</span> and{" "}
            <span style={{ color: "rgb(255, 119, 119)" }}>web development</span>{" "}
            in all of its aspects. This is where both my{" "}
            <span style={{ color: "rgb(150, 132, 255)" }}>technical</span> and{" "}
            <span style={{ color: "rgb(255, 57, 166)" }}>creative </span>skills
            can be used at their best.
          </p>
          {/* Point 3 */}
          <p>
            <span className="points">3 -</span>I bring my{" "}
            <span style={{ color: "greenyellow" }}>expertise</span> in my
            collaborations with{" "}
            <span style={{ color: "yellow" }}>web agencies,</span>{" "}
            <span style={{ color: "rgb(150, 132, 255)" }}>design studios</span>{" "}
            and other{" "}
            <span style={{ color: "rgb(255, 57, 166)" }}>freelance professionals </span>
            in the field to add value to the project I work on.
          </p>
          {/* Point 4 */}
          <p>
            <span className="points">4 -</span>
            <span style={{ color: "greenyellow" }}>Coding</span> for me is not
            just my work, I like{" "}
            <span style={{ color: "rgb(255, 57, 166)" }}>experimenting</span>{" "}
            with many <span style={{ color: "yellow" }}>technologies</span> and
            I also maintain some{" "}
            <span style={{ color: "rgb(255, 57, 166)" }}>personal projects.</span>{" "}
            Whenever I can, I like to contribute to{" "}
            <span style={{ color: "greenyellow" }}>open-source</span> to give
            back to the community.
          </p>
        </div>
      </div>
      {/* Social */}
      <div className="draggable social" id="social">
        <div className="card-top-social">
          <h3 className="fs-5 m-0 p-0">me-online</h3>
          <div className="icons">
            <i><FaWindowMinimize /></i>
            <i><FaWindowMaximize /></i>
            <i><FaTimes /></i>
          </div>
        </div>
        <div className="social-links">
          <div className="mb-1">
            <span className="points">1</span>
            <a href="#" target="_blank">
              linkdin <FiArrowRight />
            </a>
          </div>
          <div className="mb-1">
            <span className="points">2</span>
            <a href="#" target="_blank">
              github <FiArrowRight />
            </a>
          </div>
          <div className="mb-1">
            <span className="points">3</span>
            <a href="#" target="_blank">
              instagram <FiArrowRight />
            </a>
          </div>
          <div className="mb-1">
            <span className="points">4</span>
            <a href="#" target="_blank">
              facebook <FiArrowRight />
            </a>
          </div>
          <div className="mb-1">
            <span className="points">5</span>
            <a href="#" target="_blank">
              twitter <FiArrowRight />
            </a>
          </div>
        </div>
      </div>
      {/* Hobbies */}
      <div className="draggable hobbies" id="hobbies">
        <div className="card-top-hobbies">
          <h3 className="fs-5 m-0 p-0 me-4">hobbies</h3>
          <div className="icons">
            <i><FaWindowMinimize /></i>
            <i><FaWindowMaximize /></i>
            <i><FaTimes /></i>
          </div>
        </div>
        <div className="hobbies-content">
          <div className="d-flex">
            <span className="points">1</span>
            <p className="m-0 p-0">🎮 Gaming</p>
          </div>
          <div className="d-flex">
            <span className="points">2</span>
            <p className="m-0 p-0">🏊‍♀️ Swimming</p>
          </div>
          <div className="d-flex">
            <span className="points">3</span>
            <p className="m-0 p-0">📚 Reading</p>
          </div>
          <div className="d-flex">
            <span className="points">4</span>
            <p className="m-0 p-0">👞 Hiking</p>
          </div>
        </div>
      </div>
      <div className="more-about">
        <button>about-me <FiArrowRight /> </button>
      </div>
    </div>
  );
};

export default DraggableComponent;
