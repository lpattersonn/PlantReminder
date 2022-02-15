using System;
using System.Collections.Generic;

namespace PlantReminder.Models
{
  public interface IPlantReminderRepo
  // List of command objects
  {
    bool SaveChanges();
     IEnumerable<PlantModel> GetAll();

     PlantModel Add(PlantModel plant);

    Microsoft.AspNetCore.Mvc.ActionResult <PlantModel> GetCommandById(int id);
     
     void DeletePlant(PlantModel cmd);
  }
}