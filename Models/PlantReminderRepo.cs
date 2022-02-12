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
      Add(new PlantModel {name= "Ageratum"});
      // Add(new PlantModel {id= 2, name= "American Marigold", LastWatered= DateTime.Now.ToString()});
      // Add(new PlantModel {id= 3, name= "Annual Vinca", LastWatered= DateTime.Now.ToString()});
      // Add(new PlantModel {id= 4, name= "Bacopa", LastWatered= DateTime.Now.ToString()});
      // Add(new PlantModel {id= 5, name= "Balloon Flower", LastWatered= DateTime.Now.ToString()});
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