import logo from "./logo.svg";
import "./App.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  Redirect,
} from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

import HadcrutAnnual from "./Visualisation1/HadcrutAnnual";
import HadcrutMonthly from "./Visualisation1/HadcrutMonthly";
import Reconstruction from "./Visualisation1/Reconstruction";
import Icebergs from "./Visualisation2/Icebergs";
import Error404 from "./Pages/error";
import Navigation from "./Pages/Navigation";
import Home from "./Pages/Home";
import Page from "./Pages/NumberPage";
import VisualizationForm from "./Pages/VisualizationForm";
import Visualization1 from "./Visualisation1/Visualization1";
import IceCores from "./Visualisation2/IceCores";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const fetchPages = async () => {
      const response = await fetch(
        "https://webproj9.oulu.azatotweb.com/visualization"
      );
      const data = await response.json();
      setPages(data);
      console.log(data);
    };

    fetchPages();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <br></br>
        <br></br>
        <br></br>

        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            {pages.map(
              (page) => (
                console.log(page.url),
                (
                  <Route
                    key={page.id_visualization}
                    path={`/${page.url}`}
                    element={<Page number={page.text} layout={page.layout} />}
                  />
                )
              )
            )}
            <Route path="/Visualization1" element={<Visualization1 />} />
            <Route path="/Visualization2" element={<IceCores />} />

            <Route path="/HadcrutMonthly" element={<IceCores />} />
            <Route path="/Reconstruction" element={<Reconstruction />} />
            <Route path="/Icebergs" element={<Icebergs />} />
            <Route path="/visInput" element={<VisualizationForm />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
