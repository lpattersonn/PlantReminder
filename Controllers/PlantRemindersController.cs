using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PlantReminder.Models;

namespace PlantReminder.Controllers
{
[ApiController]
public class PlantRemindersController : ControllerBase
{
    private readonly ILogger<PlantRemindersController> _logger;

    static readonly Models.IPlantReminderRepo repository = new Models.PlantReminderRepo();
    private object _repository;

    public PlantRemindersController(ILogger<PlantRemindersController> logger)
    {
        _logger = logger;
    }

    
// Get all plants api/plants
    [HttpGet]
    [Route("api/plants")]
    public IEnumerable<Models.PlantModel> GetAllPlants()
    {   
        return repository.GetAll();
    }
// Get plant api/plants/1
      [HttpGet]
      [Route("api/plants/{id}")]
      public IEnumerable<PlantModel> GetPlant(int id)
    {
      return repository.GetPlant(id);
    }
  
// Add a new plant api/plant
     [HttpPost]
        [Route("api/plant")]
        [Consumes("application/json")]
        public Models.PlantModel PostPlant(Models.PlantModel plant)
        {
            return repository.Add(plant);
        }

// Add a new plant api/plants/1
    [HttpDelete("{id}")]
    [Route("api/plants/{id}")]
        public void DeletePlant(int id)
    {
      repository.DeletePlant(id);
    }
  
  }
}