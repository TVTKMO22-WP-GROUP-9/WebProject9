import React, { useState } from "react";
import HadcrutReconstructionAnnual from "./HadcrutReconstructionAnnual";
import HadcrutReconstructionMonthly from "./HadcrutReconstructionMonthly";
import Form from "react-bootstrap/Form";
import { Container, Col, Row } from "react-bootstrap";

const Visualization1 = () => {
  const [selectedComponent, setSelectedComponent] = useState("Annual");

  const handleSelection = (event) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Form.Select id="componentSelector" onChange={handleSelection}>
          <option value="Annual">Annual</option>
          <option value="Monthly">Monthly</option>
        </Form.Select>
      </Row>
      <Row>
        {selectedComponent === "Annual" && <HadcrutReconstructionAnnual />}
        {selectedComponent === "Monthly" && <HadcrutReconstructionMonthly />}
      </Row>
      <Row>
        <p>
          Global historical surface temperature anomalies from January 1850
          onwards
        </p>
        <p>
          Description and dataset{" "}
          <a href="https://www.metoffice.gov.uk/hadobs/hadcrut5/">
            https://www.metoffice.gov.uk/hadobs/hadcrut5/
          </a>
        </p>
      </Row>
      <Row>
        <p>
          Northern Hemisphere 2,000-year temperature reconstruction:{" "}
          <a href="https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005">
            Description
          </a>{" "}
          and{" "}
          <a href="https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt">
            Dataset
          </a>
        </p>
      </Row>
    </Container>
  );
};

export default Visualization1;
