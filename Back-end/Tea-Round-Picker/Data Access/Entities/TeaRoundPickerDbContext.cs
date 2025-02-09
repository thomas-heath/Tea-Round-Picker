using Microsoft.EntityFrameworkCore;

namespace TeaRoundPicker.DataAccess.Entities;

public class TeaRoundPickerContext : DbContext
{
    public TeaRoundPickerContext(DbContextOptions<TeaRoundPickerContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; } = null!;
    public DbSet<DrinkOrder> DrinkOrders { get; set; } = null!;
    public DbSet<DrinkRun> DrinkRun { get; set;} = null!;
}