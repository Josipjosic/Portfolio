import React from "react";
import "./Hero.scss";
import Sidebar from "./Sidebar";
import DownloadIcon from '@mui/icons-material/Download';
import myPDF from './assets/CV - Josip Josić.pdf'

function Hero() {

  return (
    <section className="hero" id="hero">
      <div className="container">
      <Sidebar />
      <div className="hero-content row">
        <div className="hero-detail col">
          <p>Introduction</p>
          <h3>Front-end web developer and digital designer<span className="hero-flick">.</span></h3>
          <p>
            Welcome to my portfolio page. Here you can learn more about me and
            my projects throught my journey to become a front-end web developer.
          </p>
          <a href={myPDF}  download="CV_File.pdf">Download resume <DownloadIcon viewBox="14 -10 3 31"/></a>
        </div>
        <div className="hero-title col">
          <h1 className="hero-name rfs-47">Josip <br></br> Josić</h1>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Hero;
