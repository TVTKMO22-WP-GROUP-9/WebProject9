import React from "react";
import { Row, Col } from "react-bootstrap";
import Visualization1 from "../Visualisation1/Visualization1";
import IceCores from "../Visualisation2/IceCores";
import Visualization3 from "../Visualization3/Visualization3";

const SideBySide = ({ visualizationData }) => {
  return (
    <Row>
      {visualizationData.map((visualization) => {
        const matches = visualization.line_name.match(/Vis(\d+)/);
        if (matches) {
          const num = parseInt(matches[1], 10);
          return (
            <Col md={6} key={visualization.id_visualization_view}>
              {num === 1 && <Visualization1 />}
              {num === 2 && <IceCores />}
              {num === 3 && <Visualization3 />}
              {num === 4 && <IceCores />}
              {num === 5 && <IceCores />}
            </Col>
          );
        }
        return null;
      })}
    </Row>
  );
};

export default SideBySide;
