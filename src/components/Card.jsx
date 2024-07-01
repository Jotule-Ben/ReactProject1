import React from "react";
import card1 from "../asset/cardImg1.png";
import card2 from "../asset/cardImg2.png";
import card3 from "../asset/cardImg3.png";
import card4 from "../asset/costco30.jpg";
import card5 from "../asset/costco31.jpg";
import card6 from "../asset/costco32.jpg";
import card7 from "../asset/costco33.jpg";
import "../css/cards.css";

const Cards = () => {
  return (
    <>
      <div className="cardsectionContainer">
        <div className="cardSection">
          <div className="cardsec2">
            <h6>$799.99 After $400 OFF</h6>
            <div>
              <img src={card1} alt="" />
            </div>
            <p>CORTLAND 7-PIECE DINING TABLE SET</p>
          </div>

          <div className="cardsec2">
            <h6>$799.99 After $400 OFF</h6>
            <div>
              <img src={card2} alt="" />
            </div>
            <p>CORTLAND 7-PIECE DINING TABLE SET</p>
          </div>

          <div className="cardsec2">
            <h6>$799.99 After $400 OFF</h6>
            <div>
              <img src={card3} alt="" />
            </div>
            <p>CORTLAND 7-PIECE DINING TABLE SET</p>
          </div>

          <div className="cardsec2">
            <h6>$799.99 After $400 OFF</h6>
            <div>
              <img src={card1} alt="" />
            </div>
            <p>CORTLAND 7-PIECE DINING TABLE SET</p>
          </div>

          <div className="cardsec2">
            <h6>$799.99 After $400 OFF</h6>
            <div>
              <img src={card1} alt="" />
            </div>
            <p>CORTLAND 7-PIECE DINING TABLE SET</p>
          </div>

          <div className="cardsec2">
            <h6>$799.99 After $400 OFF</h6>
            <div>
              <img src={card1} alt="" />
            </div>
            <p>CORTLAND 7-PIECE DINING TABLE SET</p>
          </div>

          <div className="cardsec2">
            <h6>$799.99 After $400 OFF</h6>
            <div>
              <img src={card1} alt="" />
            </div>
            <p>CORTLAND 7-PIECE DINING TABLE SET</p>
          </div>

          <div className="cardsec2">
            <h6>$799.99 After $400 OFF</h6>
            <div>
              <img src={card1} alt="" />
            </div>
            <p>CORTLAND 7-PIECE DINING TABLE SET</p>
          </div>

          <div className="cardsec2">
            <div>
              <img src={card7} alt="" />
            </div>
          </div>

          <div className="cardsec2">
            <div>
              <img src={card6} alt="" />
            </div>
          </div>

          <div className="cardsec2">
            <div>
              <img src={card5} alt="" />
            </div>
          </div>

          <div className="cardsec2">
            <div>
              <img src={card4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
