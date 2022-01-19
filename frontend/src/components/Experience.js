import React, { useEffect } from "react";
import AOS from "aos";
import { Element } from "react-scroll";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Element className="experience element" name="experience">
      <p>Check Experience under my belt</p>
      <h3>Experience</h3>
      <div className="experience-section" data-aos="zoom-in-up">
        <div className="experience-content">
          <span className="pri">Educative - </span>
          <span className="sec">Technical Writer</span>
          <p>
            Here I write technical articles on areas that partains JavaScript,
            NodeJs, MongoDB, etc. and get Paid!
            <br />
            <a href="https://www.educative.io/profile/view/5894995463110656">
              See My Articles
            </a>
          </p>
        </div>
      </div>
      <div className="experience-section" data-aos="zoom-in-up">
        <div className="experience-content">
          <span className="pri">Freelancer - </span>
          <span className="sec">Self Employed</span>
          <p>
            I build websites for client using technologies such as Nodejs,
            ExpressJS, MongoDB, and Template Engines
          </p>
        </div>
      </div>
      <div className="experience-section" data-aos="zoom-in-up">
        <div className="experience-content">
          <span className="pri">Highest Point Information Tech - </span>
          <span className="sec">Web Developer and Instructor</span>
          <p>
            I build websites for client and also teach web development and
            programming in this institute
          </p>
        </div>
      </div>

      <div className="experience-section" data-aos="zoom-in-up">
        <div className="experience-content">
          <span className="pri">Genesys Tech Hub - </span>
          <span className="sec">Backend Developer Intern</span>
          <p>
            Here I learnt and built applications related to JavaScript and
            Nodejs
          </p>
        </div>
      </div>
    </Element>
  );
};

export default Experience;
