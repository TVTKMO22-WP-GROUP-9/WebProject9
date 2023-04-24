import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyVisualizations = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://webproj9.oulu.azatotweb.com/visualization"
        );
        setPages(
          response.data.filter(
            (page) => page.user_id == localStorage.getItem("user_id")
          )
        );

        console.log(pages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const deleteVisualization = (id, lable) => {
    axios
      .delete(`https://webproj9.oulu.azatotweb.com/visualization/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPages(pages.filter((page) => page.id_visualization !== id));
        toast.success("Visualization " + lable + " deleted successfully!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <Container>
        <h1>My Pages</h1>
        <Row xs={1} md={2} lg={3}>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Create New Visualization</Card.Title>
                <Card.Text>Start a new visualization from scratch</Card.Text>
                <Button as={Link} to="/makeVisualization">
                  Create
                </Button>
              </Card.Body>
            </Card>
          </Col>
          {pages.reverse().map((page) => (
            <Col key={page.id_visualization}>
              <Card>
                <Card.Body>
                  <Card.Title>{page.lable}</Card.Title>
                  <Card.Text>{page.text}</Card.Text>
                  <Button as={Link} to={"/" + page.url}>
                    View
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      deleteVisualization(page.id_visualization, page.lable)
                    }>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default MyVisualizations;
