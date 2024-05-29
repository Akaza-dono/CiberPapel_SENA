using Microsoft.AspNetCore.SignalR;

namespace CIPER_PAPEL.Class
{
    public class GetRealTimeDataHub : Hub
    {
        public async Task Send(int total = 45)
        {
            await Clients.All.SendAsync("Recieve", total);
        }
    }
}
