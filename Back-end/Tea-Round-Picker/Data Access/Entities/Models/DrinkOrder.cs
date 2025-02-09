using Microsoft.EntityFrameworkCore;

namespace TeaRoundPicker.DataAccess.Entities;

public class DrinkOrder
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Type { get; set; }
}