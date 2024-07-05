import React from "react";
import card1 from "../asset/cardCarousel1.png";
import card2 from "../asset/cardCarousel2.png";
import { Link } from "react-router-dom";
import "../css/cardCarousel.css";

import Card from "react-bootstrap/Card";
const SingleCard = () => {
  return (
    <div className="cardCarouselSection">
      <Card className="cardCarouselContainer">
        <Card.Img variant="top" src={card2} />
        <Card.Body>
          <Card.Text>Start at</Card.Text>
          <Card.Title className="cardTitle">$16.99</Card.Title>
          <Link variant="primary">
            Gloria Vanderbilt Ladies' Utility Short Pink Small
          </Link>
        </Card.Body>
      </Card>

      <Card className="cardCarouselContainer">
        <Card.Img variant="top" src={card1} />
        <Card.Body>
          <Card.Title className="cardTitle">$269.99</Card.Title>
          <Card.Text>Price valid through 7/21/24</Card.Text>
          <Link variant="primary">
            Hisense 55" Class - QD6 Series - 4K UHD QLED LCD TV
          </Link>
        </Card.Body>
      </Card>

      <Card className="cardCarouselContainer">
        <Card.Img variant="top" src={card1} />
        <Card.Body>
          <Card.Title className="cardTitle">$499.99</Card.Title>
          <Link variant="primary">
            Hisense 65" Class - A65K Series - 4K UHD LED LCD TV
          </Link>
        </Card.Body>
      </Card>

      <Card className="cardCarouselContainer">
        <Card.Img variant="top" src={card1} />
        <Card.Body>
          <Card.Title className="cardTitle">$479.99</Card.Title>
          <Card.Text>Price valid through 7/8/24</Card.Text>
          <Link variant="primary">
            Hisense 65" Class - A65K Series - 4K UHD LED LCD TV
          </Link>
        </Card.Body>
      </Card>

      <Card className="cardCarouselContainer">
        <Card.Img variant="top" src={card2} />
        <Card.Body>
          <Card.Text>Start at</Card.Text>
          <Card.Title className="cardTitle">$14.99</Card.Title>
          <Card.Text>$$ OFF</Card.Text>
          <Link variant="primary">Banana Republic Ladies' Chino Short</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleCard;
