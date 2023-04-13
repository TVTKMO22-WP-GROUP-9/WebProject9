import React from "react";
import { Row, Col } from "react-bootstrap";
import Visualization1 from "../Visualisation1/Visualization1";
import IceCores from "../Visualisation2/IceCores";

const VerticalView = ({ visualizationData }) => {
  return (
    <>
      {visualizationData.map((visualization) => {
        const matches = visualization.line_name.match(/Vis(\d+)/);
        if (matches) {
          const num = parseInt(matches[1], 10);
          return (
            <Row key={visualization.id_visualization_view}>
              {num === 1 && <Visualization1 />}
              {num === 2 && <IceCores />}
              {num === 3 && <IceCores />}
              {num === 4 && <IceCores />}
              {num === 5 && <IceCores />}
            </Row>
          );
        }
        return null;
      })}
    </>
  );
};

export default VerticalView;
