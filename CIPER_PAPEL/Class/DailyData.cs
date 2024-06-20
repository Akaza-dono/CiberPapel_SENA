using CIPER_PAPEL.Data;
using CIPER_PAPEL.DDBBModels;
using CIPER_PAPEL.Models;
using System.Data;

namespace CIPER_PAPEL.Class
{
    public class DailyData
    {
        public decimal GetAllSells()
        {
            using (ApplicationDbContext context = new ApplicationDbContext())
            {
                var today = DateTime.Today;
                var tomorrow = today.AddDays(1);

                var totalVentasHoy = (from ventas in context.Ventas
                                      join secuencia in context.SecuenciaVenta
                                      on ventas.SecuenciaVenta equals secuencia.SecuenciaId
                                      join productos in context.Productos
                                      on ventas.IdProducto equals productos.IdProducto
                                      where secuencia.FechaVenta >= today && secuencia.FechaVenta < tomorrow
                                      select ventas.Cantidad * productos.Precio
                                     ).Sum();
                decimal total;
                total = (decimal)totalVentasHoy == null ? 0.00m : (decimal)totalVentasHoy;
                return total;
            }
        }

        public List<Producto> GetProductos()
        {
            try
            {
                using(ApplicationDbContext context = new())
                {
                    var products = new List<Producto>();
                    var query = context.Productos.ToList();
                    products.AddRange(query);
                    return products;
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

        public List<SecuenciaVentum> EstadoVentas()
        {
            try
            {
                using(ApplicationDbContext context = new())
                {
                    var data = new List<SecuenciaVentum>();
                    var query = context.SecuenciaVenta.ToList();
                    data.AddRange(query);
                    return data;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<DailySells> GetDailySells()
        {
            try
            {
                List<DailySells> dailySells = new();
                Connection conn = new();
                DataTable resultadosSP = conn.EjecutarSP("ventas_diarias");
                foreach (DataRow venta in resultadosSP.Rows)
                {
                    var sell = new DailySells();
                    sell.Total = (decimal)venta["total_dia"];
                    sell.Date = Convert.ToDateTime(venta["Fecha"]);
                    dailySells.Add(sell);
                }
                return dailySells;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public int TotalVentas()
        {
            try
            {
                using (ApplicationDbContext context = new())
                {
                    var query = (context.SecuenciaVenta).Select(e => e.IdVentaState).Count();
                    return (int)query;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
