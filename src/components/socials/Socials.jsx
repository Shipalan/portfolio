import React from "react";
import "./Socials.css";
import linkedin from "../../img/linkedin.png";
import github from "../../img/gitHub.png";

const Socials = () => {
  return (
    <section className="socials">
      <h2>Socials</h2>
      <div className="links">
        <div className="linkedin">
         
          <a href="https://www.linkedin.com/in/alan-shipley-791490116/">
            <img src={linkedin} className="linkedin-img" />
          </a>
        </div>
        <div className="github">
         
          <a href="https://github.com/Shipalan">
            <img src={github} className="github-img" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
