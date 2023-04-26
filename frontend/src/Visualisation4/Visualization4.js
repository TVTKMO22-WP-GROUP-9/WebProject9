import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Line } from "react-chartjs-2";

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
    <div>
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
  );
}

export default Visualization4;
