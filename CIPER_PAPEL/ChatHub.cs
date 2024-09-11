using Microsoft.AspNetCore.SignalR;
using System.Text.RegularExpressions;

namespace CIPER_PAPEL
{
	public class ChatHub : Hub
	{
		public async Task SendMessage(string message, string room, string user)
		{
			await Clients.Groups(room).SendAsync("RecieveMessage", user, message);
		}

		public async Task AddToGroup(string room)
		{
			await Groups.AddToGroupAsync(Context.ConnectionId, room);

			await Clients.Groups(room).SendAsync("ShowWho", $"Alguien se conecto {Context.ConnectionId}");
		}
	}
}
