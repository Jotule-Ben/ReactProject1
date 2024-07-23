import React, { useContext } from "react";
import "../css/cart.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import image from "../asset/cartLastImage.png";

const Cart = () => {
  const { cart, removeFromCart, incrementQty, decrementQty, getTotalPrice } =
    useContext(Context);
  return (
    <>
      <Navbar />
      <Container fluid className="cartPage">
        <div className="cartflextitle">
          <h1>
            Cart <span>({cart.length}Items)</span>
          </h1>

          <hr />
        </div>

        {cart.length === 0 ? (
          <h2>Cart Is Empty</h2>
        ) : (
          <>
            <Row className="cartFlexContainer">
              <Col xs={12} md={8}>
                {cart.map((item) => (
                  <div className="cartPreview" key={item.id}>
                    <div className="cartPreviewImage mx-2">
                      <Image
                        src={item.image}
                        // src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt={item.title}
                        className="rounded"
                        width="200px"
                        margin-right
                      />
                    </div>
                    <div className="cartBlockSec">
                      <p>
                        Kirkland Signature Baby Wipes Fragrance Free, 900-count{" "}
                      </p>
                      <p>Item 1493488 </p>
                      <p>${item.price}</p>
                      <div className="cartQuantityFlex">
                        <div className="cartQuantity">
                          <span onClick={() => decrementQty(item.id)}>-</span>
                          <span>{item.quantity}</span>
                          <span onClick={() => incrementQty(item.id)}>+</span>
                        </div>
                        <div>
                          <p>Total</p>
                          <p>
                            $
                            {parseFloat(item.price.replace(/,/g, "")) *
                              parseInt(item.quantity)}
                          </p>
                        </div>
                      </div>
                      <br />
                      <Link onClick={() => removeFromCart(item.id)}>
                        Remove
                      </Link>
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
                ))}
                <img
                  src={image}
                  alt=""
                  style={{ width: "885px", height: "190px" }}
                />
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
                        4% on eligible gas and EV charging for the first $7,000
                        per year, then 1% thereafter{" "}
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
                        <p>${getTotalPrice()}</p>
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
                        <p>Estimated Total</p> <p>${getTotalPrice()}</p>
                      </div>
                      <p>Applicable taxes will be calculated at checkout.</p>
                    </div>
                    <button>Checkout</button>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
