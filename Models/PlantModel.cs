
namespace PlantReminder.Models
{
  public class PlantModel
  {
    public int Id {get; set;}

    public string img {get; set;}

    public string name {get; set;}

    public int waterInterval { get; set; }

    public System.DateTime lastWatered { get; set; }
  }
}