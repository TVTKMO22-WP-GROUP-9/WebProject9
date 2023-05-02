import React, { useState } from "react";
import Select from "react-select";
import {
  Button,
  Form,
  Container,
  Col,
  Row,
  Input,
  InputGroup,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const options = [
  { value: "Vis1", label: "Visualization 1" },
  { value: "Vis2", label: "Visualization 2" },
  { value: "Vis3", label: "Visualization 3" },
  { value: "Vis4", label: "Visualization 4" },
  { value: "Vis5", label: "Visualization 5" },
];

const VisualizationForm = () => {
  const [visSelection, setVisSelection] = useState([]);
  const [url, setUrl] = useState("");
  const [visualizationName, setVisualizationName] = useState("");
  const [visualizationDesc, setVisualizationDesc] = useState("");
  const [sideBySide, setSideBySide] = useState(false);
  const [id_visualization, setId_visualization] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [countryInputs, setCountryInputs] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // construct the request body
    const requestBody = {
      lable: visualizationName,
      sideBySide: sideBySide ? 1 : 0, // convert boolean to integer
      url: url,
      text: visualizationDesc,
      user_id: localStorage.getItem("user_id"), // replace with actual user id
    };

    // make the POST request
    fetch("https://webproj9.oulu.azatotweb.com/visualization", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // access the id_visualization from the response data
        const idVisualization = data.id_visualization;
        console.log(data);
        SendRequest();
        //SendViews();
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setSubmitted(true);
      });
  };

  const navigate = useNavigate();

  const handleSideBySide = () => {
    setSideBySide(!sideBySide);
  };

  const SendRequest = async () => {
    try {
      const response = await fetch(
        `https://webproj9.oulu.azatotweb.com/last_visualization/${localStorage.getItem(
          "user_id"
        )}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("id_visualization: " + data[0].id_visualization);
      setId_visualization(data[0].id_visualization);

      // Wait for setId_visualization to complete before calling SendViews
      await SendViews(data[0].id_visualization);
    } catch (error) {
      console.error(error);
    }
  };

  const SendViews = async (id) => {
    try {
      const postRequests = visSelection.map((option, index) => {
        const visualizationViewRequestBody = {
          visualization_id: id,
          display_order: index + 1,
          line_name: option.value,
          text: countryInputs[index],
        };

        return fetch("https://webproj9.oulu.azatotweb.com/visualization_view", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(visualizationViewRequestBody),
        });
      });

      const responses = await Promise.all(postRequests);

      const responseData = await Promise.all(
        responses.map((res) => res.json())
      );
      //await navigate("/" + url);

      console.log(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleGenerateUrl = () => {
      const randomUrl = Math.random().toString(36).substring(2, 12);
      setUrl(randomUrl);
    };
    handleGenerateUrl();
  }, []);

  const OpnNewPage = () => {
    navigate("/vis/" + url);

    window.location.reload();
  };

  const handleCountryInputChange = (event, index) => {
    // copy the current country inputs array
    const newCountryInputs = [...countryInputs];

    // update the input value at the specified index
    newCountryInputs[index] = event.target.value;

    // set the new country inputs array
    setCountryInputs(newCountryInputs);
  };

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="visualizationName" className="mb-3">
              <Form.Label>Visualization Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter visualization name"
                value={visualizationName}
                onChange={(event) => setVisualizationName(event.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="visualizationSelection" className="mb-3">
              <Form.Label>Visualization Selection</Form.Label>
              <Select
                isMulti
                options={options}
                value={visSelection}
                onChange={(selectedOptions) => setVisSelection(selectedOptions)}
              />
              <br></br>
              <Form.Check
                type="switch"
                id="sideBySideSwitch"
                label="Side-by-Side"
                checked={sideBySide}
                onChange={handleSideBySide}
                style={{ textAlign: "left" }}
              />
            </Form.Group>
            <Form.Group controlId="visualizationDesc" className="mb-3">
              <Form.Label>Visualization Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter visualization description"
                value={visualizationDesc}
                onChange={(event) => setVisualizationDesc(event.target.value)}
              />
            </Form.Group>

            {visSelection.map((country, index) => (
              <InputGroup className="mb-3" key={country.value}>
                <InputGroup.Text id="basic-addon1">
                  Text for {country.label}
                </InputGroup.Text>
                <Form.Control
                  as="textarea"
                  rows={1}
                  onChange={(event) => handleCountryInputChange(event, index)}
                  placeholder="Text"
                  aria-label="Text"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            ))}
            {submitted ? (
              <div>
                <Button variant="success" onClick={OpnNewPage}>
                  Go to Visualization
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={!visualizationName || visSelection.length === 0}>
                  Create
                </Button>
              </div>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default VisualizationForm;
