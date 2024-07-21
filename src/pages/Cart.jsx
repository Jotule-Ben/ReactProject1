import React from "react";
import "../css/cart.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="cartflextitle">
          <h1>
            Cart <span>(2 items)</span>
          </h1>

          <hr />
        </div>

        <Row className="cartFlexContainer">
          <Col xs={12} md={8}>
            <div className="cartPreview">
              <div className="cartPreviewImage">
                <img
                  src="https://www.costco.com/CheckoutCartDisplayView?catalogId=10701&storeId=10301&langId=-1&krypto=UJdXxlV%2F7LV3nsxYowCgVuFqhbMhyQbtquMDwm5JiIk9pd%2B6l8f2AvMK3phoDDJq1%2FB8E2e%2BNGMxmOc6t7ERN6vX0oquJOxqdXo9H8HJ%2Bzg%3D&ddkey=http%3ACheckoutCartView"
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="cartBlockSec">
                <p>Kirkland Signature Baby Wipes Fragrance Free, 900-count </p>
                <p>Item 1493488 </p>
                <p>$21.99</p>
                <div className="cartQuantityFlex">
                  <div className="cartQuantity">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                  </div>
                  <div>
                    <p>Total</p>
                    <p>$21.99</p>
                  </div>
                </div>
                <br />
                <Link>Remove</Link>
              </div>
              <div className="shippingSection">
                <div className="shippingSection1">
                  <strong>Standard : Shipping & Handling Included</strong>
                  <p>Estimated Delivery</p>
                  <strong>Wednesday, July 24,2024</strong>
                </div>
                <div className="shippingSection2">
                  <p>Express 1 to 2 Business Days : $20.50</p>
                  <small>Estimated Delivery</small>
                  <br />
                  <strong>Tuesday, July 23,2024</strong>
                </div>
                <Link>Delivery Details</Link>
                <div>
                  <Link>Add to List </Link> | <Link> Save for Later</Link>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={6} md={4}>
            {" "}
            <div className="productPreviewTextTwo">
              <div className="earnSection">
                <div className="earnFlex">
                  <img
                    src="https://www.costco.com/wcsstore/CostcoUSBCCatalogAssetStore/Attachment/costco-citi-visa-credit-card.png"
                    alt=""
                    style={{ width: "100px", height: "50px" }}
                  />
                  <Link>
                    EARN 2% CASH BACK REWARDS at Costco warehouses or at
                    Costco.com with the Costco Anywhere Visa® Card by Citi
                  </Link>
                </div>
                <div className="earnBlock">
                  <p>
                    4% on eligible gas and EV charging for the first $7,000 per
                    year, then 1% thereafter{" "}
                  </p>
                  <p>3% on restaurants and eligible travel </p>
                  <p>1% on everything else</p>
                </div>
                <div>
                  <button>
                    <Link>Apply Today</Link>
                  </button>
                </div>
              </div>
              <div className="subtotal">
                <div className="subtotalSec1">
                  <div>
                    <p>Subtotal</p>
                    <p>$441.98</p>
                  </div>
                  <div>
                    <p>
                      Shipping & Handling for <br /> <Link>98101</Link>
                    </p>
                    <p>$0.00</p>
                  </div>
                </div>
                <div className="subtotalSec2">
                  <div>
                    <p>Estimated Total</p> <p>$441.98</p>
                  </div>
                  <p>Applicable taxes will be calculated at checkout.</p>
                </div>
                <button>Checkout</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
