import React from "react";
import "../css/shop.css";
import { Link } from "react-router-dom";
import banner from "../asset/BbyHeroImg.png";
import card1 from "../asset/bbyCard1.png";
import card2 from "../asset/bbyCard2.png";
import card3 from "../asset/bbyCard3.png";
import card4 from "../asset/bbyCard4.png";
import card5 from "../asset/bbyCard5.png";
import card6 from "../asset/bbySecCard1.png";
import card7 from "../asset/bbySecCard2.png";
import card8 from "../asset/bbySecCard3.png";
import card9 from "../asset/bbySecCard4.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="shop">
        <p>
          <Link to="/">Home</Link> / Baby
        </p>

        <h3>Baby</h3>

        <div className="bbyHero">
          <img src={banner} alt="" />
        </div>

        <div>
          <h5>Shop by category</h5>
          <div className="cardSection">
            <div>
              <img src={card1} alt="" />
              <p>Baby Care & Safety</p>
            </div>
            <div>
              <img src={card2} alt="" />
              <p>Baby diapers, Wipes & training pants</p>
            </div>
            <div>
              <img src={card3} alt="" />
              <p>Baby formula & feeding</p>
            </div>
            <div>
              <img src={card4} alt="" />
              <p>Nusery & baby furniture</p>
            </div>
            <div>
              <img src={card5} alt="" />
              <p>Clothing for babies</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
