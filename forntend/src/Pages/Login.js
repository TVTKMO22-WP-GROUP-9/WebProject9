<<<<<<< HEAD
import React from 'react'
import axios from 'axios'

export default function Login() {


    const [id_user, setId_User] = React.useState('')
    const [password, setPassword] = React.useState('')

    //use axios with x-www-form-urlencoded to send data to the backend

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            id_user: id_user,
            password_user: password
        }
        axios.post('http://localhost:3001/login', data)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }


   



    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="id_user" value={id_user} onChange={(e) => setId_User(e.target.value)} placeholder="id_user" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
=======
import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");
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

      setToken(response.data.token);
      setIsLoading(false);
      history("/home");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setResponseText("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      )}
      <p>Web token: {token}</p>
      <p>{responseText}</p>
    </div>
  );
};

export default LoginPage;
>>>>>>> main
