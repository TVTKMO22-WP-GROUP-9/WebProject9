import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="text-center my-5">
            <h1>Hello!</h1>
            <p>This is the home page.</p>
          </Col>
        </Row>

        <Row>
          {localStorage.getItem("token") ? (
            <></>
          ) : (
            <>
              <Col className="text-center">
                <Link to="/login">
                  <Button variant="outline-primary" className="mr-3">
                    Login
                  </Button>
                </Link>
                <Link to="/registration">
                  <Button variant="outline-secondary">Register</Button>
                </Link>
              </Col>
            </>
          )}
        </Row>
      </Container>
    );
  }
}

export default Home;
