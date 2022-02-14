// Imports
import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import Header from "./components/Header.js";
import Plants from "./components/Plants.js";
import axios from 'axios';

import "./custom.css";
import { getAllPlants } from "./helper/helper.js";

// App
export default function App() {
  const [plants, setPlants] = useState([]);

  console.log(plants)

  useEffect(() => {
    axios.get("/api/plants")
    .then((res) => {
      setPlants(res.data)
    })
  }, [])

  return (
    <div>
      <section className="nav">
        <Header />
      </section>
      <section className="plantTable">
        <Plants plants={plants} />
      </section>
    </div>
  );
}
