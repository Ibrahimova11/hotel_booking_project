import React, { useState } from "react";
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
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

const Index = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
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
        { type!=="list" && 
          <>
            <h1 className="header__title">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="header__desc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="header__btn">Sign in / Register</button>
            <div className="header__search">
              <div className="header__search-item">
                <FontAwesomeIcon icon={faBed} className="header__icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header__search-input"
                ></input>
              </div>
              <div className="header__search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header__icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header__search-text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )} `}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />
                )}
              </div>
              <div className="header__search-item">
                <FontAwesomeIcon icon={faPerson} className="header__icon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="header__search-text"
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room `}
                </span>

                {openOptions && (
                  <div className="options">
                    <div className="options__item">
                      <span className="options__text">Adult</span>
                      <div className="options__counter">
                        <button
                          disabled={options.adult <= 1}
                          className="options__counter__button"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter__number">
                          {options.adult}
                        </span>
                        <button
                          className="options__counter__button"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options__item">
                      <span className="options__text">Children</span>
                      <div className="options__counter">
                        <button
                          disabled={options.children <= 0}
                          class="options__counter__button"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter__number">
                          {options.children}
                        </span>
                        <button
                          className="options__counter__button"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options__item">
                      <span className="options__text">Room</span>
                      <div className="options__counter">
                        <button
                          disabled={options.room <= 1}
                          className="options__counter__button"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter__number">
                          {options.room}
                        </span>
                        <button
                          className="options__counter__button"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__search-item">
                <button className="header__btn">Search</button>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default Index;
