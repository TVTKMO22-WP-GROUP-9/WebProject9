import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, ListGroup, Card } from "react-bootstrap";

class Home extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/mainimage.jpg)`,
      backgroundSize: "cover",
      minHeight: "100vh",
    };

    return (
      <div style={backgroundStyle}>
        <Container>
          <Row>
            <Col
              className="my-5"
              xs={{ span: 10, offset: 1 }}
              md={{ span: 8, offset: 2 }}
              style={{ color: "#146C94" }}>
              <div className="text-right">
                <Card style={{ backgroundColor: "#AFD3E2" }}>
                  <Card.Body>
                    <Card.Title>Ilmi!</Card.Title>
                    <Card.Text>
                      The ClimateData web application is a tool for visualizing
                      climate data. The front-end of the application is built
                      using the React framework, which allows for a fast and
                      responsive user interface. The data visualization features
                      are powered by JavaScript and NodeJS on the back-end,
                      which enables efficient data processing and real-time
                      updates.
                    </Card.Text>
                    <Card.Text>
                      The main goal of the ClimateData web application is to
                      provide users with an intuitive and easy-to-use interface
                      for exploring climate data. The data is presented in
                      various forms, including graphs, charts, and maps, and
                      users can customize the display settings to suit their
                      preferences.
                    </Card.Text>
                    <Card.Text>
                      The application also includes features such as real-time
                      data updates and data filtering, which allow users to stay
                      up-to-date with the latest climate information and focus
                      on specific areas of interest. Additionally, the
                      application provides educational resources and information
                      on climate change, which can help users gain a better
                      understanding of the issues and challenges related to
                      climate change.
                    </Card.Text>
                    <Card.Text>
                      To get started, simply create an account or login if you
                      already have one.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>

          <Row>
            {localStorage.getItem("token") ? (
              <>
                <Container style={{ maxWidth: "500px" }}>
                  {" "}
                  <ListGroup defaultActiveKey="makeVisualization">
                    <ListGroup.Item action href="makeVisualization">
                      New Visualization
                    </ListGroup.Item>
                    <ListGroup.Item action href="myVisualizations">
                      My Visualizations
                    </ListGroup.Item>
                    <ListGroup.Item action href="home">
                      Home
                    </ListGroup.Item>
                  </ListGroup>
                </Container>
              </>
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
          <br></br>
        </Container>
      </div>
    );
  }
}

export default Home;
