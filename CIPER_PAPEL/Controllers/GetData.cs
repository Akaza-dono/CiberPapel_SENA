using CIPER_PAPEL.Class;
using CIPER_PAPEL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace CIPER_PAPEL.Controllers
{
    public class GetData : Controller
    {
        public List<User> GetUser()
        {
            try
            {
                List<User> users = new List<User>();
                Connection conn = new Connection();
                string spNMame = "ObtenerUsuarios";
                DataTable resultadosSP = conn.EjecutarSP(spNMame);
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
