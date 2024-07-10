import React from "react";

import "../css/productDetail.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoArrowRedoSharp, IoStarSharp } from "react-icons/io5";
import { FaPrint, FaSearch, FaStar, FaTruck } from "react-icons/fa";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { TfiMenuAlt } from "react-icons/tfi";
import img1 from "../asset/productPreview.png";
import img2 from "../asset/mini1.png";
import img3 from "../asset/mini2.png";
import img4 from "../asset/block1.png";
import img5 from "../asset/block2.png";
import img6 from "../asset/block3.png";
import card1 from "../asset/bbySecCard5.png";
import card2 from "../asset/bbySecCard4.png";
import card3 from "../asset/bbySecCard6.png";
import card4 from "../asset/bbySecCard7.png";
import { MdStars } from "react-icons/md";
import img7 from "../asset/costco40.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
              <div className="delivery1Div">
                <FaTruck />
                <p>
                  <strong>Estimated Friday, July 12</strong> if orderd now.
                  <br />
                  Delivery ZIP Code: <strong>98101</strong> <span>Change</span>
                </p>
              </div>
              <div className="delivery1span">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
            <div className="deliverySec">
              <strong>Same-Day Delivery</strong>
              <div>
                <img src={img7} alt="" />
                <p>
                  {" "}
                  <strong> Prices</strong> and <strong>Availability</strong>{" "}
                  Will Vary
                </p>
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
              <li>
                <AnchorLink href="#productDetailsMain">
                  Product Details
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#specifications">Specifications</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#shippingAndReturns">
                  Shipping & Returns
                </AnchorLink>
              </li>
              <li>
                <AnchorLink href="#aboutSecTwoContainer">Reviews</AnchorLink>
              </li>
            </ul>
          </div>

          <div className="aboutContainer">
            <div className="aboutSecOneContainer">
              <div className="textContainer">
                <div className="productDetailsMain" id="productDetailsMain">
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

                <div className="specifications" id="specifications">
                  <h4>Specifications</h4>
                  <div className="specificationFirstRow">
                    <div>Brand</div>
                    <div>Kirkland Signature</div>
                  </div>
                  <div className="specificationSecondRow">
                    <div>Quantity</div>
                    <div>900 Count(s)</div>
                  </div>
                </div>
                <div className="shippingAndReturns" id="shippingAndReturns">
                  <h4>Shipping & Returns</h4>
                  <p>
                    If you’re not completely satisfied with this Kirkland
                    Signature product, your money will be refunded.
                  </p>
                  <p>
                    Standard shipping via UPS Ground is included in the quoted
                    price.
                  </p>
                  <p>Express shipping is via UPS.</p>
                  <p>Please choose your shipping method at checkout.</p>
                  <p>
                    An additional Shipping and Handling fee will apply to
                    express shipments. This fee will be quoted at checkout.
                  </p>
                  <p>
                    *Delivery is available to Alaska, Hawaii and Puerto Rico;
                    however, an additional Shipping and Handling fee will apply.
                    This fee will be quoted at checkout. Additional transit time
                    may also be required.
                  </p>
                </div>
              </div>
              <div className="imgContainer">
                <div>
                  <h3>Members also brought</h3>
                  <img src={img4} alt="" />
                  <small>$169.99</small> <br />
                  <Link>Hisense 43" Class - A45H Series - 1080p LED TV</Link>
                </div>

                <div>
                  <img src={img5} alt="" />
                  <small>$799.99</small> <br />
                  <Link>
                    Sony 65" Class - BRAVIA 3 Series - 4K UHD LED LCD TV
                  </Link>
                </div>

                <div>
                  <img src={img6} alt="" />
                  <small>$89.99 </small> <br />
                  <Link>Sanus Home 42"- 86" Full Motion TV Mount</Link>
                </div>
              </div>
            </div>

            <div className="aboutSecTwoContainer" id="aboutSecTwoContainer">
              <div className="reviewsContainer">
                <h4>Reviews</h4>
                <div>
                  <p>
                    <IoStarSharp /> <IoStarSharp /> <IoStarSharp />{" "}
                    <IoStarSharp />
                    <IoStarSharp />
                  </p>
                  <p>4.8 </p> | <p>10214 Reviews</p>
                </div>
                <hr />

                <InputGroup className="mb-3 reviewSearch">
                  <Form.Control
                    placeholder="
Search topics and reviews"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    variant="outline-secondary secondary"
                    id="button-addon2"
                    className="reviewButton"
                  >
                    <span className="reviewSearch">
                      <FaSearch />
                    </span>
                  </Button>
                </InputGroup>
                <hr />
              </div>

              <div>
                <div className="reviewButtonSec">
                  <p>Reviews</p> <Button>Write a review</Button>
                </div>

                <div className="ratingSnapshot">
                  <div>
                    <p>Rating Snapshot</p>
                    <p>Select a row below to filter reviews</p>
                    {/* <p>
                      <span>5 </span>
                      <span>
                        <FaStar />
                      </span>
                      <span> 9050</span>
                    </p> */}
                    <div>
                      <p>
                        5<FaStar className="mt-1" />
                      </p>
                      <span className="histogramSpan">
                        <span className="histogram"></span>
                        <span className="histogram2"></span>
                      </span>
                      <div> 9050</div>
                    </div>

                    <div>
                      <p>
                        4<FaStar className="mt-1" />
                      </p>
                      <span className="histogramSpan">
                        <span className="histogram3"></span>
                        <span className="histogram2"></span>
                      </span>
                      <div> 625</div>
                    </div>

                    <div>
                      <p>
                        3<FaStar className="mt-1" />
                      </p>
                      <span className="histogramSpan">
                        <span className="histogram4"></span>
                        <span className="histogram2"></span>
                      </span>
                      <div> 207</div>
                    </div>

                    <div>
                      <p>
                        2<FaStar className="mt-1" />
                      </p>
                      <span className="histogramSpan">
                        <span className="histogram5"></span>
                        <span className="histogram2"></span>
                      </span>
                      <div> 95</div>
                    </div>

                    <div>
                      <p>
                        1<FaStar className="mt-1" />
                      </p>
                      <span className="histogramSpan">
                        <span className="histogram6"></span>
                        <span className="histogram2"></span>
                      </span>
                      <div> 248</div>
                    </div>
                  </div>
                  <div>
                    <p>Average Customer Ratings</p>
                    <p>
                      Overall
                      <span>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      </span>
                      <span>4.8</span>
                    </p>
                  </div>
                </div>

                <div className="reviewMainText">
                  <div>
                    <h5>Most Helpful Favourable Review</h5>
                    <div className="verifiedPurchasers">
                      <p>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      </p>

                      <p>
                        <MdStars /> Verified Purchaser
                      </p>
                    </div>
                    <p>Carol · 3 years ago</p>{" "}
                    <p>Excellent for many reasons!</p>
                  </div>

                  <div>
                    <h5>Most Helpful Critical Review</h5>
                    <div className="verifiedPurchasers">
                      <p>
                        <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                      </p>

                      <p>
                        <MdStars /> Verified Purchaser
                      </p>
                    </div>
                    <p>Meghan22 · 3 years ago</p>
                    <p>Bring back the previous version. These are AWFUL</p>
                  </div>
                </div>

                <Button className="customizedBtn">View More</Button>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div className="cardCarouselSection">
          <Card className="cardCarouselContainer">
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title className="cardTitle">$21.99</Card.Title>
              <Link variant="primary">
                Kirkland Signature Scented Baby Wipes 900-Count
              </Link>
            </Card.Body>
          </Card>

          <Card className="cardCarouselContainer">
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title className="cardTitle">$22.99</Card.Title>
              <Link variant="primary">RICO Baby Wipes 720-count</Link>
            </Card.Body>
          </Card>

          <Card className="cardCarouselContainer">
            <Card.Img variant="top" src={card4} />
            <Card.Body>
              <Card.Title className="cardTitle">$39.99</Card.Title>
              <Link variant="primary">Huggies Plus Diapers Size Newborn</Link>
            </Card.Body>
          </Card>

          <Card className="cardCarouselContainer">
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Text>Start at</Card.Text>
              <Card.Title className="cardTitle">$44.99</Card.Title>
              <Card.Text>Free Shipping*</Card.Text>
              <Link variant="primary">
                Kirkland Signature Diapers Sizes 3-6
              </Link>
            </Card.Body>
          </Card>

          <Card className="cardCarouselContainer">
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Text>Starting at</Card.Text>
              <Card.Title className="cardTitle">$34.99</Card.Title>
              <Card.Text>Free Shipping*</Card.Text>
              <Link variant="primary">
                Kirkland Signature Diapers Sizes 1-2
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
