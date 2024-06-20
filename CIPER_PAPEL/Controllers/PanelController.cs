using CIPER_PAPEL.Class;
using CIPER_PAPEL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace CIPER_PAPEL.Controllers
{
    public class PanelController : Controller
    {
        public IActionResult Index(int userId)
        {
            UserListViewModel model = new UserListViewModel();
            model.Paneles = GetPanels(userId);
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
                    Panel CreatePanel = new Panel();
                    CreatePanel.Descripcion = Convert.ToString(param["textDescription"]);
                    CreatePanel.URL = Convert.ToString(param["url"]);
                    CreatePanel.Icon = Convert.ToString(param["icon"]);
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
                DailyData DailyData = new();
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
