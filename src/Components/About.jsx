import React from "react";
import "./About.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import project1 from "./assets/Gallery.png";
import project2 from "./assets/MovieApp.png";
import project3 from "./assets/TopPop.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
      <div className="about-content row">
        <div className="about-projects col-6">
          <h4>Projects</h4>
          <div className="about-sm-flex ">
            <a
              href="https://github.com/Josipjosic/Gallery"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project1}
                alt="picture1"
                className="image-project1"
              ></img>
            </a>
            <a
              href="https://github.com/Josipjosic/movies-app-2.0"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project2}
                alt="picture2"
                className="image-project2"
              ></img>
            </a>
            <a
              href="https://github.com/Josipjosic/playlist-task"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project3}
                alt="picture3"
                className="image-project3"
              ></img>
            </a>
          </div>
          <a
            href="https://github.com/Josipjosic"
            target="_blank"
            rel="noreferrer"
          >
            More <ArrowForwardIcon />
          </a>
        </div>
        <div className="about-detail col-6">
          <h3 className="about-text">About me</h3>
          <p className="about-par1">
            Hello again! Thank you for visiting my page and I hope you enjoy it.
            As already told, I’m a frontend web developer and digital designer.
            I’m from Nasice and I’ 24. If you want to get in contact with me,
            please use some of my social media (
            <a
              href="https://www.linkedin.com/in/josip-josic-949198213/"
              className="about-link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            ;
            <a
              href="https://github.com/Josipjosic"
              className="about-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            ) Hope to hear from you.
          </p>
          <p className="about-par2">
            'For the things we have to learn before we can do them, we learn by
            doing them.' <br></br>
            <span>- Aristotle</span>
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
