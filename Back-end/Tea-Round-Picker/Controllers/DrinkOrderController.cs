using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TeaRoundPicker.DataAccess.Entities;

namespace TeaRoundPicker.Controllers
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
        public async Task<ActionResult<IEnumerable<DrinkOrder>>> GetDrinkOrders()
        {
            return await _context.DrinkOrders.ToListAsync();
        }

        // GET: api/DrinkOrder/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DrinkOrder>> GetDrinkOrder(Guid id)
        {
            var drinkOrder = await _context.DrinkOrders.FindAsync(id);

            if (drinkOrder == null)
            {
                return NotFound();
            }

            return drinkOrder;
        }

        // PUT: api/DrinkOrder/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDrinkOrder(Guid id, DrinkOrder drinkOrder)
        {
            if (id != drinkOrder.Id)
            {
                return BadRequest();
            }

            _context.Entry(drinkOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DrinkOrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DrinkOrder
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DrinkOrder>> PostDrinkOrder(DrinkOrder drinkOrder)
        {
            _context.DrinkOrders.Add(drinkOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDrinkOrder", new { id = drinkOrder.Id }, drinkOrder);
        }

        // DELETE: api/DrinkOrder/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDrinkOrder(Guid id)
        {
            var drinkOrder = await _context.DrinkOrders.FindAsync(id);
            if (drinkOrder == null)
            {
                return NotFound();
            }

            _context.DrinkOrders.Remove(drinkOrder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DrinkOrderExists(Guid id)
        {
            return _context.DrinkOrders.Any(e => e.Id == id);
        }
    }
}
