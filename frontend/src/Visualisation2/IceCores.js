import { useState, useEffect } from "react";
import React from "react";
import { Chart } from "chart.js/auto";
import "chartjs-adapter-luxon";
import { Line } from "react-chartjs-2";
import { DateTime } from "luxon";
import { Container, Col, Row } from "react-bootstrap";

const IceCores = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await fetch("https://webproj9.oulu.azatotweb.com/iceberg1");
      const res2 = await fetch("https://webproj9.oulu.azatotweb.com/iceberg2");
      const res3 = await fetch("https://webproj9.oulu.azatotweb.com/iceberg3");
      const res4 = await fetch(
        "https://webproj9.oulu.azatotweb.com/maunaAnnual"
      );
      const res5 = await fetch(
        "https://webproj9.oulu.azatotweb.com/mauanaMonthly"
      );

      const json1 = await res1.json();
      const json2 = await res2.json();
      const json3 = await res3.json();
      const json4 = await res4.json();
      const json5 = await res5.json();

      setData1(json1);
      setData2(json2);
      setData3(json3);
      setData4(json4);
      setData5(json5);
    };

    fetchData();
  }, []);
  const formatStr = "d-MMM-yy";
  const colors = [
    "rgb(75, 192, 192)",
    "rgb(192, 75, 192)",
    "rgb(192, 192, 75)",
    "rgb(192, 75, 75)",
    "rgb(0, 0, 0)",
  ];

  const chartData = {
    datasets: [
      {
        label: "Icecore 1",
        data: data1.map((item) => ({
          time: DateTime.fromObject({
            year: item.MeanAirAge,
          }).toJSDate(),
          value: item.CO2,
        })),
        borderColor: colors[0],
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
      {
        label: "Icecore 2",
        data: data2.map((item) => ({
          time: DateTime.fromObject({
            year: item.MeanAirAge,
          }).toJSDate(),
          value: item.CO2,
        })),
        borderColor: colors[1],
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
      {
        label: "Icecore 3",
        data: data3.map((item) => ({
          time: DateTime.fromObject({
            year: item.MeanAirAge,
          }).toJSDate(),
          value: item.CO2,
        })),
        borderColor: colors[2],
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
      {
        label: "CO2 Annual",
        data: data4.map((item) => ({
          time: DateTime.fromObject({
            year: item.year,
          }).toJSDate(),
          value: item.mean,
        })),
        borderColor: colors[3],
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
      {
        label: "CO2 Monthly",
        data: data5.map((item) => ({
          time: DateTime.local(item.year, item.month, 1),
          value: item.average,
        })),
        borderColor: colors[4],
        parsing: {
          xAxisKey: "time",
          yAxisKey: "value",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,

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
    },
  };
  return (
    <>
      <Container>
        <Row>
          <Line options={options} data={chartData} width={200} />
        </Row>
        <Row>
          {" "}
          <p>
            Atmospheric CO2 concentrations from Mauna Loa measurements starting
            1958
          </p>
          <p>
            <a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">
              Description
            </a>{" "}
            and <a href="https://gml.noaa.gov/ccgg/trends/data.html">Data</a>
          </p>
          <p>
            Antarctic Ice Core records of atmospheric CO2 ratios combined with
            Mauna Loa measurements
          </p>
          <p>
            <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html">
              Description
            </a>{" "}
            and{" "}
            <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">
              Data
            </a>
          </p>
        </Row>
      </Container>
    </>
  );
};

export default IceCores;
