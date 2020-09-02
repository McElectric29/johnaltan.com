import React from "react";
import Carousel from "react-bootstrap/Carousel";
import animebg from "../../assets/img/carousal/animebg.jpg";
import animebg2 from "../../assets/img/carousal/animebg2.png";
import animebg3 from "../../assets/img/carousal/animebg3.jpg";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators
        interval={4000}
        pauseOnHover={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={animebg}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={animebg3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={animebg2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousal;
