using System.Collections;
using gout_cha.com.Models;
using Microsoft.AspNetCore.Mvc;

namespace gout_cha.com;

[Route("user")]
[ApiController]
public class UserController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginData body)
    {
        string username = body.Username;
        string password = body.Password;
        
        List<Hashtable> result = DBController.MakeQuery($"SELECT IdUser, Username, Email , Role FROM Usr WHERE Username = '{username}' AND Password = '{password}'");
        if (result.Count != 1)
        {
            return Unauthorized(new { message = "Login failed" });
        }
        return Ok(new { message = "Login successful", result = result[0]});
    }

    [HttpPost("logout")]
    public IActionResult Logout(string username)
    {
        List<Hashtable> result = DBController.MakeQuery($"SELECT * FROM Usr");
        // logout
        return Ok(new { message = "Logout successful", result = result});
    }

    [HttpPost("register")]
    public IActionResult Register([FromBody] User body)
    {
        string username = body.Username;
        string email = body.Email;
        string password = body.Password;
        string role = "user";
        
        try
        {
            List<Hashtable> result = DBController.MakeQuery($"INSERT INTO Usr (Username, Email, Password, Role) VALUES ('{username}', '{email}', '{password}', '{role}')");
            return Created("", new { message = "Registration successful", result = result});
        }
        catch (Exception ex)
        {
            // Assuming any exception is due to a failure in registration, e.g., duplicate username
            return BadRequest(new { message = "Registration failed", error = ex.Message });
        }
    }
    
    [HttpDelete("deregsiter")]
    public IActionResult Deregister(string username)
    {
        try
        {
            List<Hashtable> result = DBController.MakeQuery($"DELETE FROM Usr WHERE Username = '{username}'");
            return Ok(new { message = "Deregistration successful", result = result});
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Deregistration failed", error = ex.Message });
        }
    }
    
    public class LoginData
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}