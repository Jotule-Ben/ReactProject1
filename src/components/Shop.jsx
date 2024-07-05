import React from "react";
import { Link } from "react-router-dom";
import banner from "../asset/BbyHeroImg.png";

const Shop = () => {
  return (
    <div className="shop">
      <p>
        <Link to="/">Home</Link> / Baby
      </p>

      <h3>Baby</h3>

      <div className="bbyHero">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Shop;
