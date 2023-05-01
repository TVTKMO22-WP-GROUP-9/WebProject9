import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Line } from "react-chartjs-2";
import { Container, Col, Row } from "react-bootstrap";

function Visualization4() {
  const [data, setData] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://webproj9.oulu.azatotweb.com/Visualization4"
      );
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  const uniqueCountries = Array.from(new Set(data.map((item) => item.Country)));
  const countryOptions = uniqueCountries.map((country) => ({
    value: country,
    label: country,
  }));

  function handleCountrySelection(selectedOptions) {
    setSelectedCountries(selectedOptions.map((option) => option.value));
  }

  function getDataForSelectedCountries() {
    const dataForSelectedCountries = {};
    selectedCountries.forEach((country) => {
      dataForSelectedCountries[country] = {
        labels: [],
        data: [],
      };
    });
    data.forEach((item) => {
      if (selectedCountries.includes(item.Country)) {
        dataForSelectedCountries[item.Country].labels.push(item.Year);
        dataForSelectedCountries[item.Country].data.push(item.Co2);
      }
    });
    return dataForSelectedCountries;
  }

  const dataForSelectedCountries = getDataForSelectedCountries();
  const chartData = {
    labels:
      selectedCountries.length > 0
        ? dataForSelectedCountries[selectedCountries[0]].labels
        : [],
    datasets: selectedCountries.map((country) => ({
      label: country,
      data: dataForSelectedCountries[country].data,
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      fill: false,
    })),
  };

  return (
    <>
    <Container>
      <Row>
      <div width={200}>
      <label htmlFor="country-select">Select countries:</label>
      <Select
        id="country-select"
        isMulti
        options={countryOptions}
        onChange={handleCountrySelection}
        value={countryOptions.filter((option) =>
          selectedCountries.includes(option.value)
        )}
      />
      {selectedCountries.length > 0 && <Line data={chartData} />}
    </div>
      </Row>
      <Row>
        
        <p>
          The visualization shows the CO2 emissions of the selected countries between 1959 and 2020.
        </p>
        <p>
          <a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Description</a>
          {" "}
          and <a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Data</a>
        </p>
      </Row>
    </Container>
    </>
  );
}

export default Visualization4;
