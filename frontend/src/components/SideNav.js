import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
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

const SideNav = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

    window.addEventListener("load", () => {
      let myNav = document.querySelector(".my-nav");
      let allLinks = document.querySelectorAll(".my-nav-link");

      allLinks.forEach((eachLink) => {
        eachLink.addEventListener("click", () => {
          myNav.classList.remove("animate__slideInRight");
          myNav.classList.add("animate__fadeOutRight");
          closeCurtain();
        });
      });
    });
  }, []);
  function scrollToTop() {
    scroll.scrollToTop();
  }
  function scrollToBottom() {
    scroll.scrollToBottom();
  }

  function scrollTo() {
    scroll.scrollTo(100);
  }

  function scrollMore() {
    scroll.scrollMore(100);
  }

  function handleSetActive(to) {
    console.log(to);
  }
  const closeCurtain = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="ham-cont">
        <Hamburger
          color="grey"
          toggled={isOpen}
          toggle={setOpen}
          id="ham"
          onToggle={(toggled) => {
            console.log("The state is " + isOpen);
            let myNav = document.querySelector(".my-nav");
            if (toggled) {
              // open a menu
              myNav.style.width = "100%";
              myNav.classList.remove("animate__fadeOutRight");
              myNav.classList.add("animate__slideInRight");
            } else {
              // close a menu
              myNav.classList.remove("animate__slideInRight");
              myNav.classList.add("animate__fadeOutRight");
            }
          }}
        />
      </div>
      <div className="my-nav animate__animated ">
        <div className="ham"></div>
        <div className="my-nav-link-container">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={2000}
            className="my-nav-link"
            href="#about"
            id="aboutLink"
            onClick={closeCurtain}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="stack"
            spy={true}
            smooth={true}
            offset={50}
            duration={2000}
            className="my-nav-link"
            href="#stack"
            id="stackLink"
            onClick={closeCurtain}
          >
            My Stack
          </Link>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={50}
            duration={2000}
            className="my-nav-link"
            href="#experience"
            id="expLink"
            onClick={closeCurtain}
          >
            Projects
          </Link>
          <Link
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={50}
            duration={2000}
            className="my-nav-link"
            href="#projects"
            id="projectLink"
            onClick={closeCurtain}
          >
            Experience
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={2000}
            className="my-nav-link"
            href="#contact"
            id="contactLink"
            onClick={closeCurtain}
          >
            Contact Me
          </Link>
          <a
            href="https://www.educative.io/profile/view/5894995463110656"
            className="my-nav-link"
          >
            Articles
          </a>
        </div>
      </div>
    </>
  );
};

export default SideNav;
