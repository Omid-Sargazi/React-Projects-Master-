using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SimpleApp.Backend.Data;
using SimpleApp.Backend.Models;

namespace SimpleApp.Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class TasksController:ControllerBase
    {

        private readonly AppDbContext _context;
        private readonly UserManager<IdentityUser> _userManager;

        public TasksController(AppDbContext context, UserManager<IdentityUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

          private async Task<IdentityUser?> GetCurrentUserAsync()
        {
            return await _userManager.GetUserAsync(User);
        }

        
        [HttpGet]
        public async Task<IActionResult> GetMyTasks()
        {
            var user = await GetCurrentUserAsync();
            if (user == null) return Unauthorized();

            var tasks = await _context.Tasks
                .Where(t => t.UserId == user.Id)
                .ToListAsync();

            return Ok(tasks);
        }

         [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] TaskItem dto)
        {
            var user = await GetCurrentUserAsync();
            if (user == null) return Unauthorized();

            var task = new Models.TaskItem
            {
                Title = dto.Title,
                IsDone = dto.IsDone,
                UserId = user.Id
            };

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();
            return Ok(task);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(int id, [FromBody] TaskItem dto)
        {
            var user = await GetCurrentUserAsync();
            if (user == null) return Unauthorized();

            var task = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id && t.UserId == user.Id);
            if (task == null) return NotFound();

            task.Title = dto.Title;
            task.IsDone = dto.IsDone;
            await _context.SaveChangesAsync();

            return Ok(task);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var user = await GetCurrentUserAsync();
            if (user == null) return Unauthorized();

            var task = await _context.Tasks.FirstOrDefaultAsync(t => t.Id == id && t.UserId == user.Id);
            if (task == null) return NotFound();

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return Ok("Deleted successfully");
        }
    }
}