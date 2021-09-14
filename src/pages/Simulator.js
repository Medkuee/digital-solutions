import React from "react";
import "./Simulator.css";
import Video from "../videos/simulatorr.mp4";
import Fade from "react-reveal/Fade";
import Icon from "../images/logo.png";
import { Link } from "react-router-dom";

function Simulator() {
  return (
    <div className="simulator">
      <Link to="/">
        <Fade top delay={500} className="simulator__fade">
          <img src={Icon} alt="" className="simulator__icon" />
        </Fade>
      </Link>
      <Fade top delay={500}>
        <h1 className="simulator__h1">Simulator</h1>
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

export default Simulator;
