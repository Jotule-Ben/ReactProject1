import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/footer.css";
import { FaQuestion } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import logo from "../asset/costco21.png";
import ccpa from "../asset/costco38.svg";
import fb from "../asset/costco42.svg";
import pinInterest from "../asset/costco43.svg";
import ig from "../asset/costco51.svg";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerGroupOne">
          <div>
            <h4>Customer Service</h4>
            <p>
              <span className="question">
                <FaQuestion />
              </span>{" "}
              Get Help
            </p>
          </div>

          <div>
            <h4>Find a Warehouse</h4>
            <div>
              {" "}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="City, state or zip"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <span className="footerSearch">
                    <FaSearch />
                  </span>
                </Button>
              </InputGroup>
            </div>
          </div>

          <div>
            <h4>Get Email Offers</h4>
            <div>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter your email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  className="gobtn"
                >
                  Go
                </Button>
              </InputGroup>
            </div>
          </div>

          <div className="mediaContainer">
            <h4>Follow Us</h4>
            <div className="media">
              <img src={fb} alt="fb logo" />
              <img src={pinInterest} alt="pin interest logo" />
              <img src={ig} alt="instagram logo" />
            </div>
          </div>

          <div className="footerLogo">
            <h4>Get the Costco App</h4>
            <div>
              <img src={logo} alt="Costco logo" />
            </div>
          </div>
        </div>

        <div className="footerLinks">
          <div>
            <h4>About Us</h4>
            <ul>
              <li>
                <Link>Charitable Contributions</Link>
              </li>
              <li>
                <Link>Company Information</Link>
              </li>
              <li>
                <Link>Sustainability Commitment</Link>
              </li>
              <li>
                <Link>Investor Relations</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
              <li>
                <Link>Kirkland Signature</Link>
              </li>
              <li>
                <Link>Logo and Media Requests</Link>
              </li>
              <li>
                <Link>The Costco Connection</Link>
              </li>
              <li>
                <Link>Quick & Easy Recipe Videos</Link>
              </li>
              <li>
                <Link>Costco Blog </Link>
              </li>
              <li>
                <Link>Employee Site </Link>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <h4>Membership </h4>
              <ul>
                <li>
                  <Link>Join Now</Link>
                </li>
                <li>
                  <Link>Member Privileges</Link>
                </li>
                <li>
                  <Link>Executive Membership Terms</Link>
                </li>
                <li>
                  <Link>Sign In or Register </Link>
                </li>
                <li>
                  <Link>Credit Card </Link>
                </li>
              </ul>
            </div>
            <br />
            <br />
            <div>
              <h4>Vendors & Suppliers </h4>
              <ul>
                <li>
                  <Link>Supply Chain Disclosure</Link>
                </li>
                <li>
                  <Link>Ethics Hotline for Suppliers</Link>
                </li>
                <li>
                  <Link>Supplier Diversity </Link>
                </li>
                <li>
                  <Link>Explore Our Brands</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4>Customer Service </h4>
            <ul>
              <li>
                <Link>Costco Shop Card Balance </Link>
              </li>
              <li>
                <Link>Order By Item Number</Link>
              </li>
              <li>
                <Link>Costco Technical & Warranty Services</Link>
              </li>
              <li>
                <Link>Volume Sales: Export & Domestic</Link>
              </li>
              <li>
                <Link>Order Status</Link>
              </li>
              <li>
                <Link>Preventing Fraud</Link>
              </li>
              <li>
                <Link>Shipping</Link>
              </li>
              <li>
                <Link>Rebates</Link>
              </li>
              <li>
                <Link>Recalls & Product Notices</Link>
              </li>
              <li>
                <Link>Returns and Exchanges</Link>
              </li>
              <li>
                <Link> Returns Policy </Link>
              </li>
              <li>
                <Link> Accessibility </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Locations & Services </h4>
            <ul>
              <li>
                <Link>Find a Warehouse </Link>
              </li>
              <li>
                <Link>Locations Coming Soon </Link>
              </li>
              <li>
                <Link>Hours and Holiday Closures</Link>
              </li>
              <li>
                <Link>Gasoline</Link>
              </li>
              <li>
                <Link>Hearing Aid Center</Link>
              </li>
              <li>
                <Link>Optical</Link>
              </li>
              <li>
                <Link>Special Events </Link>
              </li>
              <li>
                <Link>CostcoGrocery </Link>
              </li>
              <li>
                <Link>Grocery by Instacart </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerGroupTwo">
          <div className="footerLinksTwo">
            <ul>
              <li>
                <Link>Site Map </Link>
              </li>
              <li>
                <Link>Terms and Conditions </Link>
              </li>
              <li>
                <Link>Your Privacy Rights</Link>
              </li>
              <li>
                <Link>CA Notice</Link>
              </li>
              <li>
                <Link>Cookie Settings</Link>
              </li>
              <li className="ccpa">
                <Link>
                  <span>
                    <img
                      src={ccpa}
                      alt="iconCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon"
                    />
                  </span>
                  <span>Your Privacy Choices</span>
                </Link>
              </li>
              <li>
                <Link>Consumer Health Data </Link>
              </li>
              <li>
                <Link>Feedback </Link>
              </li>
            </ul>
          </div>
          <div className="footerLastSection">
            <p>
              &copy;1998 - 2024 Costco Wholesale Corporation.All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
