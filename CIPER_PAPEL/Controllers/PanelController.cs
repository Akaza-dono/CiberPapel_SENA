using CIPER_PAPEL.Class;
using CIPER_PAPEL.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data.SqlTypes;

namespace CIPER_PAPEL.Controllers
{
    public class PanelController : Controller
    {
        private Connection _Connection = new Connection();
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
                using(SqlConnection conn = new SqlConnection(_Connection.GetConnection()))
                {
                    conn.Open();
                    List<Panel> panel = new List<Panel>();
                    using(SqlCommand cmd = new SqlCommand("GetPermissions",conn)) {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@IdUser", user_id);
                        cmd.ExecuteNonQuery();
                        using(SqlDataReader reader = cmd.ExecuteReader())
                        {
                            if (reader.HasRows)
                            {
                                while (reader.Read())
                                {
                                    Panel CreatePanel = new Panel();
                                    CreatePanel.Descripcion = Convert.ToString(reader["textDescription"]);
                                    CreatePanel.URL = Convert.ToString(reader["url"]);
                                    CreatePanel.Icon = Convert.ToString(reader["icon"]);
                                    panel.Add(CreatePanel);
                                }
                            }
                        }
                        return panel;
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }  
        }
    }
}
