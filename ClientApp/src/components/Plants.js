import React from "react";

export default function Plants(props) {
  console.log(props);

  function wellWatered(waterInterval) {
    if(waterInterval > 300) {
      return true
    }
  }
  
  console.log(wellWatered(100))

  const plantList = props.plants.map((plant) => {
    
    const waterStatus = { 
      border: "0.2em solid black",
      borderColor: wellWatered(plant.waterInterval) ? "#74E64E" : "#E6534E",
    };

    return (
      <tr style={waterStatus}>
        <td>
          <img src={plant.img} alt={plant.name} />
        </td>
        <td style={waterStatus}>{plant.name}</td>
        <td style={waterStatus}>{plant.lastWatered}</td>
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
