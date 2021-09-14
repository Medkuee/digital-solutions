import React from "react";
import "./ComingSoon.css";
import { Link } from "react-router-dom";
import Icon from "../images/logo.png";

function ComingSoon() {
  return (
    <div className="comingsoon">
      <Link to="/">
        <img src={Icon} alt="" className="simulator__icon" />
      </Link>
      <div className="comingsoon__hero">
        <p>Digital Solutions</p>
        <h1>COMING SOON</h1>
        <hr />
        <p className="comingsoon__bottom"></p>
      </div>
    </div>
  );
}

export default ComingSoon;
