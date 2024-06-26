import React from "react";
import { Link } from "react-router-dom";
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
            <input type="search" name="" id="" />
            <i>search icon</i>
          </div>
          <ul>
            <li>
              <Link> Sign In / Register </Link>
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
          <div>
            <div>
              <p>My Warehouse</p>
              <h3>
                <span>
                  <img src="" alt="Location Icon" />
                </span>
                Seattle
              </h3>
            </div>
            <div>
              <p>Delivery Location</p>
              <h3>
                <span>
                  <img src="" alt="Delivery Icon" />
                </span>
                98101
              </h3>
            </div>
          </div>
          <div className="navSecondGroupLink">
            <li>
              <Link>Lists /</Link>
            </li>
            <li>
              <Link>Buy Again</Link>
            </li>
          </div>
        </div>
        <p>Closed: Open 10:00 AM Wednesday</p>
      </div>
    </>
  );
};

export default Navbar;
