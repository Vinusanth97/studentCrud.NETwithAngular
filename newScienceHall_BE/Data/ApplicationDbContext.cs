using Microsoft.EntityFrameworkCore;
using newScienceHall_BE.Models;

namespace newScienceHall_BE.Data
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<StudentDetails> StudentDetails { get; set; }
    }
}
