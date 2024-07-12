using System.Collections;
using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace gout_cha.com;

using Microsoft.Data.SqlClient;

[Route("product")]
[ApiController]
public class ProductController : ControllerBase
{
    [HttpGet("getProduct")]
    public IActionResult GetProduct(string id)
    {
        List<Hashtable> result = DBController.MakeQuery($"SELECT * FROM Product WHERE IdProduct = {id}");
        //json serialize result
        return Ok(new { message = "Get product successful", product = result });
    }
    
    [HttpGet("getAllTea")]
    public IActionResult GetAllTea()
    {
        List<Hashtable> result = DBController.MakeQuery("SELECT * FROM Product WHERE Type = 'Tea'");
        foreach (var tea in result)
        {
            List<string> images = new List<string>();
            List<Hashtable> photos = DBController.MakeQuery($"SELECT Image FROM Photo WHERE IdProduct = {tea["IdProduct"]}");
            foreach (var photo in photos)
            {
                //decode from base64
                images.Add(photo["Image"].ToString());
            }
            tea.Add("Images", images);
        }
        return Ok(new { message = "Get all tea successful", result });
    }
}
