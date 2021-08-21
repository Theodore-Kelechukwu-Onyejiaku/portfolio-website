import React, { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import theo from "../assets/kc.jpg";
import resume from "../assets/resume.pdf"
import ContactForm from "../components/ContactForm"


const Home = () => {
    useEffect(() => {
        window.addEventListener("load", () => {
            console.log("loaded")

            // BUTTONS
            let about = document.getElementById("aboutBtn");
            let stack = document.getElementById("stackBtn");
            let exp = document.getElementById("expBtn");

            // SECTIONS
            let aboutSection = document.getElementById("about");
            let stackSection = document.getElementById("stack");
            let expSection = document.getElementById("experience")

            about.addEventListener("click", () => {
                aboutSection.classList.add("animate__rubberBand")
                setTimeout(() => {
                    aboutSection.classList.remove("animate__rubberBand")
                }, 1000)
            })

            stack.addEventListener("click", () => {
                stackSection.classList.add("animate__swing")
                setTimeout(() => {
                    stackSection.classList.remove("animate__swing")
                }, 1000)
            })

            exp.addEventListener("click", () => {
                console.log("exp oyaa")
                expSection.classList.add("animate__swing")
                setTimeout(() => {
                    expSection.classList.remove("animate__swing")
                }, 1000)
            })

        })
    }, [])
    return (
        <div style={{ overflow: "hidden" }}>
            <div className="row">
                <div className="col s12 m2 l4">

                </div>
                <div className="col s12 m8 l4">
                    <div style={{
                        height: "100vh"
                    }}>
                        <div style={{ height: "67%", }}>
                            <img className="circle animate__animated animate__bounceInDown" src={theo} id="theo" alt="theodore" />
                        </div>
                        <p></p>
                        <div className="center-align" style={{ height: "20%" }}>
                            <a className="btn red animate__animated animate__bounce" href="#stack" id="stackBtn">My Stack</a>
                            {" "}
                            <a className="btn red animate__animated animate__swing" href="#contact">Contact Me</a>
                            {" "}
                            <a className="btn red animate__animated animate__wobble" href="#about" id="aboutBtn">About Me</a>
                            <br />
                            <a className="btn red animate__animated animate__shakeX" href="#experience" id="expBtn">My Experience</a>
                            {" "}
                            <a className="btn red animate__animated animate__shakeX" href="#">Projects</a>
                            <p></p>
                            <a href={resume} className="btn grey tooltipped" data-position="bottom" data-tooltip="I am a tooltip">Download my Resume<i className="fa fa-download"></i></a>
                            <h6 className="animate__animated animate__rubberBand">Theodore Kelechukwu Onyejiaku(Backend Developer)</h6>

                        </div>
                    </div>
                </div>
                <div className="col s12 m2 l4">
                </div>
            </div>

            <Scrollspy items={['section-1', 'section-2', 'section-3']} currentClassName="is-current">
                {/* ABOUT SECTION */}
                <div className="container animate__animated section" id="about" >

                    <div className="section white">
                        <div className="row container">
                            <h4 className="header">About Me</h4>
                            <p className="grey-text text-darken-3 lighten-3">
                                Hi my name is <strong><span style={{ textDecoration: "undeline" }}>Theodore Kelechukwu Onyejiaku</span></strong>. I am a full-stack developer.
                                I hail from Imo State, born in Onitsha and grew up in the busy streets of Lagos.
                                My dream is to be a world-class software engineer. Study in Germany and base their.
                            </p>
                            <p>
                                My hubbies include: Singing, playing guitar, chess, making jokes and thinking.
                            </p>

                        </div>
                    </div>


                </div>
                {/* ABOUT SECTION END */}

                {/* MY STACK SECTION */}
                <div className="container animate__animated section" id="stack" >
                    <div className="">
                        <div className="section white">
                            <div className="row container ">
                                <h4 className="header">My Stack</h4>
                                <p className="grey-text text-darken-3 lighten-3">
                                    I am a <strong>MERN Stack Developer!</strong> I use MongoDB as my database, ReactJs for my frontend and expressJS coupled with NodeJS as my backend technologies.

                                </p>
                                <div className="row">
                                    <div className="col s12 m6">
                                        <div class="card hoverable">
                                            <div>
                                                <div class="card medium">
                                                    <h6 >MONGODB</h6>
                                                    <div class="card-content">
                                                        <h6 class="truncate black-text"><b>About</b></h6>
                                                        <p class="grey-text text-darken-2">
                                                            MongoDB is a No-Sql Database that is scalable, fast, document-based and object-oriented database
                                                        </p>
                                                        <p class="right-align grey-text"><small className="green-text">T</small></p>
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
                                                        <h6 class="truncate black-text"><b>About</b></h6>
                                                        <p class="grey-text text-darken-2">
                                                            ExpressJS is a NodeJs framework for building scalable and fast server applications.
                                                        </p>
                                                        <p class="right-align grey-text"><small className="green-text">100%</small></p>
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
                                                        <h6 class="truncate black-text"><b>About</b></h6>
                                                        <p class="grey-text text-darken-2">
                                                            ReactJS is a frontend framework for building fast and large ui applications. It is managed by Facebook
                                                        </p>
                                                        <p class="right-align grey-text"><small className="green-text">100%</small></p>
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
                                                    <h6>REACTJS</h6>
                                                    <div class="card-content">
                                                        <h6 class="truncate black-text"><b>About</b></h6>
                                                        <p class="grey-text text-darken-2">
                                                NodeJS is a runtime built using the Google Chrome V8 engine. It is very fast!
                                                        </p>
                                                        <p class="right-align grey-text"><small className="green-text">100%</small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* MY STACK SECTION END*/}
                <div className="row">

                </div>
                {/* EXPERIENCE SECTION */}
                
                <div className="container animate__animated section" id="experience">
                    <div className="">
                        <div className="section white">
                            <div className="row container">
                                <h4 className="header">Latest Experience</h4>
                                <p className="">
                                    My latest Experience is the <strong>HNG</strong> internship 8.
                                </p>
                            </div>
                            {/* <div className="container">
                                <ul class="collection">
                                    <li class="collection-item">
                                        <div>
                                            <h5>Educative.io(Technical Writer)</h5>
                                            <p>
                                                <i class="material-icons">chevron_right</i>
                                                I write articles on this platform. I am also a Gold contributor. This means that I get paid for writing articles!
                                            </p>
                                        </div>
                                    </li>
                                    <li class="collection-item">
                                        <div>
                                            <h5>Educative.io(Technical Writer)</h5>
                                            <p>
                                                <i class="material-icons">chevron_right</i>
                                                I write articles on this platform. I am also a Gold contributor. This means that I get paid for writing articles!
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div> */}

                        </div>
                    </div>
                </div>
                {/* ABOUT SECTION END */}



                {/* CONTACT SECTION */}
                <div className="animate__animated section" id="contact">
                    <div className="container">
                        <div className="section white">
                            <div className="row container">
                                <h4 className="header">Contact Me</h4>
                                <ContactForm />
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