import React from 'react'
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import HeadTitle from "../../components/HeadTitle";
import axios from "axios";
import "./style.css";
const Index = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
};
const handleClick = async (e) => {
  e.preventDefault();
  dispatch({ type: "LOGIN_START" });

  try {
    const res = await axios.post(
      "http://localhost:8080/api/auth/register",
      user
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    navigate("/");
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  }
};

  return (
    <>
    <HeadTitle />
    <section className="forms top">
      <div className="container">
        <div className="sign-box">
          <p>Create an account and enjoy the benefits of our website!</p>
          <form action="">
            
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className="lInput"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleChange}
              className="lInput"
            />

            <button
              disabled={loading}
              onClick={handleClick}
              type="submit"
              className="primary-btn"
            >
             Create an Account 
            </button>
            {error && <span>{error.message}</span>}
            
          </form>
        </div>
      </div>
    </section>
  </>   
  )
}

export default Index