import React from "react";
import "./Products.css";
import { BsArrowRight } from "react-icons/bs";
import Vr from "../images/vr.jpg";
import Simulator from "../images/simulator.jpg";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Products({ width }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  if (width < 680) {
    return (
      <div className="products" id="products">
        <div className="products__grid">
          <Slider {...settings} className="slider__slider">
            <div className="products__card">
              <img src={Vr} alt="" className="products__img" />
              <div className="products__content">
                <h1 className="products__content__header">Virtual Reality</h1>
                <p className="products__content__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  asperiores tenetur cupiditate quam molestias commodi pariatur,
                  harum quaerat maxime cum exercitationem incidunt, animi vitae
                  assumenda! Labore nostrum atque unde sed?
                </p>
                <Link to="/vr" className="products__link">
                  <button className="products__content__btn">
                    Visit
                    <BsArrowRight className="products__icons"></BsArrowRight>
                  </button>
                </Link>
              </div>
            </div>

            <div className="products__card">
              <img src={Simulator} alt="" className="products__img" />
              <div className="products__content">
                <h1 className="products__content__header">Simulator</h1>
                <p className="products__content__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  asperiores tenetur cupiditate quam molestias commodi pariatur,
                  harum quaerat maxime cum exercitationem incidunt, animi vitae
                  assumenda! Labore nostrum atque unde sed?
                </p>
                <Link to="/simulator" className="products__link">
                  <button className="products__content__btn">
                    Visit
                    <BsArrowRight className="products__icons"></BsArrowRight>
                  </button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
  return (
    <div className="products" id="products">
      <div className="products__grid">
        <Fade left>
          <div className="products__card">
            <img src={Vr} alt="" className="products__img" />
            <div className="products__content">
              <h1 className="products__content__header">Virtual Reality</h1>
              <p className="products__content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                asperiores tenetur cupiditate quam molestias commodi pariatur,
                harum quaerat maxime cum exercitationem incidunt, animi vitae
                assumenda! Labore nostrum atque unde sed?
              </p>
              <Link to="/vr" className="products__link">
                <button className="products__content__btn">
                  Visit
                  <BsArrowRight className="products__icons"></BsArrowRight>
                </button>
              </Link>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="products__card">
            <img src={Simulator} alt="" className="products__img" />
            <div className="products__content">
              <h1 className="products__content__header">Simulator</h1>
              <p className="products__content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                asperiores tenetur cupiditate quam molestias commodi pariatur,
                harum quaerat maxime cum exercitationem incidunt, animi vitae
                assumenda! Labore nostrum atque unde sed?
              </p>
              <Link to="/simulator" className="products__link">
                <button className="products__content__btn">
                  Visit
                  <BsArrowRight className="products__icons"></BsArrowRight>
                </button>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Products;
