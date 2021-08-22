import React, { useEffect, useState } from "react";
import Hamburger from 'hamburger-react'

const Nav = () => {
    const [isOpen, setOpen] = useState(false)
    useEffect(() => {
        window.addEventListener("load", () => {
            let myNav = document.querySelector(".my-nav");
            let allLinks = document.querySelectorAll(".my-nav-link");

            //  LINKS
            let aboutLink = document.getElementById("aboutLink");
            let contactLink = document.getElementById("contactLink");
            let stackLink = document.getElementById("stackLink");
            let expLink = document.getElementById("expLink");
            let projectLink = document.getElementById("projectLink");


            // SECTIONS
            let aboutSection = document.getElementById("about");
            let stackSection = document.getElementById("stack");
            let expSection = document.getElementById("experience")
            let contactSection = document.getElementById("contact")
            let proSection = document.getElementById("projects")

            console.log("tooggllee "+isOpen)
            allLinks.forEach(eachLink => {
                eachLink.addEventListener("click", () => {
                    myNav.classList.remove("animate__slideInRight");
                    myNav.classList.add("animate__fadeOutRight");
                    closeCurtain();
                })
            })

            aboutLink.addEventListener("click", ()=>{
                    aboutSection.classList.add("animate__rubberBand")
                    setTimeout(() => {
                        aboutSection.classList.remove("animate__rubberBand")
                    }, 1000)
            })

            projectLink.addEventListener("click", ()=>{
                proSection.classList.add("animate__flipInY")
                setTimeout(() => {
                    proSection.classList.remove("animate__flipInY")
                }, 1000)
            })

            contactLink.addEventListener("click", ()=>{
                contactSection.classList.add("animate__bounceInLeft")
                setTimeout(() => {
                    contactSection.classList.remove("animate__bounceInLeft")
                }, 1000)
            })

            expLink.addEventListener("click", ()=>{
                expSection.classList.add("animate__swing")
                setTimeout(() => {
                    expSection.classList.remove("animate__swing")
                }, 1000)
            })

            stackLink.addEventListener("click", ()=>{
                stackSection.classList.add("animate__swing")
                setTimeout(() => {
                    stackSection.classList.remove("animate__swing")
                }, 1000)
            })
        })
    }, [])
    const closeCurtain = ()=>{
        setOpen(!isOpen)
    }   
    return (
        <>
            <div className="ham-cont">
                <Hamburger color="grey" toggled={isOpen} toggle={setOpen} id="ham" onToggle={toggled => {
                    console.log("The state is " + isOpen)
                    let myNav = document.querySelector(".my-nav");
                    if (toggled) {
                        // open a menu
                        myNav.style.width = "100%"
                        myNav.classList.remove("animate__fadeOutRight")
                        myNav.classList.add("animate__slideInRight")
                    } else {
                        // close a menu
                        myNav.classList.remove("animate__slideInRight")
                        myNav.classList.add("animate__fadeOutRight")
                    }
                }} />
            </div>
            <div className="my-nav animate__animated ">
                <div className="ham">
                </div>
                <div className="my-nav-link-container">
                    <a className="my-nav-link" href="#about" id="aboutLink" onClick={closeCurtain}>About Me</a>
                    <a className="my-nav-link" href="#stack" id="stackLink" onClick={closeCurtain}>My Stack</a>
                    <a className="my-nav-link" href="#experience" id="expLink" onClick={closeCurtain}>Experience</a>
                    <a className="my-nav-link" href="#projects" id="projectLink" onClick={closeCurtain}>Projects</a>
                    <a className="my-nav-link" href="#contact" id="contactLink" onClick={closeCurtain}>Contact Me</a>

                </div>
            </div>
        </>
    )
}

export default Nav;