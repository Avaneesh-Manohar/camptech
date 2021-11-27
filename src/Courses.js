import React from "react";
import Content from "./Content";
import Hero from "./Hero";
import Nav from "./Nav";
import "./index.css";
import Footer from "./Footer";

function Courses() {
  return (
    <div className="courses">
      <Nav />
      <div className="flex">
        <Hero />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
