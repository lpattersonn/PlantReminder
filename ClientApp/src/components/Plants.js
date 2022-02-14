import React, { useState } from "react";

export default function Plants(props) {
  const { plants, setPlants } = useState([]);

  const plantList = props.plants.map((plant) => {
    // Todays date
    const today = new Date();

    // Date from api
    function toString(watered) {
      const todaysDate = new Date(watered + "Z");
      return todaysDate.toLocaleString();
    }

    // Check if plant is well watered
    function wellWatered(waterInterval, lastWatered) {
      const today = new Date();
      const todaysDate = new Date(lastWatered + "Z");
      const diffInSec = today.getTime() - todaysDate.getTime();
      return diffInSec / 1000 > waterInterval;
    }
    const id = plant.id;
    function plantButton(waterInterval, lastWatered) {
      const today = new Date();
      const todaysDate = new Date(lastWatered + "Z");
      const diffInSec = today.getTime() - todaysDate.getTime();

      if (wellWatered(waterInterval, lastWatered)) {
        return (
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.waterPlant(props.plants, id);
            }}
          >
            Water Me! 😠
          </button>
        );
      } else {
        return (
          <button type="button" className="btn btn-success">
            I'm Full! 😀
          </button>
        );
      }
    }

    // Table row style
    const waterStatus = {
      paddingBottom: "30px",
      border: "0.2em solid black",
      borderColor: wellWatered(plant.waterInterval, plant.lastWatered)
        ? "#E6534E"
        : "#74E64E",
    };

    const waterButtonStatus = {
      border: "0.2em solid black",
      borderColor: wellWatered(plant.waterInterval, plant.lastWatered)
        ? "#E6534E"
        : "#74E64E",
    };

    return (
      <tr style={waterStatus}>
        <td>
          <img src={plant.img} alt={plant.name} />
        </td>
        <td style={waterStatus}>{plant.name}</td>
        <td style={waterStatus}>{toString(plant.lastWatered)}</td>
        <td className="waterplants-button">
          <button type="button" className="btn btn-secondary">
            Remove Plant 😔
          </button>
        </td>
        <td className="waterplants-button" style={waterButtonStatus}>
          {plantButton(plant.waterInterval, plant.lastWatered)}
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Plants</th>
          <th>Plant Name</th>
          <th>Last Watered</th>
          <th>Remove Plant</th>
          <th className="waterplants-button">
            <button type="button" className="btn btn-dark">
              Water All Plants 😍
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{plantList}</tbody>
    </table>
  );
}
