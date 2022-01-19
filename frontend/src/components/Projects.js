import React, { useEffect } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import AOS from "aos";

import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // Fix firefox simplereactlightbox issue
  const browser = navigator.userAgent;
  const isFirefox = browser.indexOf("Firefox") > -1;

  const options = {
    settings: {
      overlayColor: "#232427",
      autoplaySpeed: 1500,
      transitionSpeed: 900,
    },
    caption: {
      captionFontWeight: "300",
      captionFontSize: "32px",
      captionTextTransform: "uppercase",
    },
  };
  var getSiblings = function (elem) {
    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = elem.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== elem) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }

    return siblings;
  };
  window.addEventListener("load", () => {
    let filterLists = document.querySelectorAll(".project-filter li");
    filterLists.forEach((li, index) => {
      li.addEventListener("click", () => {
        li.classList.add("project-filter-active");
        let siblings = getSiblings(li);
        siblings.forEach((sibling) => {
          sibling.classList.remove("project-filter-active");
        });
      });
    });

    let lists = document.querySelectorAll(".list");
    lists.forEach((list) => {
      list.addEventListener("click", () => {
        const value = list.getAttribute("data-filter");
        if (value == "all") {
          document.querySelectorAll(".project-box").forEach((li) => {
            li.style.display = "block";
          });
        } else {
          let nots = document.querySelectorAll(".project-box");
          nots.forEach((elem) => {
            if (!elem.classList.contains(value)) {
              elem.style.display = "none";
            }
          });

          nots.forEach((elem) => {
            if (elem.classList.contains(value)) {
              elem.style.display = "block";
            }
          });
        }
      });
    });
  });
  useEffect(() => {}, []);

  return (
    <div className="pro">
      <div className="project-section">
        <div id="project">
          {/* heading */}
          <div className="project-heading">
            <span>Check out my projects</span>
            <h3>My Projects</h3>
          </div>
        </div>

        {/* filter */}
        <ul className="project-filter">
          <li className="list project-filter-active" data-filter="all">
            All
          </li>
          <li className="list" data-filter="education">
            Education
          </li>
          <li className="list" data-filter="personal">
            Personal
          </li>
          <li className="list" data-filter="business">
            Business
          </li>
        </ul>

        {/* Project Container */}
        <SRLWrapper options={options}>
          <div className="project-container">
            {/* <div> */}
            <a
              data-aos="fade-up"
              href={four}
              className="project-box responsive-img business "
            >
              <img
                src={four}
                alt="My Portfolio. Built Using React, lightbox, Sendgrid api for email and drift"
              />
              <a href="#" className="btn-animated">
                <span>Visit</span>
              </a>
            </a>

              <a
                data-aos="fade-up"
                href={six}
                className="project-box responsive-img personal"
              >
                <img
                  src={six}
                  alt="
              A Responsive page built using React, Nodejs, Cloudinary,etc.
              "
                />
                <a href="https://decode-yearphoto-book.netlify.app/" className="btn-animated">
                  <span>Visit</span>
                </a>
              </a>
            {/* </div> */}

            <a
              data-aos="fade-up"
              href={five}
              className="project-box responsive-img personal "
            >
              <img
                src={five}
                alt="A Moview Search App. Built using IMDB API and ExpressJs"
              />
              <a
                href="https://mv-search.herokuapp.com/"
                className="btn-animated"
              >
                <span>Visit</span>
              </a>
            </a>
            
            <a
              data-aos="fade-up"
              href={three}
              className="project-box responsive-img business "
            >
              <img
                src={three}
                alt="A Courier service built with Express, MongoDB and Multer"
              />
              <a
                href="https://skywaydeliveryservice.com/"
                className="btn-animated"
              >
                <span>Visit</span>
              </a>
            </a>

            <a
              data-aos="fade-up"
              href={two}
              className="project-box responsive-img education "
            >
              <img
                src={two}
                alt="A food delivery service for students on campus. Built using React, Nodejs, Cloudinary, Flutterwave API, and Google API"
              />
              <a
                href="https://campus-foodie.netlify.app/"
                className="btn-animated"
              >
                <span>Visit</span>
              </a>
            </a>

            <a
              data-aos="fade-up"
              href={one}
              className="project-box responsive-img business"
            >
              <img src={one} alt="Crypto investment platform" />
              <a href="https://cryptoliteinvest.com/" className="btn-animated">
                <span>Visit</span>
              </a>
            </a>
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
};

export default Projects;
