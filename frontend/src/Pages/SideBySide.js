import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import Visualization1 from "../Visualisation1/Visualization1";
import IceCores from "../Visualisation2/IceCores";
import Visualization3 from "../Visualization3/Visualization3";
import Visualization4 from "../Vis4/Visualization4";
import Visualization5 from "../Visualization5/Visualization5";
import Card from "react-bootstrap/Card";

const SideBySide = ({ visualizationData }) => {
  return (
    <Row>
      {visualizationData.map((visualization) => {
        const matches = visualization.line_name.match(/Vis(\d+)/);
        if (matches) {
          const num = parseInt(matches[1], 10);
          return (
            <Col md={6} key={visualization.id_visualization_view}>
              <Card>
                {" "}
                {num === 1 && <Visualization1 />}
                {num === 2 && <IceCores />}
                {num === 3 && <Visualization3 />}
                {num === 4 && <Visualization4 />}
                {num === 5 && <Visualization5 />}
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    <h5>Discription</h5>
                    <p>{visualization.text}</p>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          );
        }
        return null;
      })}
    </Row>
  );
};

export default SideBySide;
