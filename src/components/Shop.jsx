import React from "react";
import "../css/shop.css";
import { Link } from "react-router-dom";
import banner from "../asset/BbyHeroImg.png";
import card1 from "../asset/bbyCard1.png";
import card2 from "../asset/bbyCard2.png";
import card3 from "../asset/bbyCard3.png";
import card4 from "../asset/bbyCard4.png";
import card5 from "../asset/bbyCard5.png";
import card6 from "../asset/bbySecCard1.png";
import card7 from "../asset/bbySecCard2.png";
import card8 from "../asset/bbySecCard3.png";
import card9 from "../asset/bbySecCard4.png";
import mushie from "../asset/mushie.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { IoGridSharp, IoMenuSharp } from "react-icons/io5";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa6";
import { TfiAngleRight } from "react-icons/tfi";

const Shop = () => {
  return (
    <>
      <Navbar />
      <div className="shop">
        <p>
          <Link to="/">Home</Link> / Baby
        </p>

        <h3>Baby</h3>

        <div className="bbyHero">
          <img src={banner} alt="" />
        </div>

        <div>
          <h5>Shop by category</h5>
          <div className="cardSection">
            <div>
              <img src={card1} alt="" />
              <p>Baby Care & Safety</p>
            </div>
            <div>
              <img src={card2} alt="" />
              <p>Baby diapers, Wipes & training pants</p>
            </div>
            <div>
              <img src={card3} alt="" />
              <p>Baby formula & feeding</p>
            </div>
            <div>
              <img src={card4} alt="" />
              <p>Nusery & baby furniture</p>
            </div>
            <div>
              <img src={card5} alt="" />
              <p>Clothing for babies</p>
            </div>
          </div>
        </div>

        <div>
          <h5>Shop costco next - buy direct from select costco suppliers</h5>
          <img src={mushie} alt="" />
          <p>mushie</p>
        </div>

        <div className="sort">
          <div>
            <div>
              <span>Sort by: </span>{" "}
              <select>
                <option>Best Match</option>
                <option>Price (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Ratings (High to Low)</option>
                <option>Newest</option>
                <option>Most Viewed</option>
              </select>
            </div>
            <div className="sortBtn">
              <button>
                Delivery <span>&times;</span>
              </button>
              <button>
                Show Out of Stock Items <span>&times;</span>
              </button>
            </div>
          </div>
          <div className="toggle">
            <p>
              <IoGridSharp className="IoGridSharp" />
            </p>
            <p>
              <IoMenuSharp className="IoMenuSharp" />
            </p>

            <h6>Showing 1-24 of 43</h6>
          </div>
        </div>

        <div className="cardContainer">
          <div className="cardsec">
            <Card className="cardContent">
              <Card.Img variant="top" src={card6} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>
                  Kirkland signature baby wipes fragrance free, 900-count
                </Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (10140)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <span>-</span> <span>1</span> <span>+</span>
                  <Button variant="primary">Add</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card7} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>Kirkland signature Diapers Sizes 3-6</Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (19834)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Select Options</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card8} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>
                  Kirkland Signature ProCare with Dual HMO's, Non-GMO Infant
                  Formula 42 oz, 2-pack
                </Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (2748)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Sign In for Details</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card9} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>Kirkland signature Diapers Sizes 1-2</Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (4898)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Select Options</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card6} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>
                  Kirkland signature baby wipes fragrance free, 900-count
                </Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (10140)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <span>-</span> <span>1</span> <span>+</span>
                  <Button variant="primary">Add</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card7} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>Kirkland signature Diapers Sizes 3-6</Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (19834)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Select Options</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card8} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>
                  Kirkland Signature ProCare with Dual HMO's, Non-GMO Infant
                  Formula 42 oz, 2-pack
                </Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (2748)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Sign In for Details</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card9} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>Kirkland signature Diapers Sizes 1-2</Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (4898)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Select Options</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card6} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>
                  Kirkland signature baby wipes fragrance free, 900-count
                </Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (10140)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <span>-</span> <span>1</span> <span>+</span>
                  <Button variant="primary">Add</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card7} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>Kirkland signature Diapers Sizes 3-6</Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (19834)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Select Options</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card8} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>
                  Kirkland Signature ProCare with Dual HMO's, Non-GMO Infant
                  Formula 42 oz, 2-pack
                </Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (2748)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Sign In for Details</Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="cardContent">
              <Card.Img variant="top" src={card9} />
              <Card.Body>
                <Card.Title>$21.99</Card.Title>
                <Link>Kirkland signature Diapers Sizes 1-2</Link>
                <br />
                <Link>
                  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  (4898)
                </Link>
                <Card.Text>Delivery Available</Card.Text>
                <p>
                  {" "}
                  <input type="checkbox" />
                  <span>Compare Product</span>
                </p>
                <div className="cardFooter">
                  <Button variant="primary">Select Options</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="cardSecFooter">
            <div className="cardFooterPagination">
              <p>1</p>
              <p>2</p>
              <p>
                <TfiAngleRight />
              </p>
            </div>
            <div>
              <Link>Back To Top</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
