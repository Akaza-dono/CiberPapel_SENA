using CIPER_PAPEL.Class;
using CIPER_PAPEL.Data;
using CIPER_PAPEL.DDBBModels;
using CIPER_PAPEL.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace CIPER_PAPEL.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        [HttpGet("GetUsers")]
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

        [HttpGet("GetProveedores")]
        public List<Proveedore> GetProveedores()
        {
            try
            {
                using (ApplicationDbContext context = new())
                {
                    var query = context.Proveedores.ToList();
                    return query;
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"no se pueden extraer los datos {ex}");
            }
        }

    }
}
