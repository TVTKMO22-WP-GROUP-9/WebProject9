import React, { useState } from "react";
import axios from "axios";
import { Container, Card, Form, Button, Spinner } from "react-bootstrap";
import loginImage from "./loginImage.jpg";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./Login.css";

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
    <Container className="d-flex justify-content-center mt-5">
      <Card style={{ maxWidth: "425px", boxShadow: "0px 0px 10px #D3D3D3" }}>
      <Card.Img variant="top" src={loginImage}/>
      <div className="text-center" style={{ position: "relative" }}>
          <Card.Body>
            <h2 className="text-center mt-3 mb-4" style={{ fontSize: "1.5rem" }}>
              Login to continue
            </h2>
            <Form className="form" onSubmit={handleLogin}>
            <Form.Group controlId="username" >
            <Form.Label className="text-left">Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
              className="ml-0 mb-3" style={{ width: "300px", margin: "0 auto", display: "block" }}
            />
            </Form.Group>
            <Form.Group controlId="password">
            <Form.Label className="text-left">Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="ml-0 mb-3"
              style={{ width: "300px", margin: "0 auto", display: "block" }}
            />
            </Form.Group>
              {isLoading ? (
                <Button variant="primary" type="submit" style={{ marginTop: "1rem" }} disabled>
                <Spinner animation="border" size="sm" />
                  Logging in...
                </Button>
              ) : (
                <Button variant="primary" type="submit" className="w-50 my-3">
                  Login
                </Button>
              )}
              {responseText && (
                <p className="error mt-3" style={{ fontSize: "0.9rem" }}>
                  {responseText}
                </p>
              )}
            </Form>
            <p className="mt-1 mb-5 text-center">
              Not registered?{" "}
              <Link to="/registration">
                Create an account
              </Link>
            </p>
          </Card.Body>
        </div>
      </Card>
    </Container>
  );
};

export default LoginPage;
