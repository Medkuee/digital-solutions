import React from "react";
import "./Skills.css";
import { LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 6,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "dark" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#fff",
  },
}))(LinearProgress);

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills__skills">
        <Fade top delay={300}>
          <h3 className="skills__h3">Our skills</h3>
        </Fade>
        <Fade top delay={300}>
          <h2 className="skills__h2">What is our focus?</h2>
        </Fade>
        <Fade bottom delay={300}>
          <div style={{ width: "70%" }} className="skills__corres">
            <div
              className="skills__content"
              style={{ borderBottom: "solid 1px #2b3833" }}
            >
              <div className="skills__percent">
                <strong>70</strong>%
              </div>
              <BorderLinearProgress
                className="skills__progress"
                variant="determinate"
                value={70}
              />
              <div className="skills__des">3d modeling</div>
            </div>
            <div
              className="skills__content"
              style={{ borderBottom: "solid 1px #2b3833" }}
            >
              <div className="skills__percent">
                <strong>90</strong>%
              </div>
              <BorderLinearProgress
                className="skills__progress"
                variant="determinate"
                value={90}
              />
              <div className="skills__des">AR VR</div>
            </div>
            <div
              className="skills__content"
              style={{ borderBottom: "solid 1px #2b3833" }}
            >
              <div className="skills__percent">
                <strong>90</strong>%
              </div>
              <BorderLinearProgress
                className="skills__progress"
                variant="determinate"
                value={90}
              />
              <div className="skills__des">LIDAR TECHNOLOGY</div>
            </div>
            <div className="skills__content">
              <div className="skills__percent">
                <strong>90</strong>%
              </div>
              <BorderLinearProgress
                className="skills__progress"
                variant="determinate"
                value={90}
              />
              <div className="skills__des">COMPUTER SIMULATION</div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Skills;
