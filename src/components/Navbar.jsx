import React from "react";
import { Link } from "react-router-dom";
import { Form, InputGroup, Button } from "react-bootstrap";
import "../css/nav.css";
import costcologo from "../asset/costcoLogo.png";

const Navbar = () => {
  return (
    <>
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
            <li>
              <Link> US </Link>
            </li>
            <li>
              <i class="fa fa-angle-down" aria-hidden="true">
                Angle Down
              </i>
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
                <img src="" alt="search icon" />
              </Button>
            </InputGroup>
          </div>
          <ul>
            <li>
              <Link to="/signin"> Sign In / Register </Link>
            </li>
            <li>
              <Link> Orders & Returns </Link>
            </li>
            <li>
              <Link>
                <span>
                  <img src="" alt="cart_icon" />
                </span>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="navLinkThirdGroup">
        <ul>
          <li>
            <Link>
              <span>
                <img src="" alt="Humbuger Icon" />
              </span>
              Shop
            </Link>
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
                <span>
                  <img src="" alt="Location Icon" />
                </span>
                Seattle
              </h4>
            </div>
            <div>
              <p>Delivery Location</p>
              <h4>
                <span>
                  <img src="" alt="Delivery Icon" />
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
    </>
  );
};

export default Navbar;
