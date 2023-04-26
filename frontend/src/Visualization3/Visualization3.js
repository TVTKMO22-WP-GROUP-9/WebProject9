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

function Visualization3() {
  const [data, setChartData] = useState([]);

  useEffect(() => {
    const fetchChartData = async () => {
      const res = await fetch(
        "https://webproj9.oulu.azatotweb.com/carbondioxide"
      );
      const data = await res.json();

      console.log(data); // log the fetched data to the console

      setChartData(data);
    };

    fetchChartData();
  }, []);

  const chartData = {
    labels: data.map((item) => item.time),

    datasets: [
      {
        label: "Co2 (ppm)",
        data: data.map((item) => item.carbon_dioxide),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0,
        yAxisID: "y1",
        borderWidth: 2,
        pointStyle: false,
      },
      {
        label: "Temperature (celcius)",
        data: data.map((item) => item.average_temp),
        fill: false,
        borderColor: "rgb(255, 0, 0)",
        tension: 0,
        yAxisID: "y",
        borderWidth: 2,
        pointStyle: false,
      },
      {
        label: "Events",
        data: data.map((item) => ({
          time: item.time,
          value: item.point,
          ttip: item.event,
        })),
        fill: false,
        borderColor: "rgb(0, 0, 255)",
        tension: 0,
        borderWidth: 5,
        pointStyle: "triangle",
        yAxisID: "y",
        showLine: false,
        scrollY: 4,
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Evolution of Global Surface Temperature & Carbon Dioxide levels",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            console.log(context);
            return context.raw.ttip;
          },
        },
      },
    },

    scales: {
      y: {
        type: "linear",
        position: "right",
        title: {
          text: "Temperature (°C)",
          display: true,
        },
      },
      y1: {
        type: "linear",
        position: "left",
        title: {
          text: "Co2 (ppm)",
          display: true,
        },
      },
      x: {
        title: {
          text: "Years ago",
          display: true,
        },
      },
    },
  };

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col>
          {chartData.labels && chartData.datasets ? (
            <Line data={chartData} options={options} width={200} />
          ) : (
            <p>Loading chart data...</p>
          )}
        </Col>
        <p>Sources<br></br> "Evolution of global temperature over the past two million years"  http://carolynsnyder.com/publications.php - http://carolynsnyder.com/papers/Snyder_Data_Figures.zip</p>
        <p>"Human Evolution and Activities" https://www.southampton.ac.uk/~cpd/history.html</p>
        
      </Row>
    </Container>
  );
}

export default Visualization3;
