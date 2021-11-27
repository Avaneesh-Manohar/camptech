import React from "react";
// import Button from "./Button";
import Card from "./Card";

function Quiz({title, lorem}) {
  return (
    <div className="content quiz">
      <div className="head">
        <h1>Daily Quizes</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi
        quas quidem quis eius hic vero officia, maxime non voluptatibus?
        </p>
      </div>
      <div className="options">
        <h3>Today</h3>
      </div>
      <div className="cardContainer">
        <Card
          img={"https://htmlcssmonk.com/wp-content/uploads/2020/10/cssquiz.png"}
          label={"Start"}
          details={"Questions_____               5"}
          label1={"Time___________           5 min"}
          label2={"Difficulty_______Easy"}
        />
      </div>
    </div>
  );
}

export default Quiz;
