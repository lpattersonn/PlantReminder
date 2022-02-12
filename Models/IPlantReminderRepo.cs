using System;
using System.Collections.Generic;

namespace PlantReminder.Models
{
  public interface IPlantReminderRepo
  // List of command objects
  {
     IEnumerable<PlantModel> GetAll();

     PlantModel Add(PlantModel plant);
  }
}