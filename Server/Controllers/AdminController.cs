using System.Collections;
using gout_cha.com.Models;

namespace gout_cha.com;

using Microsoft.AspNetCore.Mvc;

[Route("admin")]
public class AdminController : ControllerBase
{
    [HttpPost("addPhoto")]
    public IActionResult AddPhoto( [FromBody] AddPhotoRequest body)
    {
        try
        {
            int idProduct = body.idProduct;
            string image = body.image;
            
            List<Hashtable> result = DBController.MakeQuery(
                $"INSERT INTO Photo (IdProduct, Image) " +
                $"VALUES ({idProduct},'{image}');");
            return Created("", new { message = "Add photo successful", result = result});
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Add photo failed", error = ex.Message });
        }
    }
    
    [HttpDelete("deletePhoto")]
    public IActionResult DeletePhoto(string id)
    {
        try
        {
            List<Hashtable> result = DBController.MakeQuery($"DELETE FROM Photo WHERE IdProduct = {id}");
            return Ok(new { message = "Delete photo successful", result = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Delete photo failed", error = ex.Message });
        }
    }
    
    
    [HttpPost("addProduct")]
    public IActionResult AddProduct([FromBody] Product body)
    {
        try
        {
            string price = body.Price.ToString(System.Globalization.CultureInfo.InvariantCulture);
            string weight = body.Weight.ToString(System.Globalization.CultureInfo.InvariantCulture);
            List<Hashtable> result = DBController.MakeQuery(
                $"INSERT INTO Product (Type, Name, ChineseName, Description, Link, Price, Color, Weight, Origin) " +
                $"OUTPUT INSERTED.IdProduct " +
                $"VALUES ('{body.Type}', '{body.Name}', N'{body.ChineseName}', N'{body.Description}', '{body.Link}', {price}, '{body.Color}', {weight}, '{body.Origin}');");
            return Created("", new { message = "Add product successful", result = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Add product failed", error = ex.Message });
        }
    }
    
    [HttpPut("updateProduct")]
    public IActionResult UpdateProduct([FromBody] Product body)
    {
        try
        {
            string price = body.Price.ToString(System.Globalization.CultureInfo.InvariantCulture);
            string weight = body.Weight.ToString(System.Globalization.CultureInfo.InvariantCulture);
            List<Hashtable> result = DBController.MakeQuery(
                $"UPDATE Product SET Type = '{body.Type}', Name = '{body.Name}', ChineseName = N'{body.ChineseName}', Description = N'{body.Description}', Link = '{body.Link}', Price = {price}, Color = '{body.Color}', Weight = {weight}, Origin = '{body.Origin}' " +
                $"WHERE IdProduct = {body.IdProduct}");
            return Ok(new { message = "Update product successful", result = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Update product failed", error = ex.Message });
        }
    }
    
    [HttpDelete("deleteProduct")]
    public IActionResult DeleteProduct(string id)
    {
        try
        {
            // List<Hashtable> order = DBController.MakeQuery($"DELETE FROM ProductOrder WHERE IdProduct = {id} "+
            //                                               $"OUTPUT deleted.IdOrder");
            // DBController.MakeQuery($"DELETE FROM [Order] WHERE IdOrder = {idOrder}");
            DBController.MakeQuery($"DELETE FROM Photo WHERE IdProduct = {id}");
            
            List<Hashtable> result = DBController.MakeQuery($"DELETE FROM Product WHERE IdProduct = {id}");
            return Ok(new { message = "Delete product successful", result = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Delete product failed", error = ex.Message });
        }
    }
    
    [HttpDelete("deleteOrder")]
    public IActionResult DeleteOrder(string id)
    {
        try
        {
            List<Hashtable> result = DBController.MakeQuery($"DELETE FROM ProductOrder WHERE IdOrder = {id}");
            DBController.MakeQuery($"DELETE FROM [Order] WHERE IdOrder = {id}");
            return Ok(new { message = "Delete order successful", result = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Delete order failed", error = ex.Message });
        }
    }
    
    [HttpPut("updateOrderStatus")]
    public IActionResult UpdateOrderStatus([FromBody] UpdateOrderStatusRequest body)
    {
        try
        {
            List<Hashtable> result = DBController.MakeQuery(
                $"UPDATE [Order] SET Status = '{body.status}' " +
                $"WHERE IdOrder = {body.idOrder}");
            return Ok(new { message = "Update order status successful", result = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Update order status failed", error = ex.Message });
        }
    }
    
    public class AddPhotoRequest
    {
        public int idProduct { get; set; }
        public string image { get; set; }
    }
}

public class UpdateOrderStatusRequest
{
    public int idOrder { get; set; }
    public string status { get; set; }
}