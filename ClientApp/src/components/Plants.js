import React from "react";

export default function Plants(props) {
  console.log(props);

  const plantList = props.plants.map((plant) => {
    return (<tr>
      <td>
        <img src={plant.img} alt={plant.name} />
      </td>
      <td>{plant.name}</td>
    </tr>
    )
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Plants</th>
        </tr>
      </thead>
      <tbody>{plantList}</tbody>
    </table>
  );
}
