import { useState, useEffect } from "react";
import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";
import { DateTime } from "luxon";

const TimeLineGraphDemo = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
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

      const json1 = await res1.json();
      const json2 = await res2.json();
      const json3 = await res3.json();
      const json4 = await res4.json();

      setData1(json1);
      setData2(json2);
      setData3(json3);
      setData4(json4);
    };

    fetchData();
  }, []);

  const chartData = {
    datasets: [
      {
        label: "GlobalAnnual",
        data: data1.map((item) => ({
          time: DateTime.fromObject({
            year: item.time,
          }).toJSDate(),
          value: item.ucl.toString(),
        })),
        borderColor: "rgb(75, 192, 192)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
      {
        label: "SouthernAnnual",
        data: data2.map((item) => ({
          time: DateTime.fromObject({
            year: item.time,
          }).toJSDate(),
          value: item.ucl,
        })),
        borderColor: "rgb(192, 75, 192)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
      {
        label: "NorthernAnnual",
        data: data3.map((item) => ({
          time: DateTime.fromObject({
            year: item.time,
          }).toJSDate(),
          value: item.ucl,
        })),
        borderColor: "rgb(192, 192, 75)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },

      {
        label: "Reconstruction",
        data: data4.map((item) => ({
          time: DateTime.fromObject({
            year: item.time,
          }).toJSDate(),
          value: item.ucl,
        })),
        borderColor: "rgb(192, 75, 75)",
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Time Line Graph Demonstration",
      },
    },
    scales: {
      xAxis: {
        type: "time",
        time: {
          unit: "year",
        },
      },
      yAxis: {
        type: "linear",
      },
    },
  };
  return (
    <div style={{ width: "1000px" }}>
      <h1>TimeLineGraphDemo</h1>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default TimeLineGraphDemo;
