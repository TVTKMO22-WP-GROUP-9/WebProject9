import logo from "./logo.svg";
import "./App.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";

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
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
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
            <Route path="/HadcrutAnnual" element={<HadcrutAnnual />} />
            <Route path="/HadcrutMonthly" element={<HadcrutMonthly />} />
            <Route path="/Reconstruction" element={<Reconstruction />} />
            <Route path="/Icebergs" element={<Icebergs />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
