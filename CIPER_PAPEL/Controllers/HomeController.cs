using CIPER_PAPEL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Diagnostics;
using CIPER_PAPEL.Class;
using System.Collections.Specialized;
using System.Data;
using System.Reflection;
using Microsoft.AspNetCore.SignalR;
using System.Xml.Linq;
using CIPER_PAPEL.DDBBModels;

namespace CIPER_PAPEL.Controllers
{
    public class HomeController : Controller
    {
        public HomeController()
        {

        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Sells()
        {
            return View();
        }

        [HttpPost]
        public bool EditUser([FromBody] User User)
        {
            try
            {
               
                Connection conn = new Connection();
                string spNMame = "ActualizarUsuario";
                SqlParameter[] parameters = new SqlParameter[]
                {
                new SqlParameter("@id_usuario", User.Id),
                new SqlParameter("@nombre", User.Nombre),
                new SqlParameter("@correo", User.Correo),
                new SqlParameter("@isBlocked", User.IsBlocked),
                new SqlParameter("@idRole", User.Rol)
                };
                DataTable resultadosSP = conn.EjecutarSP(spNMame, parameters);
                return true;
            }
            catch (Exception ex)
            {
                return false;
                throw new Exception($"no se pudo eliminar el usuario {ex.Message}");
            }
        }

        public bool DeleteUser(int UserId)
        {
            try
            {
                Connection conn = new Connection();
                string spNMame = "EliminarUsuario";
                SqlParameter[] parameters = new SqlParameter[]
                {
                new SqlParameter("@id_usuario", UserId),
                };
                DataTable resultadosSP = conn.EjecutarSP(spNMame, parameters);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        [HttpPost]
        public IActionResult Login(string usuario, string contrasena)
        {
            try
            {
                
                int result = 0;
                Connection conn = new Connection();
                string spNMame = "Login";
                SqlParameter[] parameters = new SqlParameter[]
                {
                new SqlParameter("@usuario", "alejandro"),
                new SqlParameter("@password",  "alejo0598"),
                };
                DataTable resultadosSP = conn.EjecutarSP(spNMame, parameters);
                result = Convert.ToInt32(resultadosSP.Rows[0]["Result"]);

                if (result != 0)
                {
                    List<User> users = GetUser();
                    var model = new UserListViewModel
                    {
                        Users = users,
                        Response = "OK"
                    };

                    //return View("LoginPage", model);
                    return RedirectToAction("index", "Panel", new
                    {
                        userId = result
                    });
                }
                var model2 = new UserListViewModel { Response = "Error" };
                return View("Index", model2);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<User> GetUser()
        {
            try
            {
                List<User> users = new List<User>();
                Connection conn = new Connection();
                string spNMame = "ObtenerUsuarios";
                DataTable resultadosSP = conn.EjecutarSP(spNMame);
                SqlParameter[] parameters = new SqlParameter[]
                {

                };
                foreach (DataRow param in resultadosSP.Rows)
                {
                    var user = new User();
                    user.Id = Convert.ToInt32(param["id_usuario"]);
                    user.Nombre = param["nombre"].ToString();
                    user.Correo = param["correo"].ToString();
                    user.IsBlocked = Convert.ToBoolean(param["isBlocked"]);
                    user.Rol = Convert.ToInt32(param["idRole"]);
                    users.Add(user);
                }
                return users;

            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}