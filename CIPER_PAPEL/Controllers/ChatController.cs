using Microsoft.AspNetCore.Mvc;

namespace CIPER_PAPEL.Controllers
{
    public class ChatController : Controller
    {
        public static Dictionary<int, string> Rooms =
    new Dictionary<int, string>()
    {
                {1, "Chat de Cervezas" },
                {2, "Chat de Programacion" },
                {3, "Chat de Moda" }
    };
        public IActionResult Index()
        {
            return View();
        }


        public IActionResult Room(int room)
        {
            return View("Room", room);
        }
    }
}
