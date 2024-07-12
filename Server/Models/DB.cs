namespace gout_cha.com.Models;

public class Product
{
    private int IdProduct { get; set; }
    private string Type { get; set; }
    private string Name { get; set; }
    private string Description { get; set; }
    private float Price { get; set; }
    private string Color { get; set; }
    private float Weight { get; set; }
    private int IdProvider { get; set; }
    private string Origin { get; set; }
}

public class Photo
{
    private int IdPhoto { get; set; }
    private int IdProduct { get; set; }
    private byte[] Image { get; set; }
}

public class User
{
    private int IdUser { get; set; }
    private string Username { get; set; }
    private string Email { get; set; }
    private string Password { get; set; }
    private string Role { get; set; }
}