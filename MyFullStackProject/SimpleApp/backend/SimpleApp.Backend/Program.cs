using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SimpleApp.Backend.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseInMemoryDatabase("SimpleAppDb"));

builder.Services.AddIdentity<IdentityUser, IdentityRole>()
.AddEntityFrameworkStores<AppDbContext>()
.AddDefaultTokenProviders();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();




var app = builder.Build();

// Middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();
app.UseAuthentication(); // 👈 اضافه شد
app.UseAuthorization();

app.MapControllers();

app.Run();
