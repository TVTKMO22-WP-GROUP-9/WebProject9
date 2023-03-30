import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to My App!</h1>
        <p>This is the home page.</p>
        <Link to="/HadcrutAnnual">
          <Button>View Hadcrut Annual Data</Button>
        </Link>
        <Link to="/Reconstruction">
          <Button>View Reconstruction Data</Button>
        </Link>
        <Link to="/Icebergs">
          <Button>View Iceberg Data</Button>
        </Link>
        <Link to="/HadcrutMonthly">
          <Button>View Hadcrut Monthly Data</Button>
        </Link>
      </div>
    );
  }
}

export default Home;
