import React, { useState } from "react";
import axios from "axios";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./RegistrationPage.css";
import RegisterImage from "./karhu.jpg";

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
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <img src={RegisterImage} alt="Register" className="img-fluid mb-4" />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title mb-4 mt-1">Create Account</h4>
              {registrationSuccess ? (
                <div>
                  <p>Registration successful! Please log in.</p>
                  <Button variant="primary" onClick={navigateToLogin}>
                    Log in
                  </Button>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="formLoginUser" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="login_user"
                          value={formValues.login_user}
                          onChange={handleChange}
                          placeholder="Username"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="formFirstName" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="fname_user"
                          value={formValues.fname_user}
                          onChange={handleChange}
                          placeholder="First Name"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <Form.Group controlId="formLastName" className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="lname_user"
                          value={formValues.lname_user}
                          onChange={handleChange}
                          placeholder="Last Name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="formEmail" className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          name="email_user"
                          value={formValues.email_user}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={12}>
                      <Form.Group controlId="formPassword" className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          name="password_user"
                          value={formValues.password_user}
                          onChange={handleChange}
                          placeholder="Password"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button
                    variant="primary"
                    type="submit"
                    className="btn btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                  </Button>
                  {errorMessage && (
                    <div style={{ color: "red", marginTop: "1rem" }}>
                      {errorMessage}
                    </div>
                  )}
                </Form>
              )}
              <div className="mt-3 text-center">
                <p>
                  Already have an account?{" "}
                  <Link to="/login">Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default RegistrationForm;
