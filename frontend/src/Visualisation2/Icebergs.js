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

function Icebergs() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchChartData = async () => {
      const res1 = await fetch("https://webproj9.oulu.azatotweb.com/iceberg1");
      const res2 = await fetch("https://webproj9.oulu.azatotweb.com/iceberg2");
      const res3 = await fetch("https://webproj9.oulu.azatotweb.com/iceberg3");
      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();

      console.log(data1, data2, data3); // log the fetched data to the console

      const chartData = {
        labels: data1.map((item) => item.MeanAirAge),
        datasets: [
          {
            label: "Co2 - iceberg1",
            data: data1.map((item) => item.CO2),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
          {
            label: "Co2 - iceberg2",
            data: data2.map((item) => item.CO2),
            fill: false,
            borderColor: "rgb(192, 75, 192)",
            tension: 0.1,
          },
          {
            label: "Co2 - iceberg3",
            data: data3.map((item) => item.CO2),
            fill: false,
            borderColor: "rgb(192, 192, 75)",
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
    </div>
  );
}

export default Icebergs;
