import React from "react";

export default function Plants(props) {

  const plantList = props.plants.map((plant) => {
    // Todays date
    const today = new Date();
    
    // Date from api
    function toString(watered) {
      const todaysDate = new Date(watered + "Z");
      console.log(todaysDate.getTime());
      return todaysDate.toUTCString();
    }

    // Check if plant is well watered
    function wellWatered(waterInterval, lastWatered) {
      const today = new Date();
      const todaysDate = new Date(lastWatered + "Z");
      const diffInSec = today.getTime() - todaysDate.getTime();
      console.log(diffInSec)
      return diffInSec > waterInterval
    }
    
    // Table row style
    const waterStatus = {
      border: "0.2em solid black",
      borderColor: wellWatered(plant.waterInterval, plant.lastWatered) ? "#E6534E" : "#74E64E",
    };

    return (
      <tr style={waterStatus}>
        <td>
          <img src={plant.img} alt={plant.name} />
        </td>
        <td style={waterStatus}>{plant.name}</td>
        <td style={waterStatus}>{toString(plant.lastWatered)}</td>
        <td className="waterplants-button">
          <button>Water Me</button>
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
          <th className="waterplants-button">
            <button>Water All Plants</button>
          </th>
        </tr>
      </thead>
      <tbody>{plantList}</tbody>
    </table>
  );
}
