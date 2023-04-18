import React, { useState, useEffect, useRef } from "react";
import { Doughnut, getDatasetAtEvent } from "react-chartjs-2";
import {
  Chart, 
  Tooltip, 
  Title, 
  ArcElement, 
  Legend
} from 'chart.js';

Chart.register(
  ArcElement,
  Tooltip, 
  Title, 
  Legend
);

function SectorData() {
  const [chartData, setChartData] = useState({});
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  }

  useEffect(() => {
    const fetchChartData = async () => {
      const res1 = await fetch("https://webproj9.oulu.azatotweb.com/sector");
      const res2 = await fetch("https://webproj9.oulu.azatotweb.com/sub_sector");
      const res3 = await fetch("https://webproj9.oulu.azatotweb.com/sub_sector_further");
      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();

      console.log(data1, data2, data3); // log the fetched data to the console

      const chartData = {     
        labels: data1.map((item) => item.Sector),
        datasets: [
          {
            label: "CO2",
            data: data1.map((item) => item["Share of global greenhouse gas emissions (%)"]),
            backgroundColor: [
              "#FFCE56",
              "#36A2EB",
              "#FF6384",
              "#28B463"
            ],
            borderWidth: 1,           
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
      <Doughnut
        ref={chartRef}
        data={chartData}
        onClick={onClick}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Global greenhouse gas emissions (%)",
              padding: {
                top: 10,
                bottom: 10,
              },
              font: {
                size: 18,
              },
            },
            subtitle: {
              display: true,
              text: "Click a sector to get further information",
              padding: {
                top: 5,
                bottom: 20,
              },
              font: {
                size: 14,
              },
            },
            legend: {
              position: "top",
              labels: {
                font: {
                  size: 14,
                },
              },
              layout: {
                padding: {
                  top: 10,
                  bottom: 10,
                  left: 20,
                  right: 20,
                },
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
        }}
      />
    ) : (
      <p>Loading chart data...</p>
    )}
  </div>
);
}

export default SectorData;