using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SimpleApp.Backend.Models;

namespace SimpleApp.Backend.Data
{
    public class AppDbContext:IdentityDbContext
    {
         public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options){}
            public DbSet<TaskItem> Tasks => Set<TaskItem>();
    }
}


