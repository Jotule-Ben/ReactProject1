import React, { useContext, useEffect } from "react";
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
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Context } from "../context/Context";

const Navbar = () => {
  const { userName, firstLetterOfUserName } = useContext(Context);
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
                <Link> New Lower Prices </Link>
              </li>
              <li>
                <Link> Customer Service </Link>
              </li>
              <li>
                <Link to="/updateUserDetail"> Manage Account </Link>
              </li>
              <li>
                <Link to="/merchantaccount"> Settings </Link>
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
            <Link to="/" style={{ width: "6%" }}>
              <img
                src={costcologo}
                alt="Logo"
                style={{
                  width: "210%",
                  height: "20%",
                  margin: "0",
                  padding: "0",
                }}
              />
            </Link>
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
                {userName && userName !== "" && userName !== undefined ? (
                  <div
                    style={{
                      padding: "5px",
                      textAlign: "center",
                      marginBottom: "0px",
                      backgroundColor: "palevioletred",
                      borderRadius: "50%",
                      height: "25px",
                      width: "25px",
                    }}
                  >
                    <p
                      style={{
                        padding: "0",
                        margin: "0",
                        marginTop: "-2px",
                        color: "white",
                      }}
                    >
                      {firstLetterOfUserName}
                    </p>
                  </div>
                ) : (
                  <Link to="/signUp">Sign In / Register</Link>
                )}
              </li>
              <li>
                <Link> Orders & Returns </Link>
              </li>
              <li>
                <Link to="/cart">
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
            <li className="dropdown2">
              <Link className="dropbtn2" to="/shop">
                <span>
                  <FiMenu />
                </span>
                Shop
              </Link>

              <div className="dropdown-content2" style={{ left: "-1120px" }}>
                <div className="row2">
                  <div className="column2">
                    <h6>Appliances </h6>
                    <h6>
                      <Link to="/shop" style={{ color: "#333" }}>
                        Baby{" "}
                      </Link>
                    </h6>
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
