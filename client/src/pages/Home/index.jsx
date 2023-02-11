import React from 'react'
import "./style.css"
import Header  from "../.././components/Header"
import Featured from "../../components/Featured"
import PropertyList from "../../components/PropertyList"
import FeaturedProperties from "../../components/FeaturedProperties"
const Home = () => {
  return (
    <div>
    <Header />
    <div className="home__container">
    <Featured/>
    <h1 className="home__title">Browse by property type</h1>
    <PropertyList/>
    <h1 className="home__title">Homes guests love</h1>
    <FeaturedProperties/>
    </div>
    </div>
  )
}

export default Home