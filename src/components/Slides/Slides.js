import React from "react";
import { Carousel } from "react-bootstrap";
import banner2 from "../../images/1.jpg";
import banner3 from "../../images/2.jpg";
import banner4 from "../../images/3.jpg";
import banner5 from "../../images/4.jpg";
import banner6 from "../../images/5.jpg";
import Search from "../Home/Search/Search";
import "./Slides.css";

const Slides = () => {
  return (
    <div>
      <Carousel className="banner overflow-auto  ">
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 " src={banner6} alt="First slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-96 opacity-70">Summer Vacation</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={banner2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-96 opacity-70">Autumn Vacation</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-96 opacity-70">Winter Vacation</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner4} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-96 opacity-70">
              Explore Beautiful France Vacation
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 " src={banner5} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="text-8xl mb-96 opacity-70">Colorado Explore </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Search></Search>
    </div>
  );
};

export default Slides;
