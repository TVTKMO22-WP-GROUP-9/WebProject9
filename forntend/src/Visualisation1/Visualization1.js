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
    </Container>
  );
};

export default Visualization1;
