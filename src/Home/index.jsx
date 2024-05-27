import React, { useEffect, useState } from "react";
import "../styles/home.css";
import "bootstrap/dist/css/bootstrap.css";
import { gsap } from "gsap";
import { FaRegWindowMinimize, FaRegSquare, FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { GoHome } from "react-icons/go";
import { CiUser, CiMail } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import Content from "./Content/index";
// import Loader from "./loader";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDim, setIsDim] = useState(false);
  const [showThemeButtons, setShowThemeButtons] = useState(false);
  const [currentThemeColor, setCurrentThemeColor] = useState("#8FFF86");
  const [isFullScreen, setIsFullScreen] = useState(false);


  const handleFinishLoading = () => {
    // Animation to smoothly transition content into view
    // gsap.to(".main-container", { opacity: 1, duration: 1 });
    setIsLoaded(true);
    animateContent(); 
  };

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
        filter: "blur(120px)",
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

    setShowThemeButtons(false);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setShowThemeButtons(!showThemeButtons);
  };

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
      {/* {!isLoaded && <Loader onFinishLoading={handleFinishLoading} />} */}
         {/* Render content once loaded */}
      {/* {isLoaded && ( */}
      <div className="main-container">
        <div className="top px-2 d-flex justify-content-between">
          <div className="logo fs-5 mt-1">op</div>
          <div className="logo-name fs-5 ms-4 mt-1">zainop</div>
          <div className="controls me-2 gap-3 d-flex">
            <i>
              <FaRegWindowMinimize />
            </i>
            <FaRegSquare onClick={toggleFullScreen} />
            <RxCross1 />
          </div>
        </div>
        <div className="bottom d-flex justify-content-between align-items-center px-3">
          <FaCircle
            className="theme-button"
            onClick={toggleDim}
            onContextMenu={handleRightClick}
            style={{ color: currentThemeColor }}
          />
          {showThemeButtons && (
            <div className="theme-buttons-container">
              <button
                className="theme-button"
                style={{ backgroundColor: "#FF4040" }}
                onClick={() => handleThemeChange("#FF4040")}
              ></button>
              <button
                className="theme-button"
                style={{ backgroundColor: "#492CFF" }}
                onClick={() => handleThemeChange("#492CFF")}
              ></button>
              <button
                className="theme-button"
                style={{ backgroundColor: "#2EFFFF" }}
                onClick={() => handleThemeChange("#2EFFFF")}
              ></button>
              <button
                className="theme-button"
                style={{ backgroundColor: "#8FFF86" }}
                onClick={() => handleThemeChange("#8FFF86")}
              ></button>
            </div>
          )}
          <div className="country ms-5">Based in Pakistan</div>
          <div className="links gap-2 d-flex">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
            {/* <FaXTwitter /> */}
            <FaGithub />
          </div>
        </div>
        <div className="left d-flex justify-content-center align-items-center">
          <nav className="d-flex flex-column align-items-center gap-3">
            <a href="">
              <i>
                <GoHome />
              </i>
              <span className="title">Home</span>
            </a>
            <a href="">
              <i>
                <CiUser />
              </i>
              <span className="title">About</span>
            </a>
            <a href="">
              <i>
                <IoBriefcaseOutline />
              </i>
              <span className="title">Work</span>
            </a>
            <a href="">
              <i>
                <CiMail />
              </i>
              <span className="title">Contact</span>
            </a>
          </nav>
        </div>

        <Content />

        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>
      </div>
      {/* )} */}
    </div>

  );
};

export default Home;
