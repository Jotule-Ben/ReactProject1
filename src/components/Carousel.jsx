// import { useState } from "react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel1 from "../asset/carousel1.png";
import Carousel2 from "../asset/carousel1.jpg";
import Carousel3 from "../asset/carousel2.png";
import Carousel4 from "../asset/carousel3.png";
import Carousel5 from "../asset/carousel4.png";
import Carousel6 from "../asset/carousel5.png";
import Carousel7 from "../asset/carousel7.png";
import Carousel8 from "../asset/carousel8.png";
// import Carousel9 from "../asset/carousel9.png";
// import Carousel10 from "../asset/carousel5.png";
// import Carousel11 from "../asset/carousel5.png";
import "../css/carousel.css";

const CarouselFuntion = () => {
  return (
    <Carousel data-bs-theme="dark" className="carouselSec">
      <Carousel.Item>
        <img className="d-block w-100" src={Carousel1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel8} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel7} alt="fourth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel5} alt="fifth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel6} alt="sixth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel3} alt="seventh slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel4} alt="eight slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel3} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel2} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Carousel5} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselFuntion;
