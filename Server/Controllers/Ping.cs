using Microsoft.AspNetCore.Mvc;

namespace gout_cha.com;

[Route("ping")]
[ApiController]
public class Ping : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { message = "Pong" });
    }
}