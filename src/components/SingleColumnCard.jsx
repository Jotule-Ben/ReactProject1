import React from "react";
import card1 from "../asset/cardCarousel1.png";
import card2 from "../asset/cardCarousel2.png";
import { Link } from "react-router-dom";

const SingleCard = () => {
  return (
    <div className="cardsectionContainer">
      <div className="cardSection">
        <div className="cardsec2">
          <h6>$799.99 After $400 OFF</h6>
          <div>
            <img src={card2} alt="" />
          </div>
          <p>
            <span>Starting at </span> <br />
            $16.99
          </p>
          <Link>Gloria Vanderbilt Ladies' Utility Short Pink Small </Link>
        </div>

        <div className="cardsec2">
          <h6>$799.99 After $400 OFF</h6>
          <div>
            <img src={card1} alt="" />
          </div>
          <p>$379.99</p>
          <Link>Hisense 65" Class - A65K Series - 4K UHD LED LCCD TV</Link>
        </div>

        <div className="cardsec2">
          <h6>$799.99 After $400 OFF</h6>
          <div>
            <img src={card1} alt="" />
          </div>
          <p>$</p>
        </div>

        <div className="cardsec2">
          <div>
            <img src={card2} alt="" />
          </div>
          <p>$</p>
        </div>

        <div className="cardsec2">
          <div>
            <img src={card1} alt="" />
          </div>
          <p>$</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
