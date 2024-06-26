import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerGroupOne">
          <div>
            <h3>Customer Service</h3>
            <p>
              <span>
                <img src="" alt="question mark icon" />
              </span>{" "}
              Get Help
            </p>
          </div>

          <div>
            <h3>Find a Warehouse</h3>
            <div>
              {" "}
              {/* <input type="search" placeholder="City, state or zip" /> */}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  <span>
                    <img src="" alt="search icon" />
                  </span>
                </Button>
              </InputGroup>
            </div>
          </div>

          <div>
            <h3>Get Email Offers</h3>
            <div>
              {/* <input type="email" placeholder="Enter your email" /> */}
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="outline-secondary" id="button-addon2">
                  Go
                </Button>
              </InputGroup>
            </div>
          </div>

          <div>
            <h3>Follow Us</h3>
            <div className="media">
              <img src="" alt="fb logo" />
              <img src="" alt="pin interest logo" />
              <img src="" alt="instagram logo" />
            </div>
          </div>

          <div>
            <h3>Get the Costco App</h3>
            <div>
              <img src="" alt="Costco logo" />
            </div>
          </div>
        </div>

        <div className="footerLinks">
          <div>
            <h3>About Us</h3>
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
              <h3>Membership </h3>
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

            <div>
              <h3>Vendors & Suppliers </h3>
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
            <h3>Customer Service </h3>
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
            <h3>Locations & Services </h3>
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

        <div>
          <div>
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
              <li>
                <Link>
                  <img
                    src=""
                    alt="iconCalifornia Consumer Privacy Act (CCPA) Opt-Out Icon"
                  />
                  Your Privacy Choices
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
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
