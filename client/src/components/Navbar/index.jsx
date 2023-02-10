import React from 'react'
import styled from "./style.module.css"
const Index = () => {
  return (
    <div className={styled.navbar}>
      <div className={styled.navbar__container}>
        <span className={styled.navbar__logo}>Hotel booking</span>
        <div className={styled.navbar__items}>
          <button className={styled.navbar__button}>Register</button>
          <button className={styled.navbar__button}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Index