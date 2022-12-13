import React from "react";
import "./Hero.scss";
import Sidebar from "./Sidebar";
import DownloadIcon from "@mui/icons-material/Download";
import myPDF from "./assets/CV - Josip Josić.pdf";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container ">
        <Sidebar />
        <div className="row mx-auto">
          <div className="col-lg text-center text-lg-end py-md-5 px-md-5">
            <p className="fs-4 p1">Introduction</p>
            <h2 className="fs-2">
              Front-End web developer <span className="title-and">&</span> digital designer
              <span className="hero-flick">.</span>
            </h2>
            <p className="fs-4 p2">
              Welcome to my portfolio page. Here you can learn more about me and
              my projects throught my journey to become a Front-End web
              developer.
            </p>
            <a href={myPDF} download="CV_File.pdf" className="link fs-5">
              Curriculum Vitae <DownloadIcon viewBox="12 -10 5 25" />
            </a>
          </div>
          <div className="col-md text-center py-md-5 ">
            <h1 className="title fs-1 mx-sm-5">
              Josip <br></br> Josić
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
