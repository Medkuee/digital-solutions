import React from "react";
import "./Content.css";
import Fade from "react-reveal/Fade";

function Content() {
  return (
    <div className="content">
      <Fade top>
        <h2 className="content__h2">Hello, Welcome To</h2>
        <h1 className="content__h1">Digital solutions</h1>
        <h3 className="content__h3">
          We are a tech startup based in Ulaanbaatar, Mongolia
        </h3>
      </Fade>
    </div>
  );
}

export default Content;
