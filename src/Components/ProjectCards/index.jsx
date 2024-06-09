import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "../../styles/Components/projectcard.css";

const ProjectsCards = (props) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    // Set initial state with GSAP
    gsap.set(imageElement, { scale: 0, opacity: 0 });

    const handleMouseEnterCard = () => {
      gsap.to(imageElement, { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" });
    };

    const handleMouseLeaveCard = () => {
      gsap.to(imageElement, { scale: 0, opacity: 0, duration: 0.5, ease: "power2.out" });
    };

    const handleMouseEnterImage = () => {
      gsap.to(imageElement, {
        rotation: 10,
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5), 0px 0px 30px rgba(0, 0, 0, 0.4), 0px 0px 40px rgba(0, 0, 0, 0.3)",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeaveImage = () => {
      gsap.to(imageElement, {
        rotation: 0,
        boxShadow: "none",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const cardElement = cardRef.current;
    cardElement.addEventListener("mouseenter", handleMouseEnterCard);
    cardElement.addEventListener("mouseleave", handleMouseLeaveCard);
    imageElement.addEventListener("mouseenter", handleMouseEnterImage);
    imageElement.addEventListener("mouseleave", handleMouseLeaveImage);

    // Simple mouse follower
    const followerElement = followerRef.current;
    gsap.set(followerElement, { xPercent: -50, yPercent: -50 });
    const moveFollower = (event) => {
      gsap.to(followerElement, { x: event.clientX, y: event.clientY, duration: 0.1 });
    };
    document.addEventListener("mousemove", moveFollower);

    // Cleanup event listeners on component unmount
    return () => {
      cardElement.removeEventListener("mouseenter", handleMouseEnterCard);
      cardElement.removeEventListener("mouseleave", handleMouseLeaveCard);
      imageElement.removeEventListener("mouseenter", handleMouseEnterImage);
      imageElement.removeEventListener("mouseleave", handleMouseLeaveImage);
      document.removeEventListener("mousemove", moveFollower);
    };
  }, []);

  return (
    <>
      <div className="project-card-main my-5" ref={cardRef}>
        <div className="card-left">
          <div className="counts">{props.count}</div>
          <div className="title"><p>{props.title}</p></div>
          <div className="technologies">
            <button>{props.technologies}</button>
          </div>
        </div>
        <div className="card-center">
          <img src={props.image} alt="" ref={imageRef} className="card-image" />
        </div>
        <div className="card-right">
         <p>2023</p>
        </div>
      </div>
      <div className="mouse-follower" ref={followerRef}></div>
    </>
  );
};

export default ProjectsCards;
