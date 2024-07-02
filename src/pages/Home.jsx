import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Cards from "../components/Card";
import img1 from "../asset/costco41.png";
import img2 from "../asset/costco39.png";
import img3 from "../asset/costco48.svg";
import img4 from "../asset/costco49.svg";
import "../css/home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="cardssec">
        <Cards />
      </div>

      <div className="bonusdiv">
        <div className="bonusContainer">
          <div className="bonusTextContainer">
            <div className="bonusLogoSection">
              <div className="bonusLogo1">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
              </div>
              <div className="bonusLogo2">
                <h1>Benefit from Buying More</h1>
                <div>
                  <img src={img3} alt="" />
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
            <div className="bonusTextSection">
              <p>Combine with other promotions for additional savings!</p>
              <p>Delivery in 3-5 Days in Most Areas*</p>
              <h3>
                {" "}
                Participating items are marked{" "}
                <span>
                  <img src={img4} alt="" />
                </span>
              </h3>
            </div>
          </div>

          <div className="bonusCardContainer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <h6>
          ONLINE-ONLY | LIMIT 2 REDEMPTIONS PER MEMBERSHIP | *SEE ITEM PAGE FOR
          DETAILS
        </h6>
      </div>
      <Footer />
    </>
  );
};

export default Home;
