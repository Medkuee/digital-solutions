import React from "react";
import Safety from "../images/1.jpg";
import Education from "../images/3.jpg";
import Vr from "../images/vr3.jpg";
import "./Vry.css";
import { Fade as Fadey } from "react-awesome-reveal";

function Vry() {
  return (
    <div className="vry">
      <div className="vry__vry">
        <div className="vry__header">
          <Fadey delay={300} cascade direction="left" className="fadey">
            <div className="vry__header__h1">
              <h1>Virtual Reality</h1>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum dolor maiores esse officiis. Quidem cum, quasi esse
                debitis totam repellat dolor quod et explicabo! Accusamus
                voluptates nam odit provident alias. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Omnis, repudiandae! In vel
                inventore asperiores, assumenda tempora impedit atque, ipsa aut
                eius ea dolore laborum harum qui illum ipsam nulla amet.
              </span>
            </div>
          </Fadey>
          <Fadey delay={300} direction="right" className="fadey">
            <div className="vry__header__content">
              <img src={Vr} alt="" />
            </div>
          </Fadey>
        </div>

        <div className="vry__wrapper">
          <Fadey delay={300} direction="top" className="fadey">
            <div className="vry__wrapper__card">
              <img src={Safety} alt="" className="vry__wrapper__img" />
              <div className="vry__wrapper__info">
                <h1>Safety Training</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis suscipit earum repellendus maxime, tenetur
                  necessitatibus iusto placeat a impedit ipsa cum id cumque,
                  voluptatem, velit inventore delectus quo provident deserunt?
                </p>
                <a href="/coming" className="vry__wrapper__btn">
                  Read More
                </a>
              </div>
            </div>
          </Fadey>
          <Fadey delay={300} direction="bottom" className="fadey">
            <div className="vry__wrapper__card">
              <img src={Education} alt="" className="vry__wrapper__img" />
              <div className="vry__wrapper__info">
                <h1>Educational Package</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis suscipit earum repellendus maxime, tenetur
                  necessitatibus iusto placeat a impedit ipsa cum id cumque,
                  voluptatem, velit inventore delectus quo provident deserunt?
                </p>
                <a href="/coming" className="vry__wrapper__btn">
                  Read More
                </a>
              </div>
            </div>
          </Fadey>
        </div>
      </div>
    </div>
  );
}

export default Vry;
