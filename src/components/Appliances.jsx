import React from "react";
import { Card } from "react-bootstrap";
import card1 from "../asset/costco52.png";
import card2 from "../asset/costco53.png";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalf } from "react-icons/fa6";

const Appliances = () => {
  return (
    <div className="cardCarouselSection">
      <Card className="cardCarouselContainer appliancesCard">
        <Card.Img variant="top" src={card2} />
        <Card.Body>
          <Card.Text>
            Price includes $350 savings. Price valid through 7/10/24 Spend &
            Save up to $600 and Qualifies for Costco Direct Savings. See Product
            Details
          </Card.Text>
          <Link variant="primary">
            LG 7.3 cu. ft. Ultra Large Capacity Wi-Fi Enabled Rear Control
            ELECTRIC Dryer with EasyLoad Door <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Link>
        </Card.Body>
      </Card>

      <Card className="cardCarouselContainer appliancesCard">
        <Card.Img variant="top" src={card1} />
        <Card.Body>
          <Card.Text>
            Price includes $350 savings Price valid through 7/10/24 Spend & Save
            up to $600 and Qualifies for Costco Direct Savings. See Product
            Details
          </Card.Text>
          <Link variant="primary">
            LG Top Control Wi-Fi Enabled Dishwasher with Dynamic Dry and
            Truesteam
            <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Link>
        </Card.Body>
      </Card>

      <Card className="cardCarouselContainer appliancesCard">
        <Card.Img variant="top" src={card2} />
        <Card.Body>
          <Card.Text>
            Price includes $350 savings. Price valid through 7/10/24 Spend &
            Save up to $600 and Qualifies for Costco Direct Savings. See Product
            Details
          </Card.Text>
          <Link variant="primary">
            LG 7.3 cu. ft. Ultra Large Capacity Wi-Fi Enabled Rear Control
            ELECTRIC Dryer with EasyLoad Door <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Link>
        </Card.Body>
      </Card>

      <Card className="cardCarouselContainer appliancesCard">
        <Card.Img variant="top" src={card1} />
        <Card.Body>
          <Card.Text>
            Price includes $350 savings Price valid through 7/10/24 Spend & Save
            up to $600 and Qualifies for Costco Direct Savings. See Product
            Details
          </Card.Text>
          <Link variant="primary">
            LG Top Control Wi-Fi Enabled Dishwasher with Dynamic Dry and
            Truesteam
            <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </Link>
        </Card.Body>
      </Card>

      <Card className="cardCarouselContainer appliancesCard">
        <Card.Img variant="top" src={card2} />
        <Card.Body>
          <Card.Text>
            Price includes $350 savings. Price valid through 7/10/24 Spend &
            Save up to $600 and Qualifies for Costco Direct Savings. See Product
            Details
          </Card.Text>
          <Link variant="primary">
            LG 7.3 cu. ft. Ultra Large Capacity Wi-Fi Enabled Rear Control
            ELECTRIC Dryer with EasyLoad Door <br />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalf />
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Appliances;
