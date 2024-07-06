import React from "react";
import "../css/productDetail.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoStarSharp } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { TfiMenuAlt } from "react-icons/tfi";
import img1 from "../asset/productPreview.png";
import img2 from "../asset/mini1.png";
import img3 from "../asset/mini2.png";
import img4 from "../asset/block1.png";
import img5 from "../asset/block2.png";
import img6 from "../asset/block3.png";

const ProductDetail = () => {
  return (
    <>
      <Navbar />
      <div className="productDetail">
        <p>
          {" "}
          <Link to="/">Home</Link> / <Link to="/Shop"> Baby</Link> /
          <Link to=""> Baby Diapers, Wipes & Training Pants</Link>
        </p>

        <div className="previewContainer">
          <div className="productPreviewImageContainer">
            <div className="mainImage">
              <img src={img1} alt="" />
              <div className="mainImageSpan mainImageSpan1">
                <span>+</span>
              </div>
              <div className="mainImageSpan">
                <span>-</span>
              </div>
            </div>
            <div className="miniImages">
              <img src={img2} alt="" /> <img src={img3} alt="" />
            </div>
          </div>
          <div className="productPreviewText">
            <h6> Kirkland Signature Baby Wipes Fragrance Free, 900-count</h6>
            <span>Item 14934488</span>
            <div>
              <p>
                <IoStarSharp /> <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
              </p>
              <p>4.8 (10188) </p>
              <p>Write a review</p>
            </div>
            <div>
              <h6>Your Price</h6>
              <h6>$21.99</h6>
            </div>
            <p>
              <em>Shipping & Handling Included*</em>
            </p>
            Features:
            <ul>
              <li>(9) 100 ct Flip-Top Lid Soft Packs</li>
              <li>Hypoallergenic </li>
              <li>Fragrance & Alcohol Free </li>
              <li>Tencel® - The New Age Fiber </li>
              <li>Accepted by the National Eczema Association </li>
              <li>Do Not Flush</li>
            </ul>
          </div>
          <div className="productPreviewTextTwo">
            <div>
              <p>Share</p>
              <p>Print</p>
            </div>
            <div className="delivery">
              <p>Delivery</p>
              <div>
                <div>
                  <FaTruck />
                </div>
                <div>
                  <p>
                    <span>Estimated Wednesday, July 10</span> if ordered now.
                  </p>
                  <p>
                    {" "}
                    Delivery ZIP Code: <strong>98101 </strong>Change
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <span>-</span> <span>1</span> <span>+</span>
                </p>
              </div>
              <Button>Add to Cart</Button>
            </div>
            <div className="delivery">
              <p>Same-Day Delivery</p>
              <div>
                <img src="40" alt="" />
                <p>Prices and Availability Will Vary</p>
              </div>
              <Button>Shop Same-Day Now</Button>
            </div>
            <Button>
              <TfiMenuAlt /> Add to List
            </Button>
            <input type="checkbox" /> <span> Compare Product</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
