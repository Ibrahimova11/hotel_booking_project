import React from "react";
import DestinationHome from "../../components/HomeSection/Destination/DestinationHome";
import Download from "../../components/HomeSection/Download";
import Hero from "../../components/HomeSection/Hero";
import HomeAbout from "../../components/HomeSection/HomeAbout";
import MostPopular from "../../components/Popular/MostPopular";
import Works from "../../components/HomeSection/Works";
import Gallery from "../../components/HomeSection/Gallery";
import Featured from "../../components/Featured";
import "./style.css"
const Index = () => {
  return (
    <div>
      <Hero />
      <div className="homeContainer">
        <Featured />
      </div>
      <HomeAbout />
      <MostPopular />
      <DestinationHome />
      <Download />
      <Works />
      <Gallery />
    </div>
  );
};

export default Index;
