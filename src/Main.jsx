import React from "react";
import photo from "./img/photo.png";

const Main = () => {
  return (
    <div>
      <div className="container">
        <img className="photo-img" src={photo} alt="#" />
        <section className="main">
          <h1 className="name">Laura Smith</h1>
          <h3 className="job-title">Frontend Developer</h3>
          <a className="website-link" href="www">
            laurasmith.website
          </a>
          <div className="bottons">
            <div className="email-botton">
              <div className="email-icon"></div>
              <p className="email-text">Email</p>
            </div>
            <div className="linkedin-botton">
              <div className="linkedin-icon"></div>
              <p className="linkedin-text">LinkedIn</p>
            </div>
          </div>
          <section>
            <div className="main-about">
              <div className="about-header">About</div>
              <div className="about-content">
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </div>
            </div>
            <div className="interests">
              <div className="interests-header">Interests</div>
              <div className="interests-content">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Main;
