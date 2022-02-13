import React from "react";

export default function Plants(props) {
  console.log(props);

  const plantList = props.plants.map((plant) => {
    return (<tr>
      <td>
        <img src={plant.img} alt={plant.name} />
      </td>
      <td>{plant.name}</td>
      <td className="waterplants-button"><button>Water Me</button></td>
    </tr>
    )
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Plants</th>
          <th>Plant Name</th>
          <th className="waterplants-button"><button>Water All Plants</button></th>
        </tr>
      </thead>
      <tbody>{plantList}</tbody>
    </table>
  );
}
