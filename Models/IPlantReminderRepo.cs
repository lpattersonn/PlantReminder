using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PlantReminder.Models
{
  public interface IPlantReminderRepo
  // List of command objects
  {
     IEnumerable<PlantModel> GetAll();

     PlantModel Add(PlantModel plant);
       
     IEnumerable<PlantModel> GetPlant(int id);

     void DeletePlant(int id);
  }
}