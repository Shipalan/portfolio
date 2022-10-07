import React from "react";
import "./Portfolio.css";
import tailsNtrails from "../../img/Tails-trails-preview.png";
import tripTracker from "../../img/trip-tracker.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h2 className="h2portfolio">Portfolio</h2>
        <div className="links">
          {/* <div className="tt-app">
            <h3>My First App</h3>
            <img src={tripTracker} className="tt-img"></img>
            <a href="https://f24-capstone-project-alan-ship.herokuapp.com/history" className="tt-link">
              https://f24-capstone-project-alan-ship.herokuapp.com/history
            </a>
          </div> */}
          <div className="tNt-app">
          <h3>App Utilizing React</h3>
            <img src={tailsNtrails} className="tNt-img" />
            <a
              href="https://tails-and-trails.herokuapp.com/"
              className="tNt-link"
            >
              https://tails-and-trails.herokuapp.com/
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
