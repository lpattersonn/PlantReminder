using System;
using System.Collections.Generic;

namespace PlantReminder.Models
{
  // Implement from interface
  public class PlantReminderRepo : IPlantReminderRepo
  {
    private List<PlantModel> plants = new List<PlantModel>();
    private int _nextId = 1;

    public PlantReminderRepo()
    {
      Add(new PlantModel {name= "Ageratum", waterInterval= 21600, lastWatered= new DateTime(2022, 2, 11), img = "https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/50x50/public/plant/images/Ageratum%201%20Plant.jpg?itok=hLwxwbOg"});
      Add(new PlantModel {name= "American Marigold", waterInterval= 21600, lastWatered= new DateTime(2022, 2, 11), img="https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/50x50/public/plant/images/Tagetes%201%20plant_0.jpg?itok=aOuGLGdU"});
      Add(new PlantModel {name= "Annual Vinca", waterInterval= 21600, lastWatered= new DateTime(2022, 2, 11), img="https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/50x50/public/plant/images/Catharanthus%201%20plant.JPG?itok=_xH4O5fg"});
      Add(new PlantModel {name= "Bacopa", waterInterval= 21600, lastWatered= new DateTime(2022, 2, 11), img="https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/50x50/public/plant/images/Sutera%20plant%201_0.JPG?itok=dSMziocv"});
      Add(new PlantModel {name= "Balloon Flower", waterInterval= 21600, lastWatered= new DateTime(2022, 2, 11), img="https://extension.umass.edu/plant-identification/sites/plant-identification/files/styles/50x50/public/plant/images/Platycodon%201%20plant.jpg?itok=g0uX8NlE"});
    }
      // Return all palnts
      public IEnumerable<PlantModel> GetAll()
      {
        return plants;
      }
      
      // Add new plant
      public PlantModel Add(PlantModel plant) 
      {
        if (plant == null)
        {
          throw new ArgumentNullException("plant");
        }
        plant.Id = _nextId++;
        plants.Add(plant);
        return plant;
      }
  }
}