import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h2>홍콩 과기대 한인회</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="학생회 활동"
              label="Activities/Clubs"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="동아리 활동"
              label="Activities/Clubs"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="독서방..............."
              label="Sponsorships"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="한인회 이벤트---------................"
              label="Events"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="정보---------------...................."
              label="Information"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;