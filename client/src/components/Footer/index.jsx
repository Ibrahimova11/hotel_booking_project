import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Index = () => {
  return (
    <>
      <footer>
        <div className="container grid">
          <div className="box">
            <h2>ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet sectetur adipiscing elit amet
              consectetur scing elit amet consectetur adipiscing elit sed et
              eletum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet sectetur adipiscing elit amet
              consectetur scing elit amet.
            </p>
          </div>

          <div className="box">
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/destinations">Destinations</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="box post">
            <h2>RECENT POSTS</h2>
            <ul>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

                <span>01 Oct 2020</span>
              </li>
              <li>
                <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

                <span>01 Oct 2020</span>
              </li>
            </ul>
          </div>

          <div className="box">
            <h2>NEWS LETTER</h2>
            <p>Lorem ipsum dolor sit amet sectetur adipiscing elit amet</p>

            <input type="text" name="" id="" className="primary-btnn" />
            <input className="primary-btn" value="SUBSCRIBE" />
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>© 2022 All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Index;
