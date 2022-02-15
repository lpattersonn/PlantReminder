
namespace PlantReminder.Models
{
  public class PlantModel
  {
    public static object id { get; internal set; }
    public int Id {get; set;}

    public string img {get; set;}

    public string name {get; set;}

    public int waterInterval { get; set; }

    public System.DateTime lastWatered { get; set; }
  }
}