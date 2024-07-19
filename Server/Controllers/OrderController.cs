using System.Collections;
using gout_cha.com.Models;
using Microsoft.AspNetCore.Mvc;

namespace gout_cha.com;

[Route("order")]
[ApiController]
public class OrderController : ControllerBase
{
    
    
    [HttpGet("getOrderByIdOrder")]
    public IActionResult GetOrderByIdOrder(string id)
    {
        List<Hashtable> result = DBController.MakeQuery($"SELECT * FROM Order WHERE IdOrder = {id}");
        return Ok(new { message = "Get order by id order successful", result });
    }
    
    [HttpGet("getOrdersByIdUser")]
    public IActionResult GetOrderByIdUser(string id)
    {
        List<Hashtable> result = DBController.MakeQuery($"SELECT * FROM [Order] WHERE IdUser = {id}");
        
        foreach (var order in result)
        {
            List<Hashtable> products = DBController.MakeQuery($"SELECT * FROM ProductOrder WHERE IdOrder = {order["IdOrder"]}");
            order.Add("Products", products);
        }
        
        return Ok(new { message = "Get order by id user successful", result });
    }
    
    [HttpPost("addOrder")]
    public IActionResult AddOrder([FromBody] Order body)
    {
        try
        {
            int idUser = body.IdUser;
            string price = body.TotalPrice.ToString(System.Globalization.CultureInfo.InvariantCulture);
            string status = body.Status;
            string date = body.Date.ToString("yyyy-MM-dd HH:mm:ss");

            List<Hashtable> result = DBController.MakeQuery(
                $"INSERT INTO [Order] (IdUser, TotalPrice, Status, Date)" +
                $"OUTPUT INSERTED.IdOrder " +
                $"VALUES ({idUser},{price},'{status}','{date}');");
         
            foreach (var product in body.Products)
            {
                int idProduct = product.IdProduct;
                int quantity = product.Quantity;
                string idOrder = result[0]["IdOrder"].ToString();
                List<Hashtable> resultProductOrder = DBController.MakeQuery(
                    $"INSERT INTO ProductOrder (IdProduct, IdOrder, Quantity) " +
                    $"VALUES ({idProduct},{idOrder},{quantity});");
            }
            
            return Created("", new { message = "Add order successful", result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Add order failed", error = ex.Message });
        }
    }
    
    
}