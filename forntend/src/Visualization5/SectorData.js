import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
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
          {
            label: "Co2_sub",
            data: data2.map((item) => item["Share of global greenhouse gas emissions (%)"]),
            backgroundColor: [
              "#FFCE56",
              "#36A2EB",
              "#FF6384",
              "#28B463",
              "#A93226",
              "#CB4335",
              "#884EA0",
              "#7D3C98",
              "#2471A3",
              "#2E86C1",
              "#17A589",
              "#138D75",
              "#D4AC0D",
              "#D68910",
              "#CA6F1E",
              "#BA4A00",
              "#28B463"
            ],
            borderWidth: 1,
          },
          {
            label: "Co2_further",
            data: data3.map((item) => item["Share of global greenhouse gas emissions (%)"]),
            backgroundColor: [
              "#FFCE56",
              "#36A2EB",
              "#FF6384",
              "#28B463",
              "#A93226",
              "#CB4335",
              "#884EA0",
              "#7D3C98",
              "#2471A3",
              "#2E86C1",
              "#17A589",
              "#138D75",
              "#D4AC0D",
              "#D68910",
              "#CA6F1E",
              "#BA4A00",
              "#28B463",
              "#C39BD3",
              "#FAD7A0",
              "#A9CCE3",
              "#117864",
              "#935116",
              "#D98880",
              "#E59866",
              "#7F8C8D",
              "#F9E79F",
              "#943126",
              "#FF6F00",
              "#7DCEA0"
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

          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Global greenhouse gas emissions (%)",
              },
              legend: {
                position: "top",            
            layout: {
              padding: {
                top: 10,
                bottom: 10,
                left: 20,
                right: 20,
              },
            },
          }}}}
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
}

export default SectorData;