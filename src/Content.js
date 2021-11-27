import React from "react";
import Button from "./Button";
import Card from "./Card";

function Content({title, lorem}) {
  return (
    <div className="content">
      <div className="head">
        <h1>The World Best Courses</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi
        quas quidem quis eius hic vero officia, maxime non voluptatibus?
        </p>
      </div>
      <div className="options">
        <Button className={'button'} label={"All"} />
        <Button className={'button'} label={"Web"} />
        <Button className={'button'} label={"App"} />
      </div>
      <div className="cardContainer">
        <Card
          img={"https://camptech.netlify.app/static/media/web1.b2e54cbc.jpg"}
          title={"Fontend Development with HTML,CSS, JavaScript and Bootstrap"}
          label={"Enroll Now"}
          details={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nostrum."
          }
        />
        <Card
          img={"https://camptech.netlify.app/static/media/web2.eae25fea.jpg"}
          title={"Backend Development with NodeJs"}
          label={"Enroll Now"}
          details={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nostrum."
          }
        />
        <Card
          img={"https://camptech.netlify.app/static/media/web3.2bca3efd.png"}
          title={"Complete Fullstack Development"}
          label={"Enroll Now"}
          details={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nostrum."
          }
        />
        <Card
          img={"https://camptech.netlify.app/static/media/app1.0b2e9d69.png"}
          title={"App Development: Beginner to Advance"}
          label={"Enroll Now"}
          details={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nostrum."
          }
        />
        <Card
          img={"https://camptech.netlify.app/static/media/ai1.7ed361b2.png"}
          title={"Play with Artificial Intelligence"}
          label={"Enroll Now"}
          details={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nostrum."
          }
        />
        <Card
          img={"https://camptech.netlify.app/static/media/ai2.e49d361c.jpg"}
          title={"AI with Python"}
          label={"Enroll Now"}
          details={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, nostrum."
          }
        />
      </div>
      
    </div>
  );
}

export default Content;
