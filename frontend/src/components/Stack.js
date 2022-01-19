import React, { useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import AOS from "aos";
import { Element } from "react-scroll";

const Stack = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Element className="stack element" name="stack">
      <p className="stack-heading-sec">Checkout my skills</p>
      <h3 className="stack-heading-pri">Skills</h3>
      <div className="stack-section">
        <div className="stack-container">
          <div className="stack-card" data-aos={"fade-up-right"}>
            <div className="stack-box">
              <div className="stack-content">
                <h3>MongoDB</h3>
                <p>
                  MongoDB is a No-Sql Database that is scalable, fast,
                  document-based and object-oriented database
                </p>
                <a href="https://www.mongodb.com/" className="btn-animated">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
          <div className="stack-card" data-aos={"fade-up-left"}>
            <div className="stack-box">
              <div className="stack-content">
                <h3>ExpressJs</h3>
                <p>
                  ExpressJS is a NodeJs framework for building scalable and fast
                  server applications.
                </p>
                <a href="https://expressjs.com/" className="btn-animated">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="stack-card" data-aos={"fade-up-right"}>
            <div className="stack-box">
              <div className="stack-content">
                <h3>ReactJs</h3>
                <p>
                  ReactJS is a frontend framework for building fast and large ui
                  applications. It is managed by Facebook
                </p>
                <a href="https://reactjs.org/" className="btn-animated">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="stack-card" data-aos={"fade-up-left"}>
            <div className="stack-box">
              <div className="stack-content">
                <h3>NodeJs</h3>
                <p>
                  NodeJS is a runtime built using the Google Chrome V8 engine.
                  It is very fast!
                </p>
                <a href="https://nodejs.org/en/" className="btn-animated">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Stack;

{
  /* MY STACK SECTION */
}
{
  /* <div className="container animate__animated section" id="stack">
        <div className="">
          <div className="section white">
            <div className="row container ">
              <h4 className="header">
                <u>My Stack</u>
              </h4>
              <p className="grey-text text-darken-3 lighten-3">
                I am a <strong>MERN Stack Developer!</strong> I use MongoDB as
                my database, ReactJs for my frontend and expressJS coupled with
                NodeJS as my backend technologies.
              </p>
              <div className="row">
                <div className="col s12 m6">
                  <div class="card hoverable">
                    <div>
                      <div class="card medium">
                        <h6>MONGODB</h6>
                        <div class="card-content">
                          <h6 class="truncate black-text">
                            <b>About</b>
                          </h6>
                          <p class="grey-text text-darken-2">
                            MongoDB is a No-Sql Database that is scalable, fast,
                            document-based and object-oriented database
                          </p>
                          <p class="right-align grey-text">
                            <small className="green-text">100%</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div class="card hoverable">
                    <div>
                      <div class="card medium">
                        <h6>EXPRESSJS</h6>
                        <div class="card-content">
                          <h6 class="truncate black-text">
                            <b>About</b>
                          </h6>
                          <p class="grey-text text-darken-2">
                            ExpressJS is a NodeJs framework for building
                            scalable and fast server applications.
                          </p>
                          <p class="right-align grey-text">
                            <small className="green-text">100%</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div class="card hoverable">
                    <div>
                      <div class="card medium">
                        <h6>REACTJS</h6>
                        <div class="card-content">
                          <h6 class="truncate black-text">
                            <b>About</b>
                          </h6>
                          <p class="grey-text text-darken-2">
                            ReactJS is a frontend framework for building fast
                            and large ui applications. It is managed by Facebook
                          </p>
                          <p class="right-align grey-text">
                            <small className="green-text">100%</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m6">
                  <div class="card hoverable">
                    <div>
                      <div class="card medium">
                        <h6>NODEJS</h6>
                        <div class="card-content">
                          <h6 class="truncate black-text">
                            <b>About</b>
                          </h6>
                          <p class="grey-text text-darken-2">
                            NodeJS is a runtime built using the Google Chrome V8
                            engine. It is very fast!
                          </p>
                          <p class="right-align grey-text">
                            <small className="green-text">100%</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
{
  /* MY STACK SECTION END*/
}
