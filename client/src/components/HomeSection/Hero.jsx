import React from "react";
import SlideData from "../../api/SlideData";
import Slide from "./Slide";
import './style.css';

const Hero = () => {
  return (
    <div>
      <Slide slides={SlideData} />
    </div>
  );
};

export default Hero;
