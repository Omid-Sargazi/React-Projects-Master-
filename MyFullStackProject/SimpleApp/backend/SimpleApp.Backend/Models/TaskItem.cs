using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace SimpleApp.Backend.Models
{
    public class TaskItem
    {
         [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        public bool IsDone { get; set; } = false;

        [ForeignKey("User")]
        public string? UserId { get; set; }
        public IdentityUser? User { get; set; }
    }
}