import React from "react";
import Button from "./Button";
// import Card from "./Card";

function Support({title, lorem}) {
  return (
    <div className="content">
        <div className="contact">
            <p> <i className="fas fa-envelope"></i> <span>camptech@gmail.com</span></p>
            <p> <i className="fas fa-phone"></i> <span>9999999999</span></p>
        </div>
      <div className="head">
        <h1>Support</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi
        quas quidem quis eius hic vero officia, maxime non voluptatibus?
        </p>
      </div>
      <div className="options">
      <Button className={'button'} label={"Learn More"} />
      </div>
      <div className="cardContainer">
        
      </div>
    </div>
  );
}

export default Support;