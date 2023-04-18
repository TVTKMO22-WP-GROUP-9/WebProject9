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
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Reconstruction from "./Visualisation1/Reconstruction";
import Icebergs from "./Visualisation2/Icebergs";
import Error404 from "./Pages/error";
import Navigation from "./Pages/Navigation";
import Home from "./Pages/Home";
import Page from "./Pages/NumberPage";
import Visualization1 from "./Visualisation1/Visualization1";
import IceCores from "./Visualisation2/IceCores";
import LoginPage from "./Pages/Login";
import UserPage from "./Pages/UserPage";
import RegistrationForm from "./Pages/Registration";
import VisualizationForm from "./Pages/MakeVisualization";
import MyVisualizations from "./Pages/MyVisualizations";
import Visualization3 from "./Visualization3/Visualization3";
import Visualization4 from "./Vis4/Visualization4";
import Visualization5 from "./Visualization5/Visualization5";

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
          <Route path="/" element={<Home />} />
          {pages.map(
            (page) => (
              console.log(page.url),
              (
                <Route
                  key={page.id_visualization}
                  path={`/${page.url}`}
                  element={
                    <Page
                      number={page.lable}
                      layout={page.layout}
                      page={page}
                    />
                  }
                />
              )
            )
          )}
          <Route path="/Visualization1" element={<Visualization1 />} />
          <Route path="/Visualization2" element={<IceCores />} />
          <Route path="/Visualization3" element={<Visualization3 />} />
          <Route path="/Visualization4" element={<Visualization4 />} />
          <Route path="/Visualization5" element={<Visualization5 />} />

          <Route path="/HadcrutMonthly" element={<IceCores />} />
          <Route path="/Reconstruction" element={<Reconstruction />} />
          <Route path="/Icebergs" element={<Icebergs />} />
          <Route path="/registration" element={<RegistrationForm />} />

          <Route element={<ProtectedRoute />}>
            <Route path="home" element={<UserPage />} />
            <Route path="/makeVisualization" element={<VisualizationForm />} />
            <Route path="/myVisualizations" element={<MyVisualizations />} />
          </Route>

          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

const ProtectedRoute = ({ redirectPath = "/login", children }) => {
  if (localStorage.getItem("token") === null) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default App;
