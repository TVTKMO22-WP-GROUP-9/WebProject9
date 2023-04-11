import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Visualization1 from "../Visualisation1/Visualization1";
import Icebergs from "../Visualisation2/Icebergs";
import IceCores from "../Visualisation2/IceCores";
import SideBySide from "./SideBySide";
import VerticalView from "./VerticalView";

const NumberPage = ({ number, page }) => {
  const [visualizationData, setVisualizationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://webproj9.oulu.azatotweb.com/visualization_view/${page.id_visualization}`
        );
        setVisualizationData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page.id_visualization]);

  return (
    <Container>
      <h1>{page.label}</h1>
      <p>{page.text}</p>
      <p>{page.id_visualization}</p>
      <p>{page.side}</p>

      {page.sideBySide === 1 ? (
        <SideBySide visualizationData={visualizationData} />
      ) : (
        <VerticalView visualizationData={visualizationData} />
      )}
    </Container>
  );
};

export default NumberPage;
