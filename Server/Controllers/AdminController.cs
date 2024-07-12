using System.Collections;
using System.Data;
using Microsoft.Data.SqlClient;

namespace gout_cha.com;

using Microsoft.AspNetCore.Mvc;

[Route("admin")]
public class AdminController : ControllerBase
{
    [HttpPost("addProduct")]
    public IActionResult AddProduct(string type, string name, string description, float price, string color, float weight, int idProvider, string origin)
    {
        try
        {
            List<Hashtable> result = DBController.MakeQuery($"INSERT INTO Product (Type, Name, Description, Price, Color, Weight, IdProvider, Origin) VALUES ('{type}', '{name}', '{description}', {price}, '{color}', {weight}, {idProvider}, '{origin}')");
            return Created("", new { message = "Add product successful", result = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Add product failed", error = ex.Message });
        }
    }
    
    [HttpDelete("deleteProduct")]
    public IActionResult DeleteProduct(string id)
    {
        try
        {
            List<Hashtable> result = DBController.MakeQuery($"DELETE FROM Product WHERE IdProduct = {id}");
            return Ok(new { message = "Delete product successful", result = result });
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Delete product failed", error = ex.Message });
        }
    }
    
    [HttpPost("addPhoto")]
    public IActionResult AddPhoto( [FromBody] AddPhotoRequest body)
    {
        try
        {
            int idProduct = body.idProduct;
            // byte[] image = Convert.FromBase64String(body.image);
            string image = body.image;
            
            List<Hashtable> result = DBController.MakeQuery(
                $"INSERT INTO Photo (IdProduct, Image) " +
                $"VALUES ('{idProduct}','{image}');");
            return Created("", new { message = "Add photo successful", result = result});
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = "Add photo failed", error = ex.Message });
        }
    }
    
    public class AddPhotoRequest
    {
        public int idProduct { get; set; }
        public string image { get; set; }
    }
}