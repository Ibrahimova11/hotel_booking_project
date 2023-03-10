import React from "react";
import DestinationHome from "../../components/HomeSection/Destination/DestinationHome";
import Download from "../../components/HomeSection/Download";
import Hero from "../../components/HomeSection/Hero";
import HomeAbout from "../../components/HomeSection/HomeAbout";
import MostPopular from "../../components/Popular/MostPopular";
import Works from "../../components/HomeSection/Works";
import Gallery from "../../components/HomeSection/Gallery";
import Featured from "../../components/Featured";
import PropertyList from "../../components/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties";
import "./style.css"
const Index = () => {
  return (
    <div>
      <Hero />
      <div className="homeContainer">
        <Featured />
        <h1 className ="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className ="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
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
