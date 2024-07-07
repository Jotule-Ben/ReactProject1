import React from "react";
import Banner from "../asset/costco9.png";
import Card1 from "../asset/costco6.jpg";
import Card2 from "../asset/costco8.jpg";

import "../css/hero.css";
import CarouselFuntion from "../components/Carousel";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="heroMain">
          <img src={Banner} alt="Banner" />
        </div>

        <div className="cardsecHero">
          <div className="card1">
            <p>Increased Values on Appliances!</p>
            <img src={Card1} alt="" />
            <p>ONLINE-ONLY 6/19/|24 - 7/10/24 | WHILE SUPPLIES LAST VALID</p>
          </div>
          <div className="card2">
            <p>Mattress Savings Event!</p>
            <img src={Card2} alt="" />
            <p>VALID 6/20/24 - 7/7/24 | WHILE SUPPLIES LAST</p>
          </div>
        </div>
        <CarouselFuntion />
      </div>
    </>
  );
};

export default Hero;
