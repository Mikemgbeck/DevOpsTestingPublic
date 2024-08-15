
using DevOpsTesting.Data;
using DevOpsTesting.Models.Classes;
using DevOpsTesting.Models.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DevOpsTesting.APIControllers
{
    [Route("User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUsers()
        {
            var users = await _context.User.ToListAsync();
            return Ok(users);
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.User.FindAsync(id);
            if (user is null)
            {
                return NotFound("User Not Found");
            }

            return Ok(user);
        }

        [HttpPost]
        public async Task<ActionResult> AddUser(User user)
        {
            _context.User.Add(user);
            await _context.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> UpdateUser(User updatedUser)
        {
            var dbUser = await _context.User.FindAsync(updatedUser.Id);
            if (dbUser is null)
            {
                return NotFound("User Not Found");
            }

            _context.Entry(dbUser).CurrentValues.SetValues(updatedUser);

            var result = await _context.SaveChangesAsync();

            await _context.SaveChangesAsync();

            return Ok();


        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var dbUser = await _context.User.FindAsync(id);
            if (dbUser is null)
            {
                return NotFound("User Not Found");
            }
            _context.User.Remove(dbUser);

            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
