import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="hero">
      <img
        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=1050"
        alt=""
      />
      <p>Jess Jonassen</p>
      <ul>
          <li>My Courses</li>
          <li>Report Card</li>
          <li>Notes</li>
          <li>Activity</li>
      </ul>
      <br />
      <Button 
      label={'Log Out'}
      className={'button'}
      />
    </div>
  );
}

export default Hero;
