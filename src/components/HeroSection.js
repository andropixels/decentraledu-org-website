import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="https://github.com/Decentraledu/decentraledu-org-website/blob/959c4ec128a2f4b0de46471ac0d9fdee24037ade/src/assets/videos/video-2.mp4"
        autoPlay
        loop
        muted
      />
      <h1>Decentralized Education Metaverse</h1>
      <p>
        New form of online education in fun, transparent and decentralized way.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH DEMO <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
