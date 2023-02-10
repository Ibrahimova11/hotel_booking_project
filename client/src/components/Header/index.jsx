import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__list">
          <div className="header__list-item active ">
            <FontAwesomeIcon icon={faBed} />
            <span className="header__list-item-text">Stays</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span className="header__list-item-text">Flights</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faCar} />
            <span className="header__list-item-text">Car rentals</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faBed} />
            <span className="header__list-item-text">Attractions</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span className="header__list-item-text">Airport taxis</span>
          </div>
        </div>
        <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
<p className="header__desc">
  Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account
</p>
<button className="header__btn">Sign in / Register</button>
      </div>
    </div>
  );
};

export default Index;