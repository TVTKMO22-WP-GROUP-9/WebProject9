import React, { useState, useEffect, useRef } from "react";
import { Line, getDatasetAtEvent, getElementAtEvent } from "react-chartjs-2";
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
    const res4 = await fetch(
      "https://webproj9.oulu.azatotweb.com/reconstruction"
    );

    const data1 = await res1.json();
    const data2 = await res2.json();
    const data3 = await res3.json();
    const data4 = await res4.json();

    console.log(data1, data2, data3, data4); // log the fetched data to the console

    const chartData = {
      labels: data1.map((item) => item.time),
      datasets: [
        {
          label: "GlobalAnnual",
          data: data1.map((item) => item.ucl),
          borderColor: "rgb(75, 192, 192)",
        },
        {
          label: "SouthernAnnual",
          data: data2.map((item) => item.ucl),
          borderColor: "rgb(192, 75, 192)",
        },
        {
          label: "NorthernAnnual",
          data: data3.map((item) => item.ucl),
          borderColor: "rgb(192, 192, 75)",
        },
        {
          label: "Reconstruction",
          data: data4.map((item) => item.T),
          borderColor: "rgb(192, 75, 75)",
        },
      ],
    };

    setChartData(chartData);
  };

  useEffect(() => {
    fetchChartData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "CO2",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "year",
        },
      },
      y: {
        type: "linear",
      },
    },
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          {chartData.labels && chartData.datasets ? (
            <Line data={chartData} options={options} />
          ) : (
            <p>Loading chart data...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default HadcrutAnnual;
