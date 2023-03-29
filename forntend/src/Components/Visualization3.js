import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
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

function ChartVisualization3() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      const res = await fetch("http://78.27.93.164:229/carbondioxide");
      const data = await res.json();

      console.log(data); // log the fetched data to the console

      const chartData = {
        labels: data.map((item) => item.time),
        datasets: [
          {
            label: "Co2",
            data: data.map((item) => item.carbon_dioxide),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Average Temperature (celcius)",
            data: data.map((item) => item.average_temp),
            fill: false,
            borderColor: "rgb(255, 0, 0)",
            tension: 0.1,
          },
        ],
      };

      setChartData(chartData);
    };

    fetchChartData();
  }, []);
  return (
    <div>
      {chartData.labels && chartData.datasets ? (
        <Line data={chartData} />
      ) : (
        <p>Loading Visualization3</p>
      )}
    </div>
  );
}

export default function Visualization3()
{
  return(
    <section>
      <div style = {{width: 800}}>
        <ChartVisualization3 />
      </div>
    </section>
  );
}
