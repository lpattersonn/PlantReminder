// Imports
import React from "react";

// Plant component
export default function Plants(props) {
  const plantList = props.plants.map((plant) => {
    // Todays date
    const today = new Date();

    // Plant index
    const plantIndex = props.plants.findIndex((thisPlant) => {
      thisPlant.id === plant.id;
    });

    const index = (plantID) => {
      for (let i = 0; i < props.plants.length; i++) {
        if (plantID === props.plants[i].id) {
          return i;
        }
      }
    };

    console.log(index(plant.id));

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
      const diffInWater = today.getTime() - todaysDate.getTime();

      if (diffInWater > 30000 && diffInWater < waterInterval) {
        return (
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              props.waterPlant(props.plants, id);
            }}
          >
            Thirsty 🤔
          </button>
        );
      } else if (wellWatered(waterInterval, lastWatered)) {
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
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.waterPlant(props.plants, id);
            }}
          >
            I'm Full! 😀
          </button>
        );
      }
    }

    function warningButton(waterInterval, lastWatered) {
      const today = new Date();
      const todaysDate = new Date(lastWatered + "Z");
      const diffInWater = today.getTime() - todaysDate.getTime();
      if (diffInWater > 30000 && diffInWater < waterInterval) {
        return "#E6D54E";
      } else {
        return "#74E64E";
      }
    }

    // Table row style
    const waterStatus = {
      paddingBottom: "30px",
      border: "0.2em solid black",
      borderColor: wellWatered(plant.waterInterval, plant.lastWatered)
        ? "#E6534E"
        : warningButton(plant.waterInterval, plant.lastWatered),
    };

    const waterButtonStatus = {
      border: "0.2em solid black",
      borderColor: wellWatered(plant.waterInterval, plant.lastWatered)
        ? "#E6534E"
        : warningButton(plant.waterInterval, plant.lastWatered),
    };

    return (
      <tr style={waterStatus}>
        <td>
          <img src={plant.img} alt={plant.name} />
        </td>
        <td style={waterStatus}>{plant.name}</td>
        <td style={waterStatus}>{toString(plant.lastWatered)}</td>
        <td className="waterplants-button">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              props.deletePlant(index(plant.id));
            }}
          >
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
            <button
              type="button"
              className="btn btn-dark"
              onClick={() => {
                props.waterAllPlants(props.plants);
              }}
            >
              Water All Plants 😍
            </button>
          </th>
        </tr>
      </thead>
      <tbody>{plantList}</tbody>
    </table>
  );
}
