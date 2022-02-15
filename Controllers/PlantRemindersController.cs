using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
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
    private object _repository;

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
  
  // Get a plant [HttpDelete("{id}")]
    [HttpGet]
    [Route("api/plants/{id}")]
    public ActionResult <Models.PlantModel> GetCommandById(int id)
    {
        var plantItem = GetCommandById(id);
        return Ok(plantItem);
    }
// Add a new plant
     [HttpPost]
        [Route("api/plant")]
        [Consumes("application/json")]
        public Models.PlantModel PostPlant(Models.PlantModel plant)
        {
            return repository.Add(plant);
        }

// Delete a plant [HttpDelete("{id}")]
  [HttpDelete("{id}")]
public async Task<HttpResponseMessage> Delete(int id)
{
    HttpResponseMessage returnMessage = new HttpResponseMessage();
    try
    {
        // delete plant from database 
        string message = ($"plant Deleted - {id}");
        returnMessage = new HttpResponseMessage(HttpStatusCode.Created);
        returnMessage.RequestMessage = new HttpRequestMessage(HttpMethod.Post, message);
    }
    catch (Exception ex)
    {
        returnMessage = new HttpResponseMessage(HttpStatusCode.ExpectationFailed);
        returnMessage.RequestMessage = new HttpRequestMessage(HttpMethod.Post, ex.ToString());
    }
    return await Task.FromResult(returnMessage);
}
  
  }
}