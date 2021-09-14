import React from "react";
import "./OpenPity.css";
import Truck from "../images/zurag.png";
import Excavator from "../images/zurag1.png";
import { Fade as Fadey } from "react-awesome-reveal";
import Op from "../images/op.jpg";

function OpenPity() {
  return (
    <div className="OpenPity">
      <Fadey direction="bottom" className="fadey1" delay={300} cascade>
        <div className="OpenPity__header">
          <h1>Open Pit Machine</h1>
          <div className="OpenPity__header__content">
            <span className="OpenPity__header__content__span">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              blanditiis maiores explicabo? Harum, sit. Saepe ratione recusandae
              iusto maiores, vel dolorum esse facilis dignissimos adipisci culpa
              error minima quibusdam est! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ut nesciunt libero assumenda optio
              illo? Soluta, asperiores corrupti! Aperiam voluptatibus tenetur
              accusantium, voluptates qui fugiat illo cupiditate dolore nisi
              autem vitae.
            </span>
            <img src={Op} alt="" />
          </div>
        </div>
      </Fadey>

      <div className="OpenPity__bottom">
        <Fadey direction="left" delay={300} cascade>
          <div className="OpenPity__bottom__left">
            <div className="OpenPity__left__img">
              <div className="OpenPity__left__text">
                <h1>Excavator</h1>
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                  autem blanditiis distinctio numquam, quibusdam cum dicta
                  excepturi suscipit, ratione harum quas. Ex nihil sapiente
                  commodi voluptatum qui atque delectus obcaecati.
                </span>
              </div>
              <img className="OpenPity__realImg" src={Truck} alt="" />
            </div>
          </div>
        </Fadey>
        <Fadey direction="right" delay={300} cascade>
          <div className="OpenPity__bottom__right">
            <div className="OpenPity__right__img">
              <img className="OpenPity__realImg" src={Excavator} alt="" />
              <div className="OpenPity__right__text">
                <h1>Haul Truck</h1>
                <span className="OpenPity__rightSpan">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  numquam ratione officia cum velit sed, quae quos at blanditiis
                  quo itaque quisquam incidunt libero unde dolorum nostrum
                  asperiores quibusdam quidem?
                </span>
              </div>
            </div>
          </div>
        </Fadey>
      </div>
    </div>
  );
}

export default OpenPity;
