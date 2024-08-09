using DevOpsTesting.Models.Classes;
using DevOpsTesting.Models.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace DevOpsTesting.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<User> User { get; set; }

    }
}
