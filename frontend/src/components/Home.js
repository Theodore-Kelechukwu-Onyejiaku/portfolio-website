import React, { useEffect, useState } from "react";
import Scrollspy from "react-scrollspy";
import theo from "../assets/kc.jpg";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.pdf";
import ContactForm from "../components/ContactForm";
import ScrollUp from "../components/ScrollUp";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import Particles from "../components/Particles";
import Footer from "../components/Footer";
import AnimatedButton from "../components/AnimatedButton";
import Stack from "../components/Stack";
import About from "../components/About";
import AutoType from "../components/AutoType";
import Projects from "../components/Projects";
import Experience from "../components/Experience.js";
import Certification from "../components/Certifications";

import { initializeJqueryWrapper } from "materialize-css";
import AOS from "aos";

import { body, linkDark, connectDark } from "../dark";

// theme
const getWindowTop = () => {
  let top = window.scrollY;
  return top;
};

const Home = () => {
  const [initialTop, setInitialTop] = useState(false);
  const [lightTheme, setTheme] = useState(true);

  window.addEventListener("scroll", () => {
    if (getWindowTop() > 5) {
      setInitialTop(true);
    } else {
      setInitialTop(false);
    }
  });

  const changeTheme = () => {
    setTheme(!lightTheme);

    if (lightTheme == false) {
      document.querySelector("body").classList.add("bodyDark");
      // document.querySelectorAll("")
    } else {
      document.querySelector("body").classList.remove("bodyDark");
    }
  };
  useEffect(() => {
    window.addEventListener("load", () => {});
  }, []);
  return (
    <div style={{ overflow: "hidden" }}>
      <Nav changeTheme={changeTheme} />
      <SideNav lightTheme={lightTheme} />
      <div className="row">
        <div className="col s12 m2 l4"></div>
        <div className="col s12 m8 l4">
          <div
            style={{
              height: "100vh",
            }}
          >
            <Particles />
            <div className="hero">
              <img
                className="circle animate__animated animate__bounceInDown"
                src={theo}
                id="theo"
                alt="theodore"
              />
              <p></p>

              {/* SOCIAL CONNECT STARTS */}
              <div className="connect ">
                <div className="row">
                  <div className="col s4 center-align">
                    <a href="https://www.linkedin.com/in/theodore20151014166/">
                      <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                  </div>
                  <div className="col s4 center-align">
                    <a href="https://twitter.com/JavaScriptar">
                      <i className="fa fa-twitter fa-2x"></i>
                    </a>
                  </div>
                  <div className="col s4 center-align">
                    <a href="https://github.com/Theodore-Kelechukwu-Onyejiaku">
                      <i className="fa fa-github fa-2x"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* SOCIAL CONNECT ENDS */}

              {/* GO DOWN BUTTON STARTS*/}
              <div className="down-btn-container">
                <AutoType />
                <AnimatedButton />
              </div>
              {/* GO DOWN BUTTON ENDS */}
            </div>
            <p></p>
          </div>
        </div>
        <div className="col s12 m2 l4"></div>
      </div>
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Certification />
      {/* CONTACT SECTION */}
      <div id="contact">
        <div className="container">
          <div className="row container">
            <ContactForm />
          </div>
        </div>
      </div>{" "}
      {/* SCROLL TOP START */}
      {initialTop ? <ScrollUp className="" /> : <div></div>}
      {/* SCROLL TO END */}
      {/* FOOTER START */}
      <Footer />
      {/* FOOTER END */}
    </div>
  );
};

export default Home;
