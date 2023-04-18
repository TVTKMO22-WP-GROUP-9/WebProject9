import React, { useState } from "react";
import SectorSub from "./SectorSub";
import SectorFurther from "./SectorFurther";
import Form from "react-bootstrap/Form";
import { Container, Col, Row } from "react-bootstrap";

const Visualization5 = () => {
  const [selectedComponent, setSelectedComponent] = useState("SectorSub");

  const handleSelection = (event) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Form.Select id="componentSelector" onChange={handleSelection}>
          <option value="SubSector">SubSector</option>
          <option value="SectorFurther">SubSectorFurther</option>
        </Form.Select>
      </Row>
      <Row>
        {selectedComponent === "SubSector" && <SectorSub data={data2} />}
        {selectedComponent === "SectorFurther" && <SectorFurther data={data3} />}
      </Row>
    </Container>
  );
};

export default Visualization5;