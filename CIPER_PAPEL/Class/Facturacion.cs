using CIPER_PAPEL.Data;
using CIPER_PAPEL.DDBBModels;
using System.ComponentModel;

namespace CIPER_PAPEL.Class
{
    public class Facturacion
    {
        public int GetIdVenta()
        {
            try
            {
                using(ApplicationDbContext context = new())
                {
                    var secuencia = new SecuenciaVentum
                    {
                        IdVentaState = 1
                    };
                    context.SecuenciaVenta.Add(secuencia);
                    context.SaveChanges();

                    int id = secuencia.SecuenciaId;  
                    return id;
                }
            }
            catch (Exception)
            {

                throw;
            }
        } 

        public void AddItems(List<Venta> ventas)
        {
            try
            {
                using (ApplicationDbContext context = new())
                {
                    context.Ventas.AddRange(ventas);
                    context.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void DeleteItemVentaById(int idItem)
        {
            try
            {
                using(ApplicationDbContext context = new())
                {
                    var venta = context.Ventas.Where(e => e.IdVenta == idItem).FirstOrDefault();
                    if (venta != null)
                    {
                        venta.IsAvailable = false;
                        context.SaveChanges();
                    }
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void CancelarVenta(int id)
        {
            try
            {
                using (ApplicationDbContext context = new())
                {
                    var venta = context.SecuenciaVenta.Where(e => e.SecuenciaId == id).FirstOrDefault();
                    if (venta != null)
                    {
                        venta.IdVentaState = 4;
                        context.SaveChanges();
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
