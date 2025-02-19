using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeaRoundPicker.DataAccess.Entities;

namespace Tea_Round_Picker.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class DrinkOrderController : ControllerBase
    {
        private readonly TeaRoundPickerContext _context;

        public DrinkOrderController(TeaRoundPickerContext context)
        {
            _context = context;
        }

        // GET: api/DrinkOrder
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<DrinkOrder>>> GetDrinkOrders()
        {
            return await _context.DrinkOrders.ToListAsync();
        }

        // GET: api/DrinkOrder/{id}
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<DrinkOrder>> GetDrinkOrder(Guid id)
        {
            var drinkOrder = await _context.DrinkOrders.FindAsync(id);

            if (drinkOrder == null)
            {
                return NotFound();
            }

            return drinkOrder;
        }

        // POST: api/DrinkOrder
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<DrinkOrder>> PostDrinkOrder(DrinkOrder drinkOrder)
        {
            _context.DrinkOrders.Add(drinkOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDrinkOrder", new { id = drinkOrder.Id }, drinkOrder);
        }
    }
}
