import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import loginImage from "./login.jpg";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseText, setResponseText] = useState("");

  const history = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // prevent page reload
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://webproj9.oulu.azatotweb.com/login",
        //"http://localhost:3000/login",
        {
          login_user: username,
          password_user: password,
        }
      );
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("user_name", username);

      setIsLoading(false);
      history("/home");
      window.location.reload();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setResponseText("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <img src={loginImage} alt="login" className="login-image" />
        <form className="form" onSubmit={handleLogin}>
          <h1 className="login-message">Login to Continue</h1>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {isLoading ? (
            <button type="submit" className="btn" disabled>
              <i className="fa fa-spinner fa-spin"></i> Logging in...
            </button>
          ) : (
            <button type="submit" className="btn">
              Login
            </button>
          )}
              <div className="mt-3 text-center">
                <p>
                  Not registered?{" "}
                  <Link to="/registration">Create an account</Link>
                </p>
                </div>
          {responseText && <p className="error">{responseText}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
