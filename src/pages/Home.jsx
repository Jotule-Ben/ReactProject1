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
import img18 from "../asset/whyBuyAppliancesImg.png";
import img19 from "../asset/costco10.jpg";
import img20 from "../asset/costco16.jpg";
import img21 from "../asset/costco15.jpg";
import img22 from "../asset/twoColumnCard1.png";
import img23 from "../asset/twoColumnCard2.png";
import img24 from "../asset/costco54.png";
import img25 from "../asset/costco55.png";
import img26 from "../asset/costco56.png";
import img27 from "../asset/costco57.png";
import img28 from "../asset/costco58.png";
import img29 from "../asset/costco59.png";
import img30 from "../asset/costco60.png";
import banner2 from "../asset/hero2.png";
import { Carousel } from "react-bootstrap";
import "../css/home.css";
import {
  GiBigDiamondRing,
  GiFlatTire,
  GiLaptop,
  GiScrew,
  GiWashingMachine,
} from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import { PiCarProfileLight, PiTelevisionSimpleLight } from "react-icons/pi";
import { FaGasPump } from "react-icons/fa";
import { IoIosHammer } from "react-icons/io";
import { FaAward, FaStar, FaStarHalf } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidDollarCircle } from "react-icons/bi";
import SingleCard from "../components/SingleColumnCard";
import ThreeCard from "../components/ThreeCard";
import Rewards from "../components/Rewards";
import Appliances from "../components/Appliances";

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

      <div className="advert">
        <div className="advertSec1">
          <h1>Why Buy at Costco?</h1>
          <h4>The price you SEE is the price you PAY</h4>
          <p>
            Compare Costco's all-in pricing. No surprises at checkout for
            services such as installation, haul away and extended warranties.
            See product pages for details.
          </p>
          <div>
            <table class="custom-table">
              <tbody>
                <tr>
                  <td class="GiWashingMachine">
                    <GiWashingMachine />
                  </td>
                  <td>Appliances</td>
                </tr>
                <tr>
                  <td class="IoBedOutline">
                    <IoBedOutline />
                  </td>
                  <td>Mattress</td>
                </tr>
                <tr>
                  <td class="GiFlatTire">
                    <GiFlatTire />
                  </td>
                  <td colSpan="2">Tires</td>
                </tr>
                <tr>
                  <td class="PiTelevisionSimpleLight">
                    <PiTelevisionSimpleLight />
                  </td>
                  <td colSpan="2">Television</td>
                </tr>
                <tr>
                  <td class="GiLaptop">
                    <GiLaptop />
                  </td>
                  <td colSpan="2">Computer</td>
                </tr>
                <tr>
                  <td class="GiBigDiamondRing">
                    <GiBigDiamondRing />
                  </td>
                  <td colSpan="2">Jewelry</td>
                </tr>
                <tr>
                  <td class="PiCarProfileLight">
                    <PiCarProfileLight />
                  </td>
                  <td colSpan="2">Travel Rental Cars</td>
                </tr>
                <tr>
                  <td class="FaGasPump">
                    <FaGasPump />
                  </td>
                  <td colSpan="2">Gas</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="advertSec2">
          <h1>Why Buy Appliances at Costco?</h1>
          <div className="advertSec2group">
            <div className="advertSec2Img">
              <img src={img18} alt="" />
            </div>
            <div className="advertSec2text">
              <p>
                Costco offers a large selection of premium, feature-loaded
                appliances to make your life a whole lot easier. Browse our
                extensive selection of high-end appliances in a variety of
                sizes, colors and finishes—you're sure to find something you
                love. Best of all, our prices include a two-year manufacturer
                warranty, delivery, installation and haul away service of your
                old equipment, and basic installation parts on select
                appliances.*
              </p>
              <h3>Additional member values included</h3>
              <div className="additionalValuesDiv">
                <div>
                  <span className="IoIosHammer">
                    <IoIosHammer />
                  </span>
                  <p>Delivery & Installation*</p>
                </div>

                <div>
                  <span className="TbTruckDelivery">
                    <TbTruckDelivery />
                  </span>
                  <p>Haul Away*</p>
                </div>

                <div>
                  <span className="FaAward">
                    <FaAward />
                  </span>
                  <p>Two Year Warranty</p>
                </div>

                <div>
                  <span className="GiScrew">
                    <GiScrew />
                  </span>
                  <p>Basic Installation Parts*</p>
                </div>

                <div>
                  <span className="BiSolidDollarCircle">
                    <BiSolidDollarCircle />
                  </span>
                  <p>Costco Direct Savings**</p>
                </div>

                <div>
                  <span className="TbTruckDelivery">
                    <TbTruckDelivery />
                  </span>
                  <p>
                    Costco Direct Delivery**{" "}
                    <span>
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalf />
                    </span>
                  </p>
                </div>

                <div>
                  <span className="FaStar">
                    <FaStar />
                  </span>
                  <p>Up to 4% in rewards†</p>
                </div>
              </div>
              <button>Shop Appliances</button>
            </div>
          </div>
          <p className="advertSec2lastP">
            *Online purchases only. In most areas. **On select appliances. See
            product page for details. †Terms and conditions apply. See
            calculator for details.
          </p>
        </div>
      </div>

      <div className="cardssec">
        <div className="cardsectionContainer">
          <div className="cardSectionHome">
            <div className="cardsec2">
              <h6>$799.99 After $400 OFF</h6>
              <div>
                <img src={img19} alt="" />
              </div>
              <p>CORTLAND 7-PIECE DINING TABLE SET</p>
            </div>

            <div className="cardsec2">
              <h6>$799.99 After $400 OFF</h6>
              <div>
                <img src={img20} alt="" />
              </div>
              <p>CORTLAND 7-PIECE DINING TABLE SET</p>
            </div>

            <div className="cardsec2">
              <h6>$799.99 After $400 OFF</h6>
              <div>
                <img src={img21} alt="" />
              </div>
              <p>CORTLAND 7-PIECE DINING TABLE SET</p>
            </div>

            <div className="cardsec2">
              <h6>$799.99 After $400 OFF</h6>
              <div>
                <img src={img20} alt="" />
              </div>
              <p>CORTLAND 7-PIECE DINING TABLE SET</p>
            </div>

            <div className="cardsec2">
              <h6>$799.99 After $400 OFF</h6>
              <div>
                <img src={img21} alt="" />
              </div>
              <p>CORTLAND 7-PIECE DINING TABLE SET</p>
            </div>

            <div className="cardsec2">
              <h6>$799.99 After $400 OFF</h6>
              <div>
                <img src={img20} alt="" />
              </div>
              <p>CORTLAND 7-PIECE DINING TABLE SET</p>
            </div>

            <div className="cardsec2">
              <h6>$799.99 After $400 OFF</h6>
              <div>
                <img src={img21} alt="" />
              </div>
              <p>CORTLAND 7-PIECE DINING TABLE SET</p>
            </div>

            <div className="cardsec2">
              <h6>$799.99 After $400 OFF</h6>
              <div>
                <img src={img20} alt="" />
              </div>
              <p>CORTLAND 7-PIECE DINING TABLE SET</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardCarouselSec">
        <h2>Selected For You</h2>

        <Carousel data-bs-theme="dark" className="carouselSec">
          <Carousel.Item>
            <SingleCard />
          </Carousel.Item>

          <Carousel.Item>
            <SingleCard />
          </Carousel.Item>

          <Carousel.Item>
            <SingleCard />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cardCarouselSec">
        <h2>Best Sellers In Your Area</h2>

        <Carousel data-bs-theme="dark" className="carouselSec">
          <Carousel.Item>
            <SingleCard />
          </Carousel.Item>

          <Carousel.Item>
            <SingleCard />
          </Carousel.Item>

          <Carousel.Item>
            <SingleCard />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cardSec2">
        <div>
          <img src={img22} alt="" />
        </div>
        <div>
          <img src={img23} alt="" />
        </div>
      </div>

      <div>
        <ThreeCard />
      </div>

      <div>
        <Rewards />
      </div>

      <div className="hero2">
        <div className="heroMain2">
          <img src={banner2} alt="Banner" />
        </div>
      </div>

      <div className="cardCarouselSec">
        <h2>LG Appliances</h2>

        <Carousel data-bs-theme="dark" className="carouselSec">
          <Carousel.Item>
            <Appliances />
          </Carousel.Item>

          <Carousel.Item>
            <Appliances />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cardCarouselSec">
        <h2>Samsung Appliances</h2>

        <Carousel data-bs-theme="dark" className="carouselSec">
          <Carousel.Item>
            <Appliances />
          </Carousel.Item>

          <Carousel.Item>
            <Appliances />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="cardSec2">
        <div>
          <img src={img24} alt="" />
        </div>
        <div>
          <img src={img25} alt="" />
        </div>
      </div>

      <div>
        <div className="threeCard">
          <div>
            <img src={img26} alt="" />
          </div>

          <div>
            <img src={img27} alt="" />
          </div>

          <div>
            <img src={img28} alt="" />
          </div>

          <div>
            <img src={img26} alt="" />
          </div>

          <div>
            <img src={img27} alt="" />
          </div>

          <div>
            <img src={img28} alt="" />
          </div>

          <div>
            <img src={img26} alt="" />
          </div>

          <div>
            <img src={img27} alt="" />
          </div>

          <div>
            <img src={img28} alt="" />
          </div>
        </div>
      </div>

      <div className="cardSec2">
        <div>
          <img src={img29} alt="" />
        </div>
        <div>
          <img src={img30} alt="" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
