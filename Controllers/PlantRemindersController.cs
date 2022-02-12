using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace PlantReminder.Controllers
{
[ApiController]
public class PlantRemindersController : ControllerBase
{
    private readonly ILogger<PlantRemindersController> _logger;

    static readonly Models.IPlantReminderRepo repository = new Models.PlantReminderRepo();

    public PlantRemindersController(ILogger<PlantRemindersController> logger)
    {
        _logger = logger;
    }

// Get all plants
    [HttpGet]
    [Route("api/plants")]
    public IEnumerable<Models.PlantModel> GetAllPlants()
    {
        return repository.GetAll();
    }
  
// Add a new plant
     [HttpPost]
        [Route("api/plant")]
        [Consumes("application/json")]
        public Models.PlantModel PostPlant(Models.PlantModel plant)
        {
            return repository.Add(plant);
        }
  }
}