
using DevOpsTesting.Data;
using DevOpsTesting.Models.Classes;
using DevOpsTesting.Models.Interfaces;
using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Xunit;
using Microsoft.AspNetCore.Mvc.Testing;
using DevOpsTesting.APIControllers;

namespace DevOpsTesting.Tests.Controller
{
    public class UserControllerUnitTests
    {
        private readonly IUser _user;
        public UserControllerUnitTests()
        {
            _user = A.Fake<IUser>();
        }
        private static DataContext GetDatabaseContext()
        {
            var options = new DbContextOptionsBuilder<DataContext>()
                .UseInMemoryDatabase(databaseName: Guid.NewGuid().ToString())
                .Options;
            var databaseContext = new DataContext(options);
            databaseContext.Database.EnsureCreated();
            return databaseContext;


        }
        [Fact]
        public async Task UserController_GetAllUsers_ReturnOK()
        {
            //arrange
            var dbContext = GetDatabaseContext();
            var userController = new UserController(dbContext);

            //act
            var result = await userController.GetAllUsers();

            //assert
            result.Should().NotBeNull();
            result.Should().BeOfType<ActionResult<List<User>>>();
        }

        [Fact]
        public async Task UserController_CreateUser_ReturnsOK()
        {
            //arrange
            var user = new User
            {
                FirstName = "John",
                LastName = "Smith",
                Email = "John.Smith@gmail.com"
            };
            var dbContext = GetDatabaseContext();
            var userController = new UserController(dbContext);


            //act
            var result = await userController.AddUser(user);

            //assert

            result.Should().NotBeNull();
            result.Should().BeOfType<OkResult>();
        }

        [Theory]
        [InlineData(1)]
        public async Task UserController_GetUser_ReturnOK(int id)
        {
            //arrange
            var dbContext = GetDatabaseContext();
            var userController = new UserController(dbContext);

            //act
            var result = await userController.GetUser(id);

            //assert
            result.Should().NotBeNull();
            result.Should().BeOfType<ActionResult<User>>();
        }

        [Fact]
        public async Task UserController_UpdateUser_ReturnOK()
        {
            //arrange
            var dbContext = GetDatabaseContext();
            var fakeupdatedUser = A.Fake<IUser>();
            var dbUser = await dbContext.User.FindAsync(fakeupdatedUser.Id);
            //act
            if (dbUser is null)
            {
                return;
            }

            dbUser.FirstName = fakeupdatedUser.FirstName;
            dbUser.LastName = fakeupdatedUser.LastName;
            dbUser.Email = fakeupdatedUser.Email;

            var result = await dbContext.SaveChangesAsync();

            //assert
            result.Should().Be(1);
        }

        [Fact]
        public async Task UserController_DeleteUser_ReturnsOK()
        {
            //arrange
            var dbContext = GetDatabaseContext();
            var userController = new UserController(dbContext);
            var user = new User
            {
                FirstName = "John",
                LastName = "Smith",
                Email = "John.Smith@gmail.com"
            };

            //act
            await userController.AddUser(user);
            var result = await userController.DeleteUser(user.Id);

            //Assert
            result.Should().NotBeNull();
            result.Should().BeOfType<OkResult>();

        }
        
    }
}