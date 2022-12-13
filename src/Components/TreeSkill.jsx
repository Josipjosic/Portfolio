import React from "react";
import "./TreeSkill.scss";
import react from "./assets/atom.png";
import figma from "./assets/figma.png";
import firebase from "./assets/Firebase.png";
import git from "./assets/git.png";
import github from "./assets/github.png";
import gmail from "./assets/Gmail.png";
import linkedin from "./assets/linkedin.png";
import material from "./assets/material.png";
import mobx from "./assets/mobx.png";
import sass from "./assets/sass.png";
import mysql from "./assets/mySQL.png";
import wordpress from "./assets/wordpress.png";
import { useInView } from "react-intersection-observer";

function TreeSkill() {
  const { ref: myRef, inView: myElementIsVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="tree" id="skills" ref={myRef}>
      <div className="container">
        <div className="text-center">
          <h3
            className={`${"fs-2"} ${myElementIsVisible ? "about-animate" : ""}`}
          >
            Details
          </h3>
          <br></br>
          <p className="fs-4 my-sm-3">
            more about tools, technologies and social media I’m currently using
          </p>
        </div>
        <div className="row text-center">
          <div className="col my-lg-5">
            <h4 className="fs-3 py-3 my-3">Technologies</h4>
            <div className="p-5 img-cont">
              <div className="img-div">
                <img src={react} alt="react-icon" className="img1"></img>React
              </div>
              <div className="img-div">
                <img src={figma} alt="figma-icon" className="img2"></img>Figma
              </div>
              <div className="img-div">
                <img src={firebase} alt="firebase-icon" className="img3"></img>Firebase
              </div>
              <div className="img-div">
                <img src={git} alt="git-icon" className="img4"></img>Git
              </div>
              <div className="img-div">
                <img src={material} alt="material-icon" className="img5"></img>MaterialUI
              </div>
              <div className="img-div">
                <img src={mobx} alt="mobx-icon" className="img6"></img>Mobx
              </div>
              <div className="img-div">
                <img src={sass} alt="sass-icon" className="img7"></img>Sass
              </div>
              <div className="img-div">
                <img src={mysql} alt="mysql-icon" className="img8"></img>MySQL
              </div>
              <div className="img-div">
                <img src={wordpress} alt="wp-icon" className="img9"></img>Wordpress
              </div>
            </div>
          </div>
          <div className="col my-lg-5">
            <h4 className="fs-3 py-3 my-3">Contact</h4>
            <div className="p-5 img-cont">
              <div className="cont-div">
                <a
                  href="https://www.linkedin.com/in/josip-josic-949198213/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={linkedin}
                    alt="linkedin-icon"
                    className="img12"
                  ></img>
                LinkedIn</a>
              </div>
              <div className="cont-div">
                {" "}
                <a
                  href="https://github.com/Josipjosic"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={github} alt="github-icon" className="img13"></img>
                GitHub</a>
              </div>

              <div className="cont-div">
                {" "}
                <img
                  src={gmail}
                  alt="gmail-icon"
                  className="img14"
                  onClick={() => {
                    window.location = "mailto:jjosic23@gmail.com";
                  }}
                ></img>Gmail
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreeSkill;
