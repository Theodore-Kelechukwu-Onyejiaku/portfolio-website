import React, { useEffect } from 'react';
import Scrollspy from 'react-scrollspy';
import theo from "../assets/kc.jpg";
import linkedin from "../assets/linkedin.png";
import resume from "../assets/resume.pdf"
import ContactForm from "../components/ContactForm";
import Nav from "../components/Nav";


const Home = () => {
    useEffect(() => {
        window.addEventListener("load", () => {
            console.log("loaded")

            // BUTTONS
            let about = document.getElementById("aboutBtn");
            let stack = document.getElementById("stackBtn");
            let exp = document.getElementById("expBtn");
            let contact = document.getElementById("contBtn")
            let project = document.getElementById("proBtn");

            // SECTIONS
            let aboutSection = document.getElementById("about");
            let stackSection = document.getElementById("stack");
            let expSection = document.getElementById("experience")
            let contactSection = document.getElementById("contact")
            let proSection = document.getElementById("projects")

            project.addEventListener("click", () => {
                proSection.classList.add("animate__flipInY")
                setTimeout(() => {
                    proSection.classList.remove("animate__flipInY")
                }, 1000)
            })

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
                expSection.classList.add("animate__swing")
                setTimeout(() => {
                    expSection.classList.remove("animate__swing")
                }, 1000)
            })

            contact.addEventListener("click", () => {
                contactSection.classList.add("animate__bounceInLeft")
                setTimeout(() => {
                    contactSection.classList.remove("animate__bounceInLeft")
                }, 1000)
            })

        })
    }, [])
    return (
        <div style={{ overflow: "hidden" }}>
            <Nav />
            <div className="row">
                <div className="col s12 m2 l4">

                </div>
                <div className="col s12 m8 l4">
                    <div style={{
                        height: "100vh"
                    }}>
                        <div style={{ height: "67%", }}>
                            <img className="circle animate__animated animate__bounceInDown" src={theo} id="theo" alt="theodore" />
                            <p></p>
                            <div className="connect ">
                                <div className="row">
                                    <div className="col s4 center-align">
                                        <i className="fa fa-linkedin fa-2x" ></i>
                                    </div>
                                    <div className="col s4 center-align">
                                        <i className="fa fa-twitter fa-2x" ></i>
                                    </div>
                                    <div className="col s4 center-align">
                                        <i className="fa fa-github fa-2x" ></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p></p>
                        <div className="center-align " style={{ height: "20%" }}>
                            <a className="btn red animate__animated animate__bounce" href="#stack" id="stackBtn">My Stack</a>
                            {" "}
                            <a className="btn red animate__animated animate__swing" href="#contact" id="contBtn">Contact Me</a>
                            {" "}
                            <a className="btn red animate__animated animate__wobble" href="#about" id="aboutBtn">About Me</a>
                            <br />
                            <a className="btn red animate__animated animate__shakeX" href="#experience" id="expBtn">My Experience</a>
                            {" "}
                            <a className="btn red animate__animated animate__shakeX" href="#projects" id="proBtn">Projects</a>
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
                            <h4 className="header"><u>About Me</u></h4>
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
                                <h4 className="header"><u>My Stack</u></h4>
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
                                <h4 className="header"><u>Experience</u></h4>
                                My latest Experience is the <strong>HNG</strong> internship 8.
                            </div>
                            <div className="container">
                                <ul class="collection">
                                    <li class="collection-item">
                                        <div className="">
                                            <h5>Educative.io(Technical Writer)</h5>
                                        </div>
                                    </li>
                                    <li class="collection-item">
                                        <div>
                                            <h5><strong>Genesys Tech Hub(Backend Intern)</strong></h5>
                                        </div>
                                    </li>
                                    <li class="collection-item">
                                        <div>
                                            <h5><strong>Web Developer and Freelancer</strong></h5>

                                        </div>
                                    </li>
                                    <li class="collection-item">
                                        <div>
                                            <h5><strong>Highest Point Information Tech (Programming Tutor)</strong></h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                {/* ABOUT SECTION END */}


                {/* PROJECTS SECTION */}
                <div className="container animate__animated section" id="projects">
                    <div className="">
                        <div className="section white">
                            <div className="row container">
                                <h4 className="header"><u>Projects</u></h4>
                                <ul className="collection">
                                    <li className="collection-item">
                                        <i class="material-icons">chevron_right</i>An application that will help students(Under Construction): <a href="https://campus-foodie.netlify.app/">Link</a><br />
                                        Admin email: admin@gmail.com, password: password
                                    </li>
                                    <li className="collection-item"><i class="material-icons">chevron_right</i>A banking application : <a href="https://ctbconnectt.com/">Link</a></li>
                                    <li className="collection-item"><i class="material-icons">chevron_right</i>A courier delivery service: <a href=" https://skywaydeliveryservice.com/">Link</a></li>
                                    <li className="collection-item"><i class="material-icons">chevron_right</i>An email SMTP: <a href="https://dubaislamicbank.com">Link</a></li>
                                    <li className="collection-item"><i class="material-icons">chevron_right</i>A crypto investment platform: <a href="https://cryptoliteinvest.com/">Link</a></li>
                                    <li className="collection-item"><i class="material-icons">chevron_right</i>An E-learning platform for book recommendations(Under construction): <a href="https://naija-bookie.herokuapp.com/">Link</a></li>
                                    <li className="collection-item"><i class="material-icons">chevron_right</i>A b2b project under construction: <a href="https://myq-fe.netlify.app/">Link</a></li>
                                </ul>
                                <p>
                                    Want to see more? <a href="https://github.com/Theodore-Kelechukwu-Onyejiaku">Visit My Github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* END OF PROJECTS SECTION */}


                {/* CONTACT SECTION */}
                <div className="animate__animated section" id="contact">
                    <div className="container">
                        <div className="section white">
                            <div className="row container">
                                <h4 className="header"><u>Contact Me</u></h4>
                                <ContactForm />

                            </div>
                        </div>
                    </div>
                </div>
            </Scrollspy>
            <a href={resume} className="btn grey tooltipped" data-position="bottom" data-tooltip="I am a tooltip">Download my resume <i className="fa fa-download"></i></a>

        </div>
    )
}

export default Home;