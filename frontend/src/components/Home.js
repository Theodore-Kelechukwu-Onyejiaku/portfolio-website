import React, { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import theo from "../assets/kc.jpg";
import resume from "../assets/resume.pdf"
import ContactForm from "../components/ContactForm"


const Home = () => {
    return (
        <div >
            <div className="row" style={{ background: "linear-gradient(to right, #FF8235, #30E8BF" }}>
                <div className="col s12 m2 l4">

                </div>
                <div className="col s12 m8 l4
                ">
                    <div style={{
                        height: "100vh"
                    }}>
                        <div style={{ height: "67%", }}>
                            <img className="circle" src={theo} style={{ height: "100%", width: "100%", margin: "0 auto", opacity: "0.6" }} alt="theodore" />
                        </div>
                        <p></p>
                        <div className="center-align" style={{ height: "20%" }}>
                            <button class="btn red animate__animated animate__bounce" id="stack">My Stack</button>
                            {" "}
                            <button class="btn animate__animated animate__swing" id="contact">Contact Me</button>
                            {" "}
                            <button class="btn blue animate__animated animate__wobble" id="about">About Me</button>
                            <br />
                            <br />
                            <button class="btn yellow animate__animated animate__shakeX" id="experience">Experience</button>
                            <br />
                            <a href={resume} className="btn grey tooltipped" data-position="bottom" data-tooltip="I am a tooltip">Download my Resume!<i className="fa fa-download"></i></a>
                        </div>
                        <div className="white-text center-align">
                            <h6 className="animate__animated animate__rubberBand">Theodore Kelechukwu Onyejiaku(Backend Developer)</h6>
                        </div>
                    </div>
                </div>
                <div className="col s12 m2 l4">
                </div>
            </div>

            <Scrollspy items={ ['stack', 'contact', 'about', "experience"] } currentClassName="is-current">
            {/* ABOUT SECTION */}
            <div className="container">

                <div class="section white">
                    <div class="row container">
                        <h2 class="header">About Me</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                            Hi my name is <strong><span style={{ textDecoration: "undeline" }}>Theodore Kelechukwu Onyejiaku</span></strong>. I am a full-stack developer.
                            I hail from Imo State, born in Onitsha and grew up in the busy streets of Lagos.
                            My dream is to be a world-class software engineer. Study in Germany and base their.
                        </p>
                        <p>
                            My hubbies include: Singing, playing guitar, chess, making jokes and thinking.
                        </p>

                    </div>
                </div>
            <li><a href="#stack">stack</a></li>

            </div>
            {/* ABOUT SECTION END */}

            {/* MY STACK SECTION */}
            {/* ABOUT SECTION */}
            <div style={{ background: "linear-gradient(to right, #200122, #6f0000)", padding: "5% 0% 5% 0%" }}>
                <div className="container">
                    <div class="section white">
                        <div class="row container">
                            <h2 class="header">My Stack</h2>
                            <p class="grey-text text-darken-3 lighten-3">
                                I am a <strong>MERN Stack Developer!</strong> I use MongoDB as my database, ReactJs for my frontend and expressJS coupled with NodeJS as my backend technologies.
                            </p>
                            <div className="row">
                                <div className="col s12 m3">
                                    <div class="card-panel red">
                                        <h6 className="white-text">MONGODB</h6>
                                        <span class="white-text">
                                            MongoDB is a No-Sql Database that is scalable, fast, document-based and object-oriented database
                                        </span>
                                    </div>
                                </div>
                                <div className="col s12 m3">
                                    <div class="card-panel green">
                                        <h6 className="white-text">EXPRESSJS</h6>
                                        <span class="white-text">
                                            ExpressJS is a NodeJs framework for building scalable and fast server applications.
                                        </span>
                                    </div>
                                </div>
                                <div className="col s12 m3">
                                    <div class="card-panel blue">
                                        <h6 className="white-text">REACTJS</h6>
                                        <span class="white-text">
                                            ReactJS is a frontend framework for building fast and large ui applications. It is managed by Facebook
                                        </span>
                                    </div>
                                </div>
                                <div className="col s12 m3">
                                    <div class="card-panel yellow pulse">
                                        <h6 className="white-text">NODEJS</h6>
                                        <span class="white-text">
                                            NodeJS is a runtime built using the Google Chrome V8 engine. It is very fast!
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* MY STACK SECTION END*/}

            {/* EXPERIENCE SECTION */}
            <div className="container">

                <div class="section white">
                    <div class="row container">
                        <h2 class="header">Latest Experience</h2>
                        <p class="grey-text text-darken-3 lighten-3">
                            My latest Experience is the <strong>HNG</strong> internship 8.
                        </p>

                    </div>
                </div>
            </div>
            {/* ABOUT SECTION END */}


            {/* CONTACT SECTION */}
            <div style={{ background: "linear-gradient(to right, #200122, #6f0000)", padding: "5% 0% 5% 0%" }}>
                <div className="container">
                    <div class="section white">
                        <div class="row container">
                    <h2 class="header">Contact Me</h2>
                            <ContactForm/>
                            <a href={resume} className="btn grey tooltipped" data-position="bottom" data-tooltip="I am a tooltip">Download my resume <i className="fa fa-download"></i></a>

                        </div>
                    </div>
                </div>
            </div>
            </Scrollspy>
        </div>
    )
}

export default Home;