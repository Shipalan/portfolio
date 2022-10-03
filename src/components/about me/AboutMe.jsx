import React from "react";
import "./About-Me.css";
import picture from "../../img/myself.png";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="container">
        <article>
          <h2 className="h2aboutMe">About Me</h2>
          <section className="aboutMeContent">
            <div className="imgBorder">
              <div className="imgBackgroundColor">
                <img src={picture} alt="myself" />
              </div>
            </div>
            <article className="bio">
              <h3>
                Hi my name is <span className="highlight">Alan</span>
              </h3>
              <p className="aboutmeP">
                I am a Full Stack Web Developer/Software Developer, I am excited
                to continue learning and becoming a professional in the
                Developer field as well as working with a great team. I have
                really enjoyed learning vanilla Javascript, CSS, HTML, React,
                AWS, Redux, SQL and many other tools and libraries. During our
                labs we worked in pairs doing paired programming, it has been a
                very cool experience and also helped me learn how to work in a
                team environment. I look forward to diving into my next position
                and continuing to gain the knowledge I need to fullfill my
                duties.
              </p>
            </article>
          </section>
        </article>
      </div>
    </section>
  );
};

export default AboutMe;
