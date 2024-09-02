using CIPER_PAPEL.Class;
using CIPER_PAPEL.Data;
using CIPER_PAPEL.DDBBModels;
using CIPER_PAPEL.DTO_s;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Data;
using System.Data.SqlClient;
using System.Xml.Linq;

namespace CIPER_PAPEL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RealTimeDataController : ControllerBase
    {
        private IHubContext<GetRealTimeDataHub> _hubcontext;
        private ApplicationDbContext _ApplicationDbContext;

        public RealTimeDataController(IHubContext<GetRealTimeDataHub> hubcontext, ApplicationDbContext context)
        {
            _hubcontext = hubcontext;
            _ApplicationDbContext = context;
        }

        private int CreateSecuencia()
        {
            try
            {
                var nuevaSecuencia = new SecuenciaVentum
                {
                    FechaVenta = DateTime.Now,
                    IdVentaState = 1,
                };

                _ApplicationDbContext.SecuenciaVenta.Add(nuevaSecuencia);

                _ApplicationDbContext.SaveChanges();

                // Retornar el Id generado
                return nuevaSecuencia.SecuenciaId;
            }
            catch (Exception)
            {
                throw;
            }
        }

        [HttpPost]
        public async Task<IActionResult> Send([FromBody] List<VentasDTO> ventas)
        {
            try
            {
                int secuencia = CreateSecuencia();
                Connection conn = new Connection();
                string spName = "CrearVenta";
                foreach (var venta in ventas)
                {
                    SqlParameter[] parameters = new SqlParameter[]
                    {
                        new SqlParameter("@cantidad", venta.Cantidad),
                        new SqlParameter("@id_usuario", venta.IdUsuario),
                        new SqlParameter("@id_producto", venta.IdProducto),
                        new SqlParameter("@secuencia", secuencia),
                    };

                    DataTable resultadosSP = conn.EjecutarSP(spName, parameters);
                }
            }
            catch (Exception ex)
            {
                throw new Exception($"no se pudo crear la venta {ex.Message}");
            }

            DailyData a = new DailyData(_ApplicationDbContext);
            decimal totalVentas = a.GetAllSells();
            await _hubcontext.Clients.All.SendAsync("SendMessage", totalVentas);
            return Ok("Venta Creada");
        }
    }
}
