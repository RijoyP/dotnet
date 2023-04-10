using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Nodes;

namespace partymaster_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PartmasterApiController : ControllerBase
    {
        private readonly ILogger<PartmasterApiController> _logger;

        public PartmasterApiController(ILogger<PartmasterApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetVersion")]
        public string Get()
        {
            return "Result from Dotnet core Rest Api : Partymaster 1.0";
        }

    }
}
