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
    const day = new Date();
    const dayAndTimeNow = day.getTime();

    // Find plant
    const updatedPlant = { ...plants.find((plant) => plant.id === id) };
    const updatedIndex = plants.findIndex((plant) => plant.id === id);
    // Get Plant last watered
    const plantLastWatered = new Date(updatedPlant.lastWatered + "Z").getTime();

    // Find water interval from last watered
    if (dayAndTimeNow - plantLastWatered > 30000) {
      updatedPlant.lastWatered = day.toISOString().split("Z")[0];
      plants[updatedIndex] = updatedPlant;
      setPlants([...plants]);
    } else {
      window.confirm(
        `${updatedPlant.name} is well watered, please wait 30 seconds.`
      );
    }
  };

  // Water all plants
  const waterAllPlants = function (plants) {
    const waterPlants = plants.map((plant) => {
      const id = plant.id;
      return waterPlant(plants, id);
    });
  };

  // Delete plant
  const deletePlant = function (id) {
    if (window.confirm("Are you sure you want to delete this plant?")) {
      axios.delete(`/api/plants/${id}.json`).then((res) => {
        console.log(res.body);
        setPlants([...plants]);
      });
    }
  };

  return (
    <div>
      <section className="nav">
        <Header key={1} />
      </section>
      <div id="body">
        <section className="formSection">
          <div className="formLabel">
            <h4>Add Plant</h4>
            <Form key={plants} plants={plants} setPlants={setPlants} />
          </div>
        </section>
        <section className="plantTable">
          <Plants
            key={plants.length}
            plants={plants}
            waterPlant={waterPlant}
            waterAllPlants={waterAllPlants}
            deletePlant={deletePlant}
          />
        </section>
      </div>
    </div>
  );
}
