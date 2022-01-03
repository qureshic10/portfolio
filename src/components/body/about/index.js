import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello there, I am
          <br /> <span className="info-name">Kashif Qureshi.</span>
          <br /> I am looking for a job where I can fully use my skills to
          perform the given task and duties and to be a productive and flexible
          employee for the organization.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/coding.JPG")}
            className="picture"
            alt=""
          />
        </div>
      </div>
      {/* <div className="about-bottom">This is contacts</div> */}
      <SocialContact />
    </div>
  );
}

export default About;
