import React, { useEffect } from "react";
import theodore from "../assets/theodore.jpg";
import AOS from "aos";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about">
      <Element className="about-section element" name="about">
        <div className="about-content" data-aos={"fade-up-right"}>
          <h2>About Me</h2>
          <p>
            Hi my name is Theodore Kelechukwu Onyejiaku . I am a full-stack
            developer. I hail from Imo State, born in Onitsha and grew up in the
            busy streets of Lagos. My dream is to be a world-class software
            engineer. Study in Germany and base there. My hubbies include:
            Singing, playing guitar, chess, making jokes and thinking.
          </p>
        </div>

        <div className="about-content" data-aos={"fade-up-left"}>
          <img src={theodore} alt="presentation" className="responsive-img" />
        </div>
      </Element>
    </div>
  );
};

export default About;

// <div className="container animate__animated section" id="about">
//   <div className="section white">
//     <div className="row container">
//
//       <p className="grey-text text-darken-3 lighten-3">
//         Hi my name is{" "}
//         Theodore Kelechukwu Onyejiaku
//
//         . I am a full-stack developer. I hail from Imo State, born in Onitsha
//         and grew up in the busy streets of Lagos. My dream is to be a
//         world-class software engineer. Study in Germany and base their.
//
//
//         My hubbies include: Singing, playing guitar, chess, making jokes and
//         thinking.
//       </p>
//     </div>
//   </div>
// </div>;
