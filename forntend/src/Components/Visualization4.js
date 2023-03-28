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

function ChartVisualization4() {
    const [chartData, setChartData] = useState({});
  
    useEffect(() => {
      const fetchChartData = async () => {
        const res = await fetch("http://78.27.93.164:229/visualization4/CHINA (MAINLAND)");
        const data = await res.json();
  
        console.log(data); // log the fetched data to the console
  
        const chartData = {
          labels: data.map((item) => item.Year),
          datasets: [
            {
              label: "Co2 emissions",
              data: data.map((item) => item.Co2),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
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
          <p>Loading chart data...</p>
        )}
      </div>
    );
  }

export default function Visualization4(){
  return(
    <section>
      <div style= {{width: 400}}>
      <ChartVisualization4/>
      </div>
    </section>
  );

}