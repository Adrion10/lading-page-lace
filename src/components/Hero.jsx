import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Diving" className="hero__image" />
      <h1 className="hero__title">Diving is fun</h1>
    </div>
  );
};
export default Hero;
