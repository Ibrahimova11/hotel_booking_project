import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Index = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/destinations" onClick={closeMobileMenu}>
                Destinations
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/testimonial" onClick={closeMobileMenu}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="login-area flex">
            <li>
              <Link to="/sign-in">
                <i class="fa-solid fa-chevron-right"></i>Sign in
              </Link>
            </li>
            <li>
              <Link to="/register">
                <i class="fa-solid fa-chevron-right"></i>Register
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="primary-btn">Request a Quote</button>
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Index;
