import React from "react";
import Banner from "../asset/costco9.jpg";
import "../css/hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={Banner} alt="Banner" />
    </div>
  );
};

export default Hero;
