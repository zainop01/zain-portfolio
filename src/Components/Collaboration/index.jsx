import React from 'react'
import ZainOpImg from "../../assets/CircularOwnPng.svg"
import { FaWindowMinimize, FaWindowMaximize, FaTimes } from "react-icons/fa";
import "../../styles/Components/collaboration.css"


const Collaboration = () => {
  return (
      <div className="collaboration-main">
        <div className="card-top d-flex p-2">
            <h3 className="fs-5 m-0 p-0">collaboration</h3>
            <div className="icons">
                <i><FaWindowMinimize /></i>
                <i><FaWindowMaximize /></i>
                <i><FaTimes /></i>
            </div>
        </div>
        <div className="collaboration-body d-flex align-items-center p-5">
        <div className="collaboration-img">
            <img src={ZainOpImg} alt="" />
        </div>
        <div>
        <div className="collaboration-heading ms-3">
            <h1 className='m-0 p-0'>Let’s work together on
            your next project</h1>
        </div>     
        <div className="collaboration-btn ms-3 mt-3">
            <button>lets-get-in-touch</button>
        </div>
        </div>

        </div>
        
      </div>
  )
}

export default Collaboration;
