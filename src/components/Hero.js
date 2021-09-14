import React from "react";
import "./Hero.css";
import Image from "../images/vr3.jpg";
import { FaGraduationCap } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { IoIosGitNetwork } from "react-icons/io";
import Fade from "react-reveal/Fade";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero({ width }) {
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
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  if (width < 950) {
    return (
      <div className="about" id="about">
        <div className="about__content">
          <Fade bottom delay={300}>
            <div className="about__left">
              <span
                className="about__left-span"
                style={{
                  fontSize: "24px",
                  textTransform: "uppercase",
                  fontWeight: "300",
                }}
              >
                About Us
              </span>
              <h2
                className="about__left-span"
                style={{
                  fontSize: "32px",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                WHAT WE DO?
              </h2>
              <span className="about__left__span">
                We develop training programs, virtual courses, virtual tours on
                an advanced technology such as computer simulation, MR, AR, VR,
                and LiDAR technologies.
              </span>
              <Slider {...setting} className="hero__slider">
                <div className="about__left__boxes">
                  <FaGraduationCap className="about__icons"></FaGraduationCap>
                  <h6>7</h6>
                  <span className="about__left__boxes__spanny">
                    Years Of Experience
                  </span>
                </div>
                <div className="about__left__boxes">
                  <RiComputerLine className="about__icons"></RiComputerLine>
                  <h6>20</h6>
                  <span className="about__left__boxes__spanny">Projects</span>
                </div>
                <div className="about__left__boxes">
                  <IoIosGitNetwork className="about__icons"></IoIosGitNetwork>
                  <h6>13</h6>
                  <span className="about__left__boxes__spanny">Employees</span>
                </div>
              </Slider>
            </div>
          </Fade>
          <Fade right delay={300}>
            <div className="about__right">
              <img src={Image} alt="" />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
  return (
    <div className="about" id="about">
      <div className="about__content">
        <Fade bottom delay={300}>
          <div className="about__left">
            <span
              style={{
                fontSize: "24px",
                textTransform: "uppercase",
                fontWeight: "300",
              }}
            >
              About Us
            </span>
            <h2
              style={{
                fontSize: "32px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              WHAT WE DO?
            </h2>
            <span className="about__left__span">
              We develop training programs, virtual courses, virtual tours on an
              advanced technology such as computer simulation, MR, AR, VR, and
              LiDAR technologies.
            </span>
            <div className="about__left__box">
              <div className="about__left__boxes">
                <FaGraduationCap className="about__icons"></FaGraduationCap>
                <h6>7</h6>
                <span>Years Of Experience</span>
              </div>
              <div className="about__left__boxes">
                <RiComputerLine className="about__icons"></RiComputerLine>
                <h6>20</h6>
                <span>Projects</span>
              </div>
              <div className="about__left__boxes">
                <IoIosGitNetwork className="about__icons"></IoIosGitNetwork>
                <h6>13</h6>
                <span>Employees</span>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right delay={300}>
          <div className="about__right">
            <img src={Image} alt="" />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Hero;
