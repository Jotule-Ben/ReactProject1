import React from "react";
import card1 from "../asset/card1.png";
import card2 from "../asset/card2.png";
import card3 from "../asset/card3.png";

const ThreeCard = () => {
  return (
    <div>
      <div className="cardSec2">
        <div>
          <img src={card1} alt="" />
        </div>

        <div>
          <img src={card2} alt="" />
        </div>

        <div>
          <img src={card3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThreeCard;
