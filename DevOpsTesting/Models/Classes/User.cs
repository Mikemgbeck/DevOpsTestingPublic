using DevOpsTesting.Models.Interfaces;

namespace DevOpsTesting.Models.Classes
{
    public class User : IUser
    {
        public int Id { get; set; }
        public required string FirstName { get; set; } = string.Empty;
        public required string LastName { get; set; } = string.Empty;
        public required string Email { get; set; } = string.Empty;

    }
}
