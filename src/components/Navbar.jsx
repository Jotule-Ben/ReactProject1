import React from "react";
import { Link } from "react-router-dom";
import "../css/nav.css";

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
          <img src="" alt="Logo" />
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
                <span></span>Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
