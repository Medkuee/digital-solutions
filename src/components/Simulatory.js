import React from "react";
import "./Simulatory.css";
import Image from "../images/vr3.jpg";
import Op from "../images/op.jpg";
import { Fade as Fadey } from "react-awesome-reveal";

function Simulatory() {
  return (
    <div className="simulatory">
      <div className="simulatory__header">
        <Fadey className="fadey3" delay={500} direction="left">
          <div className="simulatory__header__content">
            <h1>Simulator</h1>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
              blanditiis maiores explicabo? Harum, sit. Saepe ratione recusandae
              iusto maiores, vel dolorum esse facilis dignissimos adipisci culpa
              error minima quibusdam est! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Ut nesciunt libero assumenda optio
              illo? Soluta, asperiores corrupti! Aperiam voluptatibus tenetur
              accusantium, voluptates qui fugiat illo cupiditate dolore nisi
              autem vitae.
            </span>
          </div>
        </Fadey>
        <Fadey className="fadey3" delay={500} direction="right">
          <div className="simulatory__header__content">
            <img src={Image} alt="" />
          </div>
        </Fadey>
      </div>

      <div className="simulatory__bottom">
        <Fadey className="fadey2" delay={500}>
          <div className="simulatory__bottom__box">
            <div className="simulatory__bottom__imgBox">
              <img src={Op} alt="" className="simulatory__bottom__img" />
            </div>
            <div className="simulatory__bottom__details">
              <div className="simulatory__bottom__content">
                <h2>Underground Machines</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  rerum qui quisquam debitis ipsum tenetur numquam tempora,
                  facilis vero. Recusandae consequuntur rerum, officiis
                  reiciendis eos corrupti optio eligendi ratione accusantium.
                </p>
                <a className="simulatory__links2">
                  <h5>Coming Soon</h5>
                </a>
              </div>
            </div>
          </div>
        </Fadey>
        <Fadey delay={700} className="fadey2">
          <div className="simulatory__bottom__box">
            <div className="simulatory__bottom__imgBox">
              <img src={Op} alt="" className="simulatory__bottom__img" />
            </div>
            <div className="simulatory__bottom__details">
              <div className="simulatory__bottom__content">
                <h2>Open Pit Machines</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                  rerum qui quisquam debitis ipsum tenetur numquam tempora,
                  facilis vero. Recusandae consequuntur rerum, officiis
                  reiciendis eos corrupti optio eligendi ratione accusantium.
                </p>

                <a href="/openpit" className="simulatory__links">
                  <h5>Visit</h5>
                </a>
              </div>
            </div>
          </div>
        </Fadey>
      </div>
    </div>
  );
}

export default Simulatory;
