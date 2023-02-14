import React from 'react'
import DestinationHome from '../../components/HomeSection/Destination/DestinationHome'
import Hero from '../../components/HomeSection/Hero'
import HomeAbout from '../../components/HomeSection/HomeAbout'
import MostPopular from '../../components/Popular/MostPopular'

const Index = () => {
  return (
    <div>
    <Hero/>
    <HomeAbout/>
    <MostPopular/>
    <DestinationHome/>
    
    </div>
  )
}

export default Index