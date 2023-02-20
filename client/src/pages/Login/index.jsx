import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import HeadTitle from "../../components/HeadTitle"
import "./style.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        credentials
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
            <p>
              Enter your e-mail and password below to log in to your account and
              use the benefits of our website.
            </p>
            <form action="">
              <input
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
                className="lInput"
              />
              <input
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
                className="lInput"
              />

              <div className="flex_space">
                <div className="flex">
                  <input type="checkbox" />
                  <label>Remember Me</label>
                </div>
                <div className="flex">
                  <span>I forgot my password</span>
                </div>
              </div>

              <button
                disabled={loading}
                onClick={handleClick}
                type="submit"
                className="primary-btn"
              >
                Sign In
              </button>
              {error && <span>{error.message}</span>}
              <p>
                Don't have account? <Link to="/register">Signup!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
