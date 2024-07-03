import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Cards from "../components/Card";
import img1 from "../asset/costco41.png";
import img2 from "../asset/costco39.png";
import img3 from "../asset/costco48.svg";
import img4 from "../asset/costco49.svg";
import img5 from "../asset/costco44.svg";
import img6 from "../asset/costco45.svg";
import img7 from "../asset/costco46.svg";
import img8 from "../asset/costco47.svg";
import img9 from "../asset/bonusCard1.png";
import img10 from "../asset/bonusCard2.png";
import img11 from "../asset/bonusCard3.png";
import img12 from "../asset/bonusCard4.png";
import img13 from "../asset/halfHero.png";
import img14 from "../asset/rightHalfHero1.png";
import img15 from "../asset/rightHalfHero2.png";
import img16 from "../asset/rightHalfHero3.png";
import img17 from "../asset/rightHalfHero4.png";
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
            <div>
              <div>
                <h1>
                  <span>
                    <img src={img8} alt="" />
                  </span>
                  <span>SAVE $100</span>
                </h1>
              </div>
              <div className="bonusCardContainerImg">
                <img src={img9} alt="" />
              </div>
            </div>

            <div>
              <h1>
                <span>
                  <img src={img7} alt="" />
                </span>
                SAVE $200
              </h1>
              <div className="bonusCardContainerImg2">
                <img src={img10} alt="" />
              </div>
            </div>

            <div>
              <h1>
                <span>
                  <img src={img6} alt="" />
                </span>
                SAVE $300
              </h1>
              <div className="bonusCardContainerImg">
                <img src={img11} alt="" />
              </div>
            </div>

            <div>
              <h1>
                <span>
                  <img src={img5} alt="" />
                </span>
                SAVE $400
              </h1>
              <div className="bonusCardContainerImg">
                <img src={img12} alt="" />
              </div>
            </div>
          </div>
        </div>
        <h6>
          ONLINE-ONLY | LIMIT 2 REDEMPTIONS PER MEMBERSHIP | *SEE ITEM PAGE FOR
          DETAILS
        </h6>
      </div>

      <div className="LGTVsContainer">
        <div className="LGTVs">
          <div className="LGTVsGroup1">
            <h3>LG TVS</h3>
            <img src={img13} alt="" />
            <button>SHOP NOW</button>
          </div>
          <div className="LGTVsGroup2">
            <div className="LGTVsimg1">
              <img src={img14} alt="" />
            </div>
            <div>
              <img src={img15} alt="" />
            </div>
            <div>
              <img src={img16} alt="" />
            </div>
            <div>
              <img src={img17} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
