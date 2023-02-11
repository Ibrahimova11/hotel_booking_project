import React from 'react'
import "./style.css"
import Header  from "../.././components/Header"
import Featured from "../../components/Featured"
const Home = () => {
  return (
    <div>
    <Header />
    <div className="home__container">
    <Featured/>
    
    </div>
    </div>
  )
}

export default Home