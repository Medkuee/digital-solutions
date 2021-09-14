import React from "react";
import "./OpenPit.css";
import Video from "../videos/openpit.mp4";
import Fade from "react-reveal/Fade";
import Icon from "../images/logo.png";
import { Link } from "react-router-dom";

function OpenPit() {
  return (
    <div className="OpenPit">
      <Link to="/">
        <Fade top delay={500} className="OpenPit__fade">
          <img src={Icon} alt="" className="OpenPit__icon" />
        </Fade>
      </Link>
      <Fade top delay={500}>
        <h1 className="OpenPit__h1">Open Pit Machines</h1>
      </Fade>

      <video
        className="OpenPit__video"
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

export default OpenPit;
