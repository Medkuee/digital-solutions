import React from "react";
import "./Partnerships.css";
import APU from "../images/APU.png";
import Baganuur from "../images/Baganuur.png";
import Bogd from "../images/Bogd Khaan museum.png";
import FW from "../images/FW Media.png";
import Iwate from "../images/Iwate Univesity.png";
import Logarithm from "../images/Logarithm School.png";
import Mjeed from "../images/MJEED.png";
import NTM from "../images/NTM.png";
import NUM from "../images/NUM.png";
import Orchlon from "../images/Orchlon.png";
import Oyu from "../images/Oyu tolgoi.png";
import Rio from "../images/Rio Tinto.png";
import Sharyn from "../images/Sharyn gol.png";
import Soyoliin from "../images/Soyoliin uw.png";
import Ulaanbaatar from "../images/Ulaanbaatar tumur zam.png";
import Zanabazar from "../images/Zanabazar.png";
import Ocurus from "../images/Ocurus.png";
import Andorean from "../images/andorean.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

function Partnerships({ width }) {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  if (width < 1400) {
    return (
      <div className="partnerships" id="partnerships">
        <div className="partnerships__partnerships">
          <Fade top delay={300}>
            <div className="partnerships__header">
              <h3 className="partnerships__h3">PARTNERSHIPS</h3>
              <h2 className="partnerships__h2">WHO DO WE WORK WITH?</h2>
            </div>
          </Fade>
          <RubberBand delay={300}>
            <div className="partnerships__logos">
              <Slider {...setting} className="our__slider">
                <div className="partnerships__logo">
                  <img className="partnerships__img" src={APU} alt="" />
                </div>
                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Andorean}
                    alt=""
                    style={{ width: "110%" }}
                  />
                </div>

                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Ulaanbaatar}
                    alt=""
                    style={{ width: "110%" }}
                  />
                </div>

                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Iwate}
                    alt=""
                    style={{ width: "110%" }}
                  />
                </div>
                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={FW}
                    alt=""
                    style={{ width: "110%" }}
                  />
                </div>
                <div className="partnerships__logo">
                  <img className="partnerships__img" src={Logarithm} alt="" />
                </div>
                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Soyoliin}
                    alt=""
                    style={{ width: "80%" }}
                  />
                </div>

                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Sharyn}
                    alt=""
                    style={{ width: "85%" }}
                  />
                </div>
                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Bogd}
                    alt=""
                    style={{ width: "70%" }}
                  />
                </div>
                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Orchlon}
                    alt=""
                    style={{ width: "50%" }}
                  />
                </div>

                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={NUM}
                    alt=""
                    style={{ width: "85%" }}
                  />
                </div>

                <div className="partnerships__logo">
                  <img className="partnerships__img" src={Oyu} alt="" />
                </div>
                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Rio}
                    alt=""
                    style={{ width: "95%" }}
                  />
                </div>

                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Mjeed}
                    alt=""
                    style={{ width: "85%" }}
                  />
                </div>

                <div className="partnerships__logo">
                  <img className="partnerships__img" src={NTM} alt="" />
                </div>

                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Zanabazar}
                    alt=""
                    style={{ width: "90%" }}
                  />
                </div>
                <div className="partnerships__logo">
                  <img className="partnerships__img" src={Ocurus} alt="" />
                </div>
                <div className="partnerships__logo">
                  <img
                    className="partnerships__img"
                    src={Baganuur}
                    alt=""
                    style={{ width: "85%" }}
                  />
                </div>
              </Slider>
            </div>
          </RubberBand>
        </div>
      </div>
    );
  }

  return (
    <div className="partnerships" id="partnerships">
      <div className="partnerships__partnerships">
        <Fade top delay={300}>
          <div className="partnerships__header">
            <h3 className="partnerships__h3">PARTNERSHIPS</h3>
            <h2 className="partnerships__h2">WHO DO WE WORK WITH?</h2>
          </div>
        </Fade>

        <RubberBand delay={300}>
          <div className="partnerships__logos">
            <div className="partnerships__logo">
              <img className="partnerships__img" src={APU} alt="" />
            </div>
            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Andorean}
                alt=""
                style={{ width: "110%" }}
              />
            </div>

            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Ulaanbaatar}
                alt=""
                style={{ width: "110%" }}
              />
            </div>

            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Iwate}
                alt=""
                style={{ width: "110%" }}
              />
            </div>
            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={FW}
                alt=""
                style={{ width: "110%" }}
              />
            </div>
            <div className="partnerships__logo">
              <img className="partnerships__img" src={Logarithm} alt="" />
            </div>
            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Soyoliin}
                alt=""
                style={{ width: "80%" }}
              />
            </div>

            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Sharyn}
                alt=""
                style={{ width: "85%" }}
              />
            </div>
            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Bogd}
                alt=""
                style={{ width: "70%" }}
              />
            </div>
            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Orchlon}
                alt=""
                style={{ width: "50%" }}
              />
            </div>

            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={NUM}
                alt=""
                style={{ width: "85%" }}
              />
            </div>

            <div className="partnerships__logo">
              <img className="partnerships__img" src={Oyu} alt="" />
            </div>
            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Rio}
                alt=""
                style={{ width: "95%" }}
              />
            </div>

            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Mjeed}
                alt=""
                style={{ width: "85%" }}
              />
            </div>

            <div className="partnerships__logo">
              <img className="partnerships__img" src={NTM} alt="" />
            </div>

            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Zanabazar}
                alt=""
                style={{ width: "90%" }}
              />
            </div>
            <div className="partnerships__logo">
              <img className="partnerships__img" src={Ocurus} alt="" />
            </div>
            <div className="partnerships__logo">
              <img
                className="partnerships__img"
                src={Baganuur}
                alt=""
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </RubberBand>
      </div>
    </div>
  );
}

export default Partnerships;
