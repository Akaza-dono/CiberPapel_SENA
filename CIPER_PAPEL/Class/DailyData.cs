using CIPER_PAPEL.Data;

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
    }
}
