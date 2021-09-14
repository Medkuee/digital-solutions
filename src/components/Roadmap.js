import React, { useState } from "react";
import "./Roadmap.css";
import data from "./roadmapdata";
import { FaAngleDoubleRight } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import LightSpeed from "react-reveal/LightSpeed";

function Roadmap() {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);
  const { dates, lists } = jobs[value];
  return (
    <div className="roadmap" id="roadmap">
      <section className="section">
        <LightSpeed right delay={300}>
          <div className="title">
            <h2 style={{ fontSize: "2rem" }}>OUR ROADMAP</h2>
            <div className="underline"></div>
          </div>
        </LightSpeed>
        <Fade bottom delay={300}>
          <div className="jobs-center">
            <div className="btn-container">
              {jobs.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setValue(index)}
                    className={`job-btn ${index === value && "active-btn"}`}
                  >
                    {item.dates}
                  </button>
                );
              })}
            </div>

            <article className="job-info">
              <h3>{dates}</h3>

              {lists.map((duty, index) => {
                return (
                  <div key={`duty${index}`} className="job-desc">
                    <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                    <p className="roadmap__list">{duty}</p>
                  </div>
                );
              })}
            </article>
          </div>
        </Fade>
      </section>
    </div>
  );
}

export default Roadmap;
