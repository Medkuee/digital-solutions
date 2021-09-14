import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../videos/background.mp4";
import "./Home.css";
import Social from "../components/Social";
import Scroll from "../components/Scroll";

function Home({ isOpen, toggle }) {
  return (
    <div className="home" id="home">
      <video
        className="home__video"
        src={Video}
        autoPlay
        loop
        muted
        playsInline
        type="mp4"
      ></video>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <Social />
      <Content />
      <Scroll />
    </div>
  );
}

export default Home;
