import React from "react";
import "./Scroll.css";
import { CgMouse } from "react-icons/cg";

function Scroll() {
  return (
    <div className="scroll">
      <CgMouse className="scroll__icon"></CgMouse>
      <h3>SCROLL DOWN</h3>
    </div>
  );
}

export default Scroll;
