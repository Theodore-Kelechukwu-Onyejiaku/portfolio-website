import React from "react";
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

class Nav extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register("begin", function (to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function (to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }

  scrollTo() {
    scroll.scrollTo(100);
  }

  scrollMore() {
    scroll.scrollMore(100);
  }

  handleSetActive(to) {
    console.log(to);
  }

  render() {
    return (
      <div className="nav">
        <div className="brand-name">
          <span>@javascriptar</span>
        </div>
        <div className="navlink-box">
          <ul>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={2000}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="stack"
                spy={true}
                smooth={true}
                offset={50}
                duration={2000}
              >
                My Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="project"
                to="project"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="experience"
                to="experience"
                spy={true}
                smooth={true}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="contact"
                to="anchor"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a href="https://www.educative.io/profile/view/5894995463110656">
                Articles
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
