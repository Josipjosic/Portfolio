import React from "react";
import { useInView } from 'react-intersection-observer';
import "./About.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import project1 from "./assets/Gallery.png";
import project2 from "./assets/MovieApp.png";
import project3 from "./assets/TopPop.png";

function About() {

  const { ref: myRef, inView: myElementIsVisible } = useInView({triggerOnce: true});



  return (
    <section className="about" id="about" ref={myRef} >
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <h4 className={`${"fs-2 text-center"} ${myElementIsVisible ? "about-animate" : ""}`}>Projects</h4>
          <div className="projects text-center">
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
            className="link-tab text-lg-start text-center"
            href="https://github.com/Josipjosic"
            target="_blank"
            rel="noreferrer"
          >
            More <ArrowForwardIcon />
          </a>
        </div>
        <div className="col ">
          <h3 className={`${"fs-2 text-center"} ${myElementIsVisible ? "about-animate" : ""}`}>About me</h3>
          <p className="fs-4 text-lg-center ">
            Hello again<span className="hero-flick">!</span> Thank you for visiting my page and I hope you enjoy it.
            As already told, I’m a Front-End web developer and digital designer.
            I’m from Nasice and I’m 24. If you want to get in contact with me,
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
            ). Down below you can find some of the technologies I'm familiar with and worked with in the past.
          </p>
          <p className="fs-5 text-center about-part-2">
            'For the things we have to learn before we can do them, we learn by
            doing them.' <br></br>
            <span>- Aristotle</span>
          </p>
        </div>
      </div>
      </div >
    </section>
  );
}

export default About;
