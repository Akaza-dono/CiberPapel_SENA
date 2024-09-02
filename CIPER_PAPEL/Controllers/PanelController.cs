using CIPER_PAPEL.Class;
using CIPER_PAPEL.Data;
using CIPER_PAPEL.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace CIPER_PAPEL.Controllers
{
    public class PanelController : Controller
    {


        private ApplicationDbContext _ApplicationDbContext;

        public PanelController( ApplicationDbContext context)
        {
            _ApplicationDbContext = context;
        }
        public IActionResult Index(int userId, string name)
        {
            DailyData data = new(_ApplicationDbContext);
            UserListViewModel model = new UserListViewModel();
            User user = new();
            model.Paneles = GetPanels(userId);
            user.Id = userId;
            user.Nombre = name;
            model.User = user;
            model.TotalUser = data.TotalUsers();
            model.totalVentas = data.GetAllSells();
            model.TotalProveedores = data.TotalProveedores();

            return View(model);
        }

        public List<Panel> GetPanels(int user_id)
        {
            try
            {
                List<Panel> panel = new List<Panel>();

                Connection conn = new Connection();
                string spNMame = "GetPermissions";
                SqlParameter[] parameters = new SqlParameter[]
                {
                    new SqlParameter("@IdUser", user_id),
                };
                DataTable resultadosSP = conn.EjecutarSP(spNMame, parameters);

                foreach (DataRow param in resultadosSP.Rows)
                {
                    var CreatePanel = new Panel();
                    CreatePanel.Descripcion = Convert.ToString(param["textDescription"]);
                    CreatePanel.URL = Convert.ToString(param["url"]);
                    CreatePanel.Icon = Convert.ToString(param["icon"]);
                    CreatePanel.goTo = Convert.ToString(param["sendTo"]);

                    panel.Add(CreatePanel);
                }
                return panel;
            }
            catch (Exception)
            {

                throw;
            }
        }

        [HttpGet]
        [Route("panel/getalldata")]
        public AllData GetAllData()
        {
            try
            {
                DailyData DailyData = new(_ApplicationDbContext);
                AllData data = new();
                data.GetDailySells = DailyData.GetDailySells();
                data.GetAllSells = DailyData.GetAllSells();
                data.EstadoVentas = DailyData.EstadoVentas();
                data.GetProductos = DailyData.GetProductos();
                data.Total = DailyData.TotalVentas();

                return data;
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
