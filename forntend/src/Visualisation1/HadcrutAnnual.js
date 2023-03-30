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

function HadcrutAnnual() {
  const [chartData, setChartData] = useState({});

  const fetchChartData = async () => {
    const res1 = await fetch(
      "https://webproj9.oulu.azatotweb.com/hadcrud/GlobalAnnual"
    );
    const res2 = await fetch(
      "https://webproj9.oulu.azatotweb.com/hadcrud/SouthernAnnual"
    );
    const res3 = await fetch(
      "https://webproj9.oulu.azatotweb.com/hadcrud/NorthenAnnual"
    );
    const data1 = await res1.json();
    const data2 = await res2.json();
    const data3 = await res3.json();

    console.log(data1, data2, data3); // log the fetched data to the console

    const chartData = {
      labels: data1.map((item) => item.time),
      datasets: [
        {
          label: "GlobalAnnual",
          data: data1.map((item) => item.ucl),
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "SouthernAnnual",
          data: data2.map((item) => item.ucl),
          fill: false,
          borderColor: "rgb(192, 75, 192)",
          tension: 0.1,
        },
        {
          label: "NorthenAnnual",
          data: data3.map((item) => item.ucl),
          fill: false,
          borderColor: "rgb(192, 192, 75)",
          tension: 0.1,
        },
      ],
    };

    setChartData(chartData);
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          <h1>GlobalAnnual</h1>
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

export default HadcrutAnnual;
