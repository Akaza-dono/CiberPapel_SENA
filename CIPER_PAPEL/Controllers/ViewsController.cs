using CIPER_PAPEL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
namespace CIPER_PAPEL.Controllers
{
    public class ViewsController : Controller
    {
        public IActionResult EditUsers()
        {
            var model = new UserListViewModel
            {
                Response = "OK"
            };
            return View("~/Views/Home/LoginPage.cshtml", model);
        }

        public IActionResult EditProveedores()
        {
            return View("~/Views/Vistas/Proveedores.cshtml");
        }

        public IActionResult CrearVenta()
        {
            return View("~/Views/Vistas/Sells.cshtml");
        }
    }
}
