import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Nav() {
  return (
    <div className="nav">
      <div className="left">
        <div className="logo">
          <h3>CampTech</h3>
        </div>
        <ul className='links'>
          <li><Link to="/">Our Courses</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
          <li><Link to="/help">Help</Link></li>
          
          </ul>
      </div>
      <div className="social">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fas fa-envelope"></i>
      </div>
    </div>
  );
}

export default Nav;
