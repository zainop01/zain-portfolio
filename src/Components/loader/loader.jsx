import React, { useEffect, useState } from "react";
import "./loader.css"; // Loader styles
import { gsap } from "gsap";

const Loader = ({ onFinishLoading }) => {
  useEffect(() => {
    const loaderTimeline = gsap.timeline({ onComplete: onFinishLoading });
    loaderTimeline.to(".loader", { opacity: 0, duration: 1, ease: "power1.inOut" })
                  .to(".loader", { y: "-100%", duration: 0.5, ease: "power1.inOut", delay: 0.5 });
  }, [onFinishLoading]);

  return (
    <div className="loader-container">
      <div className="loader">zainop</div>
    </div>
  );
};

export default Loader;
