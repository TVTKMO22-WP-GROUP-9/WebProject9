import React, { useState } from "react";
import axios from "axios";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [formValues, setFormValues] = useState({
    login_user: "",
    fname_user: "",
    lname_user: "",
    email_user: "",
    password_user: "",
    confirm_password_user: '',
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

    if (formValues.password_user !== formValues.confirm_password_user) {
      setErrorMessage('Passwords you have entered do not match');
      setIsSubmitting(false);
      return;
    }

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
    <Card style={{ maxWidth: "500px", boxShadow: "0px 0px 10px #D3D3D3" }}>
      <Card.Img variant="left" src="RegisterImage.jpg" style={{maxHeight: "165px"}}/>
      <Card.Body>
        <Row className="text-center mt-3 mb-3" style={{ fontSize: "1.5rem"}}>
          <Col>
            <h2>Registration</h2>
          </Col>
          </Row>
          {registrationSuccess ? (
            <div>
            <p>Registration successful! Please log in.</p>
            <Button variant="primary" onClick={navigateToLogin}>
              Log in
            </Button>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formLoginUser">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="login_user"
                  name="login_user"
                  placeholder="Username"
                  value={formValues.login_user}
                  onChange={handleChange}
                  className="ml-0 mb-1" 
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label>First Name:</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="fname_user"
                  name="fname_user"
                  placeholder="First name"
                  value={formValues.fname_user}
                  onChange={handleChange}
                  className="ml-0 mb-1"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formLastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                  type="text"
                  data-testid="lname_user"
                  name="lname_user"
                  placeholder="Last name"
                  value={formValues.lname_user}
                  onChange={handleChange}
                  className="ml-0 mb-1"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formEmail">
                <Form.Label>Email address:</Form.Label>
                <Form.Control
                  type="email"
                  data-testid="email_user"
                  name="email_user"
                  placeholder="Enter email"
                  value={formValues.email_user}
                  onChange={handleChange}
                  className="ml-0 mb-1" 
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  data-testid="password_user"
                  name="password_user"
                  placeholder="Password"
                  value={formValues.password_user}
                  onChange={handleChange}
                  className="ml-0 mb-1" 
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formConfirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  data-testid="confirm_password_user"
                  name="confirm_password_user"
                  placeholder="Confirm password"
                  value={formValues.confirm_password_user}
                  onChange={handleChange}
                  className="ml-0 mb-1" 
                  required
                />
              </Form.Group>
            </Row>
            {errorMessage && (
              <div style={{ color: "red", marginBottom: "1rem" }}>
                {errorMessage}
              </div>
            )}
                <Button data-testid="registerbutton" variant="primary" type="submit" className="w-50 my-3" disabled={isSubmitting} block>
              Register
              </Button>
              <p className="mt-1">
                Already have an account?{" "}
                <Link to="/login">
                  Log in
                </Link>
              </p>
            </Form>
          )}
        </Card.Body>
      </Card>
      </Container>
      );
};

export default RegistrationForm;
