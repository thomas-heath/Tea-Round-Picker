using Microsoft.EntityFrameworkCore;

namespace TeaRoundPicker.DataAccess.Entities;

public class User
{
    public Guid Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public DrinkOrder? DrinkOrder { get; set; }
    public DrinkRun? DrinkRun { get; set; }
}