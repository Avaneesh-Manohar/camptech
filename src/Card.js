import React from "react";
import Button from "./Button";
import "./index.css";

function Card({ img, title, details, label, label1, label2 }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p>{details}</p>
      <p>{label1}</p>
      <p>{label2}</p>
      <Button label={label} className={"cardButton"} />
    </div>
  );
}

export default Card;
