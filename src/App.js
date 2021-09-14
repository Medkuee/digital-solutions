import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Ourworks from "./components/Ourworks";
import Products from "./components/Products";
import Roadmap from "./components/Roadmap";
import Partnerships from "./components/Partnerships";
import Contactus from "./components/Contactus";
import React, { useEffect, useState } from "react";
import { FullPage, Slide } from "react-full-page";
import Simulator from "./pages/Simulator";
import Simulatory from "./components/Simulatory";
import OpenPity from "./components/OpenPity";
import Scroll from "./components/Scroll";
import Fade from "react-reveal/Fade";
import Vr from "./pages/Vr";
import Vry from "./components/Vry";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Location from "./pages/Location";
import OpenPit from "./pages/OpenPit";
import ComingSoon from "./pages/ComingSoon";

function useWindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const width = useWindowSize();
  if (width < 768) {
    return (
      <div className="App">
        <Router forceRefresh>
          <ScrollToTop />
          <Switch>
            <Route path="/" exact>
              <Home isOpen={isOpen} toggle={toggle} />
              <Hero width={width} />
              <Skills />
              <Ourworks />
              <Products width={width} />
              <Roadmap />
              <Partnerships width={width} />
              <Contactus />
            </Route>
            <Route path="/simulator">
              <Simulator />
              <Fade delay={500}>
                <Scroll />
              </Fade>
              <Simulatory />
              <Footer />
            </Route>
            <Route path="/vr">
              <Vr />
              <Fade delay={500}>
                <Scroll />
              </Fade>
              <Vry />
              <Footer />
            </Route>
            <Route path="/openpit">
              <OpenPit />
              <Fade delay={500}>
                <Scroll />
              </Fade>
              <OpenPity />

              <Footer />
            </Route>
            <Route path="/location">
              <Location />
            </Route>
            <Route path="/coming">
              <ComingSoon />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
  return (
    <div className="App">
      <Router forceRefresh>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <FullPage controls>
              <Slide>
                <Home isOpen={isOpen} toggle={toggle} />
              </Slide>
              <Slide>
                <Hero width={width} />
              </Slide>
              <Slide>
                <Skills />
              </Slide>
              <Slide>
                <Ourworks />
              </Slide>
              <Slide>
                <Products width={width} />
              </Slide>
              <Slide>
                <Roadmap />
              </Slide>
              <Slide>
                <Partnerships width={width} />
              </Slide>
              <Slide>
                <Contactus />
              </Slide>
            </FullPage>
          </Route>
          <Route path="/simulator">
            <Simulator />
            <Fade delay={500}>
              <Scroll />
            </Fade>
            <Simulatory />
            <Footer />
          </Route>
          <Route path="/vr">
            <Vr />
            <Fade delay={500}>
              <Scroll />
            </Fade>
            <Vry />
            <Footer />
          </Route>
          <Route path="/openpit">
            <OpenPit />
            <Fade delay={500}>
              <Scroll />
            </Fade>
            <OpenPity />
            <Footer />
          </Route>
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/coming">
            <ComingSoon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
