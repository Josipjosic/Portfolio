import React from "react";
import "./TreeSkill.scss";
import react from "./assets/atom.png";
import figma from "./assets/figma.png";
import facebook from "./assets/facebook.png";
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

function TreeSkill() {
  return (
    <section className="tree" id="skills">
      <div className="container">
        <div className="tree-title">
          <h3>Tree of details</h3>
          <br></br>
          <p>
            more about tools, technologies and social media I’m currently using
          </p>
        </div>
        <div className="tree-content row justify-content-evenly">
          <div className="tree-techn col-5">
            <h4>Technologies</h4>
            <div>
              <img src={react} alt="react-icon" className="img1"></img>
              <img src={figma} alt="figma-icon" className="img2"></img>
              <img src={firebase} alt="firebase-icon" className="img3"></img>
              <img src={git} alt="git-icon" className="img4"></img>
              <br></br>
              <img src={material} alt="material-icon" className="img5"></img>
              <img src={mobx} alt="mobx-icon" className="img6"></img>
              <img src={sass} alt="sass-icon" className="img7"></img>
              <img src={mysql} alt="mysql-icon" className="img8"></img>
              <img src={wordpress} alt="wp-icon" className="img9"></img>
            </div>
          </div>
          <div className="tree-contact col-5 ">
            <h4>Contact</h4>
            <div>
              <a
                href="https://www.facebook.com/josic12"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="react-icon" className="img11"></img>
              </a>
              <a
                href="https://www.linkedin.com/in/josip-josic-949198213/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="linkedin-icon" className="img12"></img>
              </a>
              <a
                href="https://github.com/Josipjosic"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github-icon" className="img13"></img>
              </a>

              <img
                src={gmail}
                alt="gmail-icon"
                className="img14"
                onClick={() => {
                  window.location = "mailto:jjosic23@gmail.com";
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreeSkill;
