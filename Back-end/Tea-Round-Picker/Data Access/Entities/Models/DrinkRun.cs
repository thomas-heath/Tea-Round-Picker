using Microsoft.EntityFrameworkCore;

namespace TeaRoundPicker.DataAccess.Entities;

public class DrinkRun
{
    public Guid Id { get; set; }
    public Guid UserId { get; set; }
    public User User { get; set; } = null!;
    public ICollection<DrinkOrder> Orders { get; } = new List<DrinkOrder>();
}