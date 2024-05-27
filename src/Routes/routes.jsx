import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import Contact from "../contact";
import Work from "../Work";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Router;
