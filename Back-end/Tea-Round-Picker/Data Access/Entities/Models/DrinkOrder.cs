using Microsoft.EntityFrameworkCore;

namespace TeaRoundPicker.DataAccess.Entities;

public class DrinkOrder
{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Type { get; set; }
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;
    public Guid? DrinkRunId { get; set; }
    public DrinkRun? DrinkRun { get; set; }
}