import React, { useContext } from "react";
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
import { Context } from "../context/Context";

const Shop = () => {
  const { createProduct, addToCart, userId, setSelectedProductId } =
    useContext(Context);

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
            {createProduct.map((product) => (
              <Card className="cardContent" key={product.id}>
                <Link to="/detail">
                  <Card.Img variant="top" src={product.image} />
                </Link>
                <Card.Body>
                  <Card.Title>${product.price}</Card.Title>
                  <Link to="/detail">
                    {/* Kirkland signature baby wipes fragrance free, 900-count */}
                    {product.title}
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
                    <Button
                      variant="primary"
                      // onClick={handleGetProductId(product.id)}
                      // onClick={() => {
                      //   addToCart(product);
                      // }}
                      onClick={() => {
                        addToCart({
                          quantity: 2,
                          user_id: userId,
                          product_id: product.id,
                          has_variation: false,
                        });
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
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

        <div className="moreAbout">
          <h3>Help Your Baby Grow Strong & Healthy</h3>
          <p>
            Good nutrition is essential to your baby’s health and well-being,
            which is why Costco carries only the best
            <Link> baby formula & food</Link> for your little one. We offer a
            variety of infant formulas to suit various dietary needs, all from
            leading brands like Similac, Enfamil, and Pediasure. You’ll find
            infant formulas that are organic, gluten-free, and kosher, and many
            that are formulated for sensitive stomachs. These high-quality baby
            formulas are enriched with vitamins and nutrients to support the
            immune system, as well as help with proper brain and eye
            development. Costco also offers healthy foods and snacks like
            easy-serve food pouches filled with nutritious fruits and
            vegetables, yummy organic snack bars, and vitamin-packed protein
            shakes.
          </p>
        </div>

        <div className="moreAbout">
          <h3>Keep Your Baby Clean & Dry</h3>
          <p>
            Raising a family can be expensive, and economy-sized baby items such
            as
            <Link> baby formula & food</Link> diapers, wipes & training pants,
            are a budget-friendly solution to saving you money. At Costco,
            you’ll find all your favorite baby stuff at exclusive Costco member
            prices. We carry baby wipes in standard and travel packs, diapers in
            every size, and colorful training pants for toddlers. You can also
            stock up on other baby essentials like wipe warmers and Diaper Genie
            refills. Choose from trusted brands like Huggies, Pull-Ups, and
            Pampers. And all the money you save, will make it easier to keep up
            with your growing baby’s needs. So, whether it’s buying beautiful
            new <Link> nursery furniture</Link>or getting the latest and
            greatest kid’s toys, you’ll appreciate all the ways that Costco
            makes your life easier.
          </p>
        </div>

        <div className="moreAbout">
          <h3>Shop Premium Baby Products for Your Car & Home</h3>
          <p>
            Costco has a great selection of baby gear for every stage of
            childhood, from baby carriages to booster seats. You’ll find infant
            car seats and convertible car seat systems with the latest safety
            and comfort features, including sturdy steel-reinforced frames,
            multiple recline positions, plush padding, and 5-point harness
            systems. We have air purifiers to keep your child’s room free from
            germs and allergens, as well as comforting sound machines that will
            soothe your baby to sleep. And for strollers, we carry lightweight
            jogging strollers with high-impact wheels, roomy double strollers,
            and convenient car seat strollers for easy transfers in and out of
            the car.
          </p>
        </div>

        <div className="moreAbout">
          <h3>Monitor Your Baby’s Health & Safety</h3>
          <p>
            As a parent, you want to do everything possible to keep your child
            safe and healthy. That’s why Costco carries high-quality
            <Link> baby care & safety</Link> items for both babies and toddlers.
            We offer the best baby monitor cameras and baby monitoring systems
            on the market, with innovative features like high-resolution HD
            video, night lights, calming sleep sounds, and 2-way audio that lets
            you communicate with your child without even entering their room.
            Many new systems come with WIFI baby monitors and baby monitor apps
            that allow you to use your smartphone to conveniently check in on
            your child from almost anywhere in your home. We even have advanced
            monitoring systems that continuously track your baby’s oxygen level
            and heart rate, and immediately alert you to any sudden changes.
            Being able to quickly and easily check your baby’s vitals will give
            you valuable peace of mind, so you can both sleep better.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
