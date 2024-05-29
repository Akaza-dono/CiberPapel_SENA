using CIPER_PAPEL.Class;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace CIPER_PAPEL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RealTimeDataController : ControllerBase
    {
        private IHubContext<GetRealTimeDataHub> _hubcontext;

        public RealTimeDataController(IHubContext<GetRealTimeDataHub> hubcontext)
        {
            _hubcontext = hubcontext;
        }

        [HttpGet]
        public async Task<IActionResult> Send(string message)
        {
            await _hubcontext.Clients.All.SendAsync("SendMessage",message);
            return Ok();
        }
    }
}
