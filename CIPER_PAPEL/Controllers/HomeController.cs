using CIPER_PAPEL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Diagnostics;
using CIPER_PAPEL.Class;
using System.Collections.Specialized;
using System.Data;
using System.Reflection;

namespace CIPER_PAPEL.Controllers
{
    public class HomeController : Controller
    {
        private Connection _Connection = new Connection();


        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [HttpPost]
        public bool EditUser([FromBody] User User)
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(_Connection.GetConnection()))
                {
                    conn.Open();

                    using (SqlCommand cmd = new SqlCommand("ActualizarUsuario", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@id_usuario", User.Id);
                        cmd.Parameters.AddWithValue("@nombre", User.Nombre);
                        cmd.Parameters.AddWithValue("@correo", User.Correo);
                        cmd.Parameters.AddWithValue("@isBlocked", User.IsBlocked);
                        cmd.Parameters.AddWithValue("@idRole", User.Rol);

                        cmd.ExecuteNonQuery();
                    }
                }
                return true;
            }
            catch (SqlException ex)
            {
                throw new Exception("Error de SQL: " + ex.Message);
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex.Message);
            }
        }

        public void DeleteUser(int UserId)  
        {
            try
            {
                using (SqlConnection conn = new SqlConnection(_Connection.GetConnection()))
                {
                    conn.Open();

                    using (SqlCommand cmd = new SqlCommand("EliminarUsuario", conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@id_usuario", UserId);
                        cmd.ExecuteNonQuery();
                    }
                }
            }
            catch (Exception ex)
            {
                throw new Exception("Error: " + ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Login(string usuario, string contrasena)
        {
            try
            {
                int result = 0;
                using (SqlConnection connection = new SqlConnection(_Connection.GetConnection()))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand("Login", connection))
                    {
                        command.CommandType = CommandType.StoredProcedure;
                        command.Parameters.AddWithValue("@usuario", usuario);
                        command.Parameters.AddWithValue("@password", contrasena);
                        var reader = command.ExecuteReader();
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                result = Convert.ToInt32(reader["Result"]);
                            }
                        }
                    }
                }
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
                using (SqlConnection conn = new SqlConnection(_Connection.GetConnection()))
                {
                    string Sp = "ObtenerUsuarios";
                    using (SqlCommand cmd = new SqlCommand(Sp, conn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.CommandText = Sp;
                        conn.Open();
                        using (SqlDataReader dr = cmd.ExecuteReader())
                        {
                            if (dr.HasRows)
                            {
                                while (dr.Read())
                                {
                                    var user = new User();
                                    user.Id = Convert.ToInt32(dr["id_usuario"]);
                                    user.Nombre = dr["nombre"].ToString();
                                    user.Correo = dr["correo"].ToString();
                                    user.IsBlocked = Convert.ToBoolean(dr["isBlocked"]);
                                    user.Rol = Convert.ToInt32(dr["idRole"]);
                                    users.Add(user);
                                }
                            }
                        }
                    }
                }
                return users;
            }
            catch (Exception)
            {

                throw;
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}