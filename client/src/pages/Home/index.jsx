import React from 'react'
import DestinationHome from '../../components/HomeSection/Destination/DestinationHome'
import Download from '../../components/HomeSection/Download'
import Hero from '../../components/HomeSection/Hero'
import HomeAbout from '../../components/HomeSection/HomeAbout'
import MostPopular from '../../components/Popular/MostPopular'
import Works from '../../components/HomeSection/Works'
const Index = () => {
  return (
    <div>
    <Hero/>
    <HomeAbout/>
    <MostPopular/>
    <DestinationHome/>
    <Download/>
    <Works/>
    </div>
  )
}

export default Index