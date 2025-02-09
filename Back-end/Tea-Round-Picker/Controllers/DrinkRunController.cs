using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeaRoundPicker.DataAccess.Entities;

namespace Tea_Round_Picker.Controllers
{
    [ApiController]
    [Route("v1/[controller]")]
    public class DrinkRunController : ControllerBase
    {
        private readonly TeaRoundPickerContext _context;

        public DrinkRunController(TeaRoundPickerContext context)
        {
            _context = context;
        }

        // GET: api/DrinkRun
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<IEnumerable<DrinkRun>>> GetDrinkRun()
        {
            return await _context.DrinkRun.ToListAsync();
        }

        // GET: api/DrinkRun/{id}
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<DrinkRun>> GetDrinkRun(Guid id)
        {
            var drinkRun = await _context.DrinkRun.FindAsync(id);

            if (drinkRun == null)
            {
                return NotFound();
            }

            return drinkRun;
        }

        // POST: api/DrinkRun
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<ActionResult<DrinkRun>> PostDrinkRun(DrinkRun drinkRun)
        {
            _context.DrinkRun.Add(drinkRun);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDrinkRun", new { id = drinkRun.Id }, drinkRun);
        }
    }
}
