// Imports
import React, { Component } from "react";
import { Route } from "react-router";
import Header from "./components/Header.js";
import Plants from "./components/Plants.js";

import "./custom.css";

// App
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    plants: [],
    }
  }

  componentDidMount() {
    fetch('https://localhost:5001/api/plants')
    .then(res => res.json())
      .then(plants => {this.setState({ plants: plants })});
  };

  render() {
    return (
      <div>
        <section className="nav">
          <Header />
        </section>
        <section>
          <Plants plants={this.state.plants} />
        </section>
      </div>
    );
  }
}
