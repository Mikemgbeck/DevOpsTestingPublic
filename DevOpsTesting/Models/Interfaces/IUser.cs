namespace DevOpsTesting.Models.Interfaces
{
    public interface IUser
    {
        string Email { get; set; }
        string FirstName { get; set; }
        int Id { get; set; }
        string LastName { get; set; }
    }
}