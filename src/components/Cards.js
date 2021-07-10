import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Let's Contribute</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          {/* <ul className="cards__items">
            <CardItem
              src="../assets/images/img-7.jpg"
              text="Explore the hidden treasure in online education"
              label="Contribute"
              path="/contribute"
            />
            <CardItem
              src="../assets/images/img-8.jpg"
              text="Let's get to know each others"
              label="About"
              path="/about"
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
