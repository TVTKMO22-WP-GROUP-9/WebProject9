import { Button } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { Doughnut, getElementAtEvent } from "react-chartjs-2";

function Visualization5() {
  const [chartData, setChartData] = useState(null);
  const [subChartData, setSubChartData] = useState(null);
  const [showSubChart, setShowSubChart] = useState(false);
  const [showIndex, setShowIndex] = useState(-1);

  const chartRef = useRef();

  const getRandomColor = () => {
    const hexChars = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexChars[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const onClick = (event) => {
    const index = getElementAtEvent(chartRef.current, event)[0].index;
    setShowIndex(index);
    if (showIndex === 0) {
      // Request data for sub-chart
      fetch("https://webproj9.oulu.azatotweb.com/sub_sector_further")
        .then((response) => response.json())
        .then((data) => {
          const labels = data.map((sector) => sector["Sub sector"]);
          const values = data.map(
            (sector) => sector["Share of global greenhouse gas emissions (%)"]
          );
          const backgroundColor = values.map(() => getRandomColor());
          const hoverBackgroundColor = backgroundColor.map(
            (color) => `${color}77`
          );
          setSubChartData({
            labels,
            datasets: [
              {
                data: values,
                backgroundColor,
                hoverBackgroundColor,
              },
            ],
          });
        })
        .catch((error) => console.error(error));
      setShowSubChart(true);
    }
    if (showIndex === 3) {
      // Request data for sub-chart
      fetch("https://webproj9.oulu.azatotweb.com/sub_sector")
        .then((response) => response.json())
        .then((data) => {
          const labels = data.map((sector) => sector["Sub-sector"]);
          const values = data.map(
            (sector) => sector["Share of global greenhouse gas emissions (%)"]
          );
          const backgroundColor = values.map(() => getRandomColor());
          const hoverBackgroundColor = backgroundColor.map(
            (color) => `${color}77`
          );
          setSubChartData({
            labels,
            datasets: [
              {
                data: values,
                backgroundColor,
                hoverBackgroundColor,
              },
            ],
          });
        })
        .catch((error) => console.error(error));
      setShowSubChart(true);
    }
  };

  const goBack = () => {
    setShowSubChart(false);
  };

  const showFirstChart = () => {
    setShowSubChart(false);
  };

  useEffect(() => {
    fetch("https://webproj9.oulu.azatotweb.com/sector")
      .then((response) => response.json())
      .then((data) => {
        const labels = data.map((sector) => sector.Sector);
        const values = data.map(
          (sector) => sector["Share of global greenhouse gas emissions (%)"]
        );
        const backgroundColor = values.map(() => getRandomColor());
        const hoverBackgroundColor = backgroundColor.map(
          (color) => `${color}77`
        );
        setChartData({
          labels,
          datasets: [
            {
              data: values,
              backgroundColor,
              hoverBackgroundColor,
            },
          ],
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {!showSubChart && chartData && (
        <>
          <Doughnut
            data={chartData}
            options={{ responsive: true }}
            onClick={onClick}
            ref={chartRef}
          />
        </>
      )}
      {showSubChart && subChartData && (
        <>
          <Button onClick={goBack}>Back</Button>

          <Doughnut data={subChartData} options={{ responsive: true }} />
        </>
      )}
    </div>
  );
}

export default Visualization5;
