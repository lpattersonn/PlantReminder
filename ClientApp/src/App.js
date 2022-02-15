// Imports
import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import Header from "./components/Header.js";
import Plants from "./components/Plants.js";
import Form from "./components/Form.js";
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

  // Delete plant

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

  // Water all plants
  const waterAllPlants = function (plants) {
    const waterPlants = plants.map((plant) => {
      const id = plant.id;
      return waterPlant(plants, id);
    });
  };

  return (
    <div>
      <section className="nav">
        <Header key={1} />
      </section>
      <section className="formSection">
        <h4>Add Plant</h4>
        <Form key={2} plants={plants} setPlants={setPlants} />
      </section>
      <section className="plantTable">
        <Plants
          key={3}
          plants={plants}
          waterPlant={waterPlant}
          waterAllPlants={waterAllPlants}
        />
      </section>
    </div>
  );
}
