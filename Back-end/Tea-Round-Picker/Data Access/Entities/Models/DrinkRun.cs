using Microsoft.EntityFrameworkCore;

namespace TeaRoundPicker.DataAccess.Entities;

public class DrinkRun
{
    public Guid Id { get; set; }
    public User DrinkMaker { get; set; }
    public ICollection<DrinkOrder> Orders { get; set; }
}