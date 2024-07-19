namespace gout_cha.com.Models;

// export interface Product {
//     IdProduct: number;
//     Type: string;
//     Name: string;
//     ChineseName: string;
//     Description: string;
//     Link: string;
//     Price: number;
//     Color: string;
//     Weight: number;
//     Origin: string;
// }
public class Product
{
    public int IdProduct { get; set; }
    public string Type { get; set; }
    public string Name { get; set; }
    public string ChineseName { get; set; }
    public string Description { get; set; }
    public string Link { get; set; }
    public float Price { get; set; }
    public string Color { get; set; }
    public float Weight { get; set; }
    public string Origin { get; set; }
}

public class Photo
{
    public int IdPhoto { get; set; }
    public int IdProduct { get; set; }
    public byte[] Image { get; set; }
}

public class User
{
    public int IdUser { get; set; }
    public string Username { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public string Role { get; set; }
}


public class Order
{
    public int IdOrder { get; set; }
    public int IdUser { get; set; }
    public float TotalPrice { get; set; }
    public string Status { get; set; }
    public DateTime Date { get; set; }
    
    public List<ProductOrder> Products { get; set; }
}

public class ProductOrder
{
    public int IdProduct { get; set; }
    public int IdOrder { get; set; }
    public int Quantity { get; set; }
}



