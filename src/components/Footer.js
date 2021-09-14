import React from "react";
import "./Footer.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__social">
        <a
          className="footer__align"
          href="https://www.facebook.com/DigitalSolutionsMongolia"
        >
          <GrFacebookOption></GrFacebookOption>
        </a>
        <a
          className="footer__align"
          href="https://www.youtube.com/channel/UC75SY6T1Rc8Jo9NDOih9b6A"
        >
          <AiFillYoutube></AiFillYoutube>
        </a>
        <a
          className="footer__align"
          href="https://www.instagram.com/virtual.kharakhorum/"
        >
          <GrInstagram></GrInstagram>
        </a>
      </div>
      <ul className="footer__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/vr">Virtual Reality</Link>
        </li>
        <li>
          <Link to="/simulator">Simulator</Link>
        </li>
      </ul>
      <p className="footer__copyright">Digital Solutions @2021</p>
    </div>
  );
}

export default Footer;
