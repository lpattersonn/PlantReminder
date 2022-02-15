export async function getAllPlants() {
    fetch('https://localhost:5001/api/plants')
    .then(res => res.json())
      .then(plants => {this.setState({ plants: plants })});
}
