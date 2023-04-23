import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    login_user: "",
    fname_user: "",
    lname_user: "",
    email_user: "",
    password_user: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        "https://webproj9.oulu.azatotweb.com/registaration",
        formValues
      );
      console.log(response.data); // handle success response here
      setRegistrationSuccess(true);
    } catch (error) {
      console.error(error);
      setErrorMessage("Registration failed. Please try again.");
    }

    setIsSubmitting(false);
  };

  const navigateToLogin = () => {
    navigation("/login");
  };

  const navigation = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <h1>Registration</h1>
          <br></br>

          {registrationSuccess ? (
            <div>
              <p>Registration successful! Please log in.</p>
              <Button variant="primary" onClick={navigateToLogin}>
                Log in
              </Button>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formLoginUser">
                <Form.Label>Login User</Form.Label>
                <Form.Control
                  type="text"
                  name="login_user"
                  value={formValues.login_user}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname_user"
                  value={formValues.fname_user}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname_user"
                  value={formValues.lname_user}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email_user"
                  value={formValues.email_user}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password_user"
                  value={formValues.password_user}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              {errorMessage && (
                <div style={{ color: "red", marginBottom: "1rem" }}>
                  {errorMessage}
                </div>
              )}
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                Register
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
