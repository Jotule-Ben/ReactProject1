import React from "react";
import "../css/productDetail.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoArrowRedoSharp, IoStarSharp } from "react-icons/io5";
import { FaPrint, FaTruck } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { TfiMenuAlt } from "react-icons/tfi";
import img1 from "../asset/productPreview.png";
import img2 from "../asset/mini1.png";
import img3 from "../asset/mini2.png";
import img4 from "../asset/block1.png";
import img5 from "../asset/block2.png";
import img6 from "../asset/block3.png";
// import img7 from "../asset/costco40.svg";

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
            <div className="ratingSec">
              <p>
                <IoStarSharp /> <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
                <IoStarSharp />
              </p>
              <p>4.8 (10188) </p>
              <p>Write a review</p>
            </div>
            <div className="price">
              <h6>Your Price</h6>
              <h6>$--.--</h6>
            </div>
            <small>Price Per EACH: $-.- -</small> <br />
            <small>Shipping & Handling Included*</small> <br /> <br />
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
            <div className="print">
              <p>
                <IoArrowRedoSharp /> Share
              </p>
              <p>
                <FaPrint /> Print
              </p>
            </div>
            <div className="deliverySec delivery1">
              <strong>Delivery</strong>
            </div>
            <div className="deliverySec">
              <strong>Same-Day Delivery</strong>
              <div>
                <img src="{img6}" alt="" />
                <p>Prices and Availability Will Vary</p>
              </div>
              <Button>Shop Same-Day Now</Button>
            </div>
            <Button className="addbtn">
              <TfiMenuAlt /> Add to List
            </Button>
            <input type="checkbox" /> <span> Compare Product</span>
          </div>
        </div>

        <div className="stickyNav">
          <div className="stickyNavSec1">
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <strong>
                Kirkland Signature Baby Wipes Fragrance Free, 900-count
              </strong>
              <div className="ratingSec2">
                <p>
                  <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
                  <IoStarSharp />
                  <IoStarSharp />
                </p>
                <p>4.8 (10188) </p>
                <p>Write a review</p>
              </div>
            </div>
          </div>
          <div className="stickyNavSec2">
            <p>$21.99</p>
            <div className="stickyNavAddToCartBtn">
              <span>-</span> <span>1</span> <span>+</span>
              <Button variant="primary">Add</Button>
            </div>
          </div>
        </div>

        <div>
          <div className="fixedSec">
            <ul>
              <li>Product Details</li>
              <li>Specifications</li>
              <li>Shipping & Returns</li>
              <li>Reviews</li>
            </ul>
          </div>

          <div className="aboutContainer">
            <div className="aboutSecOneContainer">
              <div>
                <div className="productDetailsMain">
                  <div className="productDetailsSub">
                    <h4>Product Details</h4>
                    <small>
                      Item may be available in your local warehouse for a lower,
                      non-delivered price.
                    </small>{" "}
                    <br />
                    <small>Limit 3 Per Membership</small> <br />
                    <small>
                      Product details have been supplied by the manufacturer and
                      are hosted by a third party.
                    </small>
                    <h4>Overview</h4>
                    <div className="videoContainer">
                      <p>
                        Kirkland Signature™ Baby Wipes are quality-made. The
                        wipes are thick and made with purified water for a
                        gentle clean. The naturally derived ingredient formula
                        is clinically proven to help moisturize skin which helps
                        maintain healthy skin. The formula is gentle enough for
                        sensitive, eczema and eczema-prone skin.
                      </p>
                      <p>
                        Kirkland Signature Baby Wipes are made with soft fibers
                        that are derived from trees grown in environmentally
                        managed forests and made into plant-based material in an
                        eco-responsible manner. Kirkland Signature Baby Wipe
                        cartons and flip-top lids are made of recyclable
                        material.
                      </p>
                    </div>
                  </div>
                  <div className="viewMoreDetails">
                    <h4>Details</h4>
                    <button>View More</button>
                  </div>
                </div>

                <div className="specifications">
                  <h4>Specifications</h4>
                </div>
              </div>
              <div className="imgContainer"></div>
            </div>

            <div className="aboutSecTwoContainer">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
