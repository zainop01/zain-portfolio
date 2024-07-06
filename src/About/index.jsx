import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { gsap } from "gsap";
import { FaRegWindowMinimize, FaRegSquare, FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { CiUser, CiMail } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
// import HeroSectionContact from "./ContactContent/HeroSectionContact";
import "../styles/about.css"
import AboutContent from "./AboutContent";
// import MyForm from "./ContactContent/ContactForm";
// import ContactContent from "./ContactContent";
// import Content from "./Content";

const About = () => {
  const [isDim, setIsDim] = useState(false);
  const [currentThemeColor, setCurrentThemeColor] = useState("#E14F62");
  const [isFullScreen, setIsFullScreen] = useState(false);

  const animateContent = () => {
    gsap.from(".main-container", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  };

  useEffect(() => {
    const animateCorners = (className) => {
      gsap.to(`.${className}`, {
        duration: 3,
        background:
          "linear-gradient(90deg, var(--gradient-start), var(--gradient-end))",
        filter: "blur(100px)",
        width: 300,
        height: 300,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    };

    animateCorners("top-left");
    animateCorners("bottom-right");
  }, []);

  const toggleDim = () => {
    setIsDim(!isDim);
    const dimFactor = isDim ? "ab" : "1a";
    const newGradientStart = currentThemeColor + dimFactor;
    const newGradientEnd = currentThemeColor + "4a";

    document.documentElement.style.setProperty(
      "--gradient-start",
      newGradientStart
    );
    document.documentElement.style.setProperty(
      "--gradient-end",
      newGradientEnd
    );

    document.documentElement.style.setProperty(
      "--main-color",
      currentThemeColor
    );
    document.documentElement.style.setProperty(
      "--scrollbar-color",
      currentThemeColor
    );

    const corners = document.querySelectorAll(".corner");
    corners.forEach((corner) => {
      gsap.to(corner, {
        duration: 1,
        background: `linear-gradient(135deg, ${newGradientStart}, ${newGradientEnd})`,
      });
    });
  };

  const handleThemeChange = (color) => {
    setCurrentThemeColor(color);
    const newGradientStart = color + (isDim ? "1a" : "ab");
    const newGradientEnd = color + (isDim ? "1a" : "a3");

    document.documentElement.style.setProperty(
      "--gradient-start",
      newGradientStart
    );
    document.documentElement.style.setProperty(
      "--gradient-end",
      newGradientEnd
    );

    document.documentElement.style.setProperty("--main-color", color);
    document.documentElement.style.setProperty("--scrollbar-color", color);

    const corners = document.querySelectorAll(".corner");
    corners.forEach((corner) => {
      gsap.to(corner, {
        duration: 1,
        background: `linear-gradient(135deg, ${newGradientStart}, ${newGradientEnd})`,
      });
    });
  };

  useEffect(() =>{
    handleThemeChange('#E14F62');
  }, []);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="parent-container">
      <div className="main-container">
        <div className="top px-2 d-flex justify-content-between">
          <div className="logo fs-5 mt-1">op</div>
          <div className="logo-name fs-5 ms-4 mt-1">zainop</div>
          <div className="controls me-2 gap-3 d-flex">
          <i>
              <FaRegWindowMinimize />
            </i>
            <i>
            <FaRegSquare onClick={toggleFullScreen} />
            </i>
           <i>
           <RxCross1 />
           </i>
          </div>
        </div>
        <div className="bottom d-flex justify-content-between align-items-center px-3">
          <FaCircle
            className="theme-button"
            onClick={toggleDim}
            style={{ color: currentThemeColor }}
          />
          <div className="theme-buttons-container">
            <button
              className="theme-button"
              style={{ backgroundColor: "#91D1F8" }}
              onClick={() => handleThemeChange("#91D1F8")}
            ></button>
            <button
              className="theme-button"
              style={{ backgroundColor: "#E14F62" }}
              onClick={() => handleThemeChange("#E14F62")}
            ></button>
            <button
              className="theme-button"
              style={{ backgroundColor: "#E1B84F" }}
              onClick={() => handleThemeChange("#E1B84F")}
            ></button>
            <button
              className="theme-button"
              style={{ backgroundColor: "#8FFF86" }}
              onClick={() => handleThemeChange("#8FFF86")}
            ></button>
          </div>
          <div className="country ms-5">Based in Pakistan</div>
          <div className="links gap-2 d-flex">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            <FaGithub />
          </div>
        </div>
        <div className="left d-flex justify-content-center align-items-center">
          <nav className="d-flex flex-column align-items-center gap-3">
            <NavLink to="/">
              <i>
                <GoHome />
              </i>
              <span className="title">Home</span>
            </NavLink>
            <NavLink to="/about">
              <i>
                <CiUser />
              </i>
              <span className="title">About</span>
            </NavLink>
            <NavLink to="/work">
              <i>
                <IoBriefcaseOutline />
              </i>
              <span className="title">Work</span>
            </NavLink>
            <NavLink to="/contact">
              <i>
                <CiMail />
              </i>
              <span className="title">Contact</span>
            </NavLink>
          </nav>
        </div>
        {/* <Content /> */}
      {/* <ContactContent/> */}
      <AboutContent/>
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>
      </div>
    </div>
  );
};

export default About;
