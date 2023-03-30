import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Container, Col, Row } from "react-bootstrap";

import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Reconstruction() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      const res = await fetch(
        "https://webproj9.oulu.azatotweb.com/reconstruction"
      );
      const data = await res.json();

      console.log(data); // log the fetched data to the console

      const chartData = {
        labels: data.map((item) => item.Year),
        datasets: [
          {
            label: "Reconstruction",
            data: data.map((item) => item.T),
            fill: false,
            borderColor: "rgb(60, 192, 192)",
            tension: 0.1,
          },
        ],
      };

      setChartData(chartData);
    };

    fetchChartData();
  }, []);
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <h1>Reconstruction</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col>
          {chartData.labels && chartData.datasets ? (
            <Line
              data={chartData}
              options={{
                layout: {
                  padding: {
                    top: 10,
                    bottom: 10,
                    left: 20,
                    right: 20,
                  },
                },
              }}
            />
          ) : (
            <p>Loading chart data...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Reconstruction;
