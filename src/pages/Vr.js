import React from "react";
import "./Vr.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Video from "../videos/vrr.mp4";
import Icon from "../images/logo.png";

function Vr() {
  return (
    <div className="vr">
      <Link to="/">
        <Fade top delay={500} className="simulator__fade">
          <img src={Icon} alt="" className="simulator__icon" />
        </Fade>
      </Link>
      <Fade top delay={500}>
        <h1 className="simulator__h1">Virtual Reality</h1>
      </Fade>

      <video
        className="simulator__video"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
        type="mp4"
      ></video>
    </div>
  );
}

export default Vr;
