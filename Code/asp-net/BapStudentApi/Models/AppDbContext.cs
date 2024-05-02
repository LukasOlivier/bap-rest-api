using Microsoft.EntityFrameworkCore;

namespace BapStudentApi.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<BapStudentApi.Models.User> User { get; set; } = default!;
        public DbSet<BapStudentApi.Models.Student> Student { get; set; } = default!;
        public DbSet<BapStudentApi.Models.School> School { get; set; } = default!;
    }
}
