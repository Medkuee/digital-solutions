import React from "react";
import "./Contactus.css";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Fade from "react-reveal/Fade";

function Contactus() {
  return (
    <div className="contactus" id="contactus">
      <div className="contact__contact">
        <Fade top>
          <div className="contactus__header">
            <h3 className="contact__headerH3">COntact</h3>
            <h2 className="contact__headerH2">get in touch!</h2>
          </div>
        </Fade>
        <div className="contactus__content">
          <Fade left>
            <div className="contact__contentLeft">
              <div
                className="contact__contentLefties"
                style={{ paddingLeft: "28px", paddingRight: "50px" }}
              >
                <MdLocationOn
                  className="contact__icons"
                  id="iconsmut"
                  style={{ fontSize: "40px" }}
                ></MdLocationOn>
                <span>
                  Unit 45-13, 6th khoroo, Sukhbaatar district, Ulaanbaatar,
                  Mongolia
                </span>
              </div>
              <div className="contact__contentLefties">
                <IoCall className="contact__icons"></IoCall>
                <span>+976-11330199, +976-94000133</span>
              </div>
              <div className="contact__contentLefties">
                <MdEmail className="contact__icons"></MdEmail>
                <span>contact@digitalsolutions.mn</span>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="contact__contentRight">
              <div className="contact__contentRighties">
                <input
                  placeholder="Name"
                  className="contact__input"
                  type="text"
                  min="2"
                  max="20"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="contact__contentRighties">
                <input
                  placeholder="Email"
                  className="contact__input"
                  type="text"
                  min="2"
                  max="40"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="contact__contentRighties2">
                <textarea
                  placeholder="Message"
                  className="contact__input2"
                  type="text"
                  min="2"
                  max="100"
                  style={{ width: "100%", paddingTop: "15px" }}
                ></textarea>
              </div>
              <div className="contact__contentRighties3">
                <button
                  className="contact__content__button"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
