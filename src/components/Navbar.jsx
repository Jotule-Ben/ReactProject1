import React from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import "../css/nav.css";
import costcologo from "../asset/costcoLogo.png";
import {
  FaAngleDown,
  FaBox,
  FaCartArrowDown,
  FaLocationDot,
} from "react-icons/fa6";
import { FaHamburger, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbarContainer">
        <h3>
          <Link> Uber Two $50 eGift Cards $79.99 eDelivery</Link>
        </h3>
        <div className="navLinks">
          <div className="navLinksFirstGroup">
            <ul>
              <li>
                <Link> Costco Next </Link>
              </li>
              <li>
                <Link> While Supplies Last </Link>
              </li>
              <li>
                <Link> Online-Only </Link>
              </li>
              <li>
                <Link> Treasure Hunt </Link>
              </li>
              <li>
                <Link> What's New </Link>
              </li>
              <li>
                <Link> New Lower Prices </Link>
              </li>
              <li>
                <Link> Get Email Offers </Link>
              </li>
              <li>
                <Link> Customer Service </Link>
              </li>
              <li className="dropdown2">
                <Link className="dropbtn2">
                  {" "}
                  US <FaAngleDown />
                  <div class="dropdown-content2">
                    <div class="row2">
                      <div class="column2">
                        <h6>Select country/region: </h6>
                        <Link> United States </Link>
                        <Link>Canada United Kingdom </Link>
                        <Link>Mexico </Link>
                        <Link>South Korea </Link>
                        <Link>Taiwan </Link>
                        <Link>Japan </Link>
                        <Link>Australia </Link>
                        <Link>Iceland </Link>
                        <Link>France </Link>
                        <Link>Spain </Link>
                        <Link>New Zealand </Link>
                        <Link>Sweden</Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navLinkSecondGroup">
            <img src={costcologo} alt="Logo" />
            <div>
              <InputGroup className="mb-3 inputGroup">
                <Form.Control
                  placeholder="Search"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <span className="search">
                    <FaSearch />
                  </span>
                </Button>
              </InputGroup>
            </div>
            <ul>
              <li>
                <Link to="/signUp"> Sign In / Register </Link>
              </li>
              <li>
                <Link> Orders & Returns </Link>
              </li>
              <li>
                <Link>
                  <span className="cart">
                    <FaCartArrowDown />
                  </span>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="navLinkThirdGroup">
          <ul>
            <li className="dropdown">
              <Link className="dropbtn" to="/shop">
                <span>
                  <FaHamburger />
                </span>
                Shop
              </Link>

              <div class="dropdown-content">
                <div class="row">
                  <div class="column">
                    <h6>Appliances </h6>
                    <h6>Baby </h6>
                    <h6>Beauty </h6>
                    <h6>Clothing, Luggage & Handbags </h6>
                    <h6>Computers </h6>
                    <h6>Costco Direct </h6>
                    <h6>Costco Next </h6>
                    <h6>Electronics </h6>
                    <h6>Floral & Gift Baskets </h6>
                    <h6>Furniture </h6>
                    <h6>
                      Gift Cards & Tickets Grocery, Household Essentials & Pet
                    </h6>
                    <h6>Health & Personal Care </h6>
                    <h6>Holiday & Seasonal </h6>
                    <h6>Home & Installation Services</h6>
                    <h6>Home & Kitchen </h6>
                    <h6>Home Improvement </h6>
                    <h6>Jewelry, Watches & Sunglasses </h6>
                    <h6>Mattresses </h6>
                    <h6>Office Products </h6>
                    <h6>Patio, Lawn & Garden </h6>
                    <h6>Special Events </h6>
                    <h6>Sports & Fitness </h6>
                    <h6>Tires & Auto </h6>
                    <h6>Toys & Books </h6>
                    <h6>View More Categories</h6>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link>Grocery</Link>
            </li>
            <li>
              <Link>Same-Day</Link>
            </li>
            <li>
              <Link>Deals</Link>
            </li>
            <li>
              <Link>Business Delivery</Link>
            </li>
            <li>
              <Link>Optical</Link>
            </li>
            <li>
              <Link>Pharmacy</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Photo</Link>
            </li>
            <li>
              <Link>Travel</Link>
            </li>
            <li>
              <Link>Membership</Link>
            </li>
            <li>
              <Link>Location</Link>
            </li>
          </ul>
        </div>

        <div className="navSecondGroup">
          <div className="secGroupFlex">
            <div className="flex">
              <div>
                <p>My Warehouse</p>
                <h4>
                  <span className="location">
                    <FaLocationDot />
                  </span>
                  Seattle
                </h4>
              </div>
              <div className="delivery">
                <p>Delivery Location</p>
                <h4>
                  <span>
                    <FaBox />
                  </span>
                  98101
                </h4>
              </div>
            </div>
            <div className="navSecondGroupLink">
              <ul>
                <li>
                  <Link>Lists /</Link>
                </li>
                <li>
                  <Link>Buy Again</Link>
                </li>
              </ul>
            </div>
          </div>
          <p>Closed: Open 10:00 AM Wednesday</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
