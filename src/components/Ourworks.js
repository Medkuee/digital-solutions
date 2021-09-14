import React from "react";
import "./Ourworks.css";
import a from "../images/a.png";
import b from "../images/b.png";
import c from "../images/c.png";
import d from "../images/d.png";
import e from "../images/e.png";
import f from "../images/f.png";
import g from "../images/g.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Fade from "react-reveal/Fade";

function Ourworks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className="ourworks" id="ourworks">
      <div className="ourworks__ourworks">
        <Fade top delay={300}>
          <div className="ourworks__header">
            <h3 className="ourworks__h3">OUR WORKS</h3>
            <h2 className="ourworks__h2">WHAT WE’VE DONE?</h2>
          </div>
        </Fade>
        <Fade bottom delay={300}>
          <div className="ourworks__content">
            <Slider {...settings} className="our__slider">
              <div className="ourworks__box" style={{ margin: "10px" }}>
                <div className="ourworks__imgBox">
                  <img src={a} alt="" />
                </div>
                <div className="ourworks__boxContent">
                  <h3>Virtual Kharakhorum</h3>
                  <p>
                    The capital of the Mongol Empire, Kharakhorum was build in a
                    virtual environment 800 years later.
                  </p>
                </div>
              </div>
              <div className="ourworks__box">
                <div className="ourworks__imgBox">
                  <img src={b} alt="" />
                </div>
                <div className="ourworks__boxContent">
                  <h3>Zanabazar’s AR museum guide</h3>
                  <p>
                    The 30 selected exhibits can be viewed with video and audio
                    explanation using Epson Moverio BT 350 AR help.
                  </p>
                </div>
              </div>
              <div className="ourworks__box">
                <div className="ourworks__imgBox">
                  <img src={c} alt="" />
                </div>
                <div className="ourworks__boxContent">
                  <h3>Zanabazar’s virtual musuem</h3>
                  <p>
                    We redeveloped the Undur Gegeen Zanabazar exhibitions in a
                    virtual environment for the first time in Mongolia.
                  </p>
                </div>
              </div>
              <div className="ourworks__box">
                <div className="ourworks__imgBox">
                  <img src={d} alt="" />
                </div>
                <div className="ourworks__boxContent">
                  <h3>Heavy machinery simulator training</h3>
                  <p>
                    It's a comprehensive training system in a virtual
                    environment for heavy machinery with multiple users in the
                    training, mining, and industrial sectors.
                  </p>
                </div>
              </div>
              <div className="ourworks__box">
                <div className="ourworks__imgBox">
                  <img src={e} alt="" />
                </div>
                <div className="ourworks__boxContent">
                  <h3>Virtual School</h3>
                  <p>
                    Virtual School is a project aimed at increasing access of
                    education in Mongolia.
                  </p>
                </div>
              </div>
              <div className="ourworks__box">
                <div className="ourworks__imgBox">
                  <img src={f} alt="" />
                </div>
                <div className="ourworks__boxContent">
                  <h3>Virtual tourism</h3>
                  <p>
                    Virtual travel can show you the past, present, and future.
                  </p>
                </div>
              </div>
              <div className="ourworks__box">
                <div className="ourworks__imgBox">
                  <img src={g} alt="" />
                </div>
                <div className="ourworks__boxContent">
                  <h3>Bel Monte Showroom</h3>
                  <p>Bel Monte Residence developed in virtual environment.</p>
                </div>
              </div>
            </Slider>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Ourworks;
