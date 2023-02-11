import React from 'react'
import "./style.css"
import Header  from "../.././components/Header"
import Featured from "../../components/Featured"
import PropertyList from "../../components/PropertyList"
const Home = () => {
  return (
    <div>
    <Header />
    <div className="home__container">
    <Featured/>
    <h1 className="home__title">Browse by property type</h1>
    <PropertyList/>
    </div>
    </div>
  )
}

export default Home