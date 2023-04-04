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
import TimeLineGraphDemo from "./Visualisation1/Example";

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
            <Route path="/HadcrutAnnual" element={<HadcrutAnnual />} />
            <Route path="/HadcrutMonthly" element={<HadcrutMonthly />} />
            <Route path="/Reconstruction" element={<Reconstruction />} />
            <Route path="/Icebergs" element={<Icebergs />} />
            <Route path="/visInput" element={<VisualizationForm />}></Route>
            <Route path="/example" element={<TimeLineGraphDemo />}></Route>
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
