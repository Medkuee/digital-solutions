import React from "react";
import "./Social.css";
import { GrFacebookOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

function Social() {
  return (
    <div className="social">
      <a
        href="https://www.facebook.com/DigitalSolutionsMongolia"
        target="_blank"
        className="social__atag"
        rel="noreferrer"
      >
        <GrFacebookOption></GrFacebookOption>
      </a>

      <a
        href="https://www.youtube.com/channel/UC75SY6T1Rc8Jo9NDOih9b6A"
        target="_blank"
        className="social__atag"
        rel="noreferrer"
      >
        <AiFillYoutube></AiFillYoutube>
      </a>

      <a
        href="https://www.instagram.com/virtual.kharakhorum/"
        target="_blank"
        className="social__atag"
        rel="noreferrer"
      >
        <GrInstagram></GrInstagram>
      </a>
    </div>
  );
}

export default Social;
