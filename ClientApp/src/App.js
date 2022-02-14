// Imports
import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import Header from "./components/Header.js";
import Plants from "./components/Plants.js";
import axios from "axios";

import "./custom.css";
import { getAllPlants } from "./helper/helper.js";

// App
export default function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    axios.get("/api/plants").then((res) => {
      setPlants(res.data);
    });
    return () => {
      "Searching";
    };
  }, []);

  // Plant button
  const waterPlant = function (plants, id) {
    const updatedPlant = { ...plants.find((plant) => plant.id === id) };
    const updatedIndex = plants.findIndex((plant) => plant.id === id);
    const day = new Date();
    updatedPlant.lastWatered = day.toISOString().split("Z")[0];
    plants[updatedIndex] = updatedPlant;
    setPlants([...plants]);
    console.log(plants);
  };

  return (
    <div>
      <section className="nav">
        <Header />
      </section>
      <section className="plantTable">
        <Plants  plants={plants} waterPlant={waterPlant} />
      </section>
    </div>
  );
}
