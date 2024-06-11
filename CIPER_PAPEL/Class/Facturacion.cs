using CIPER_PAPEL.Data;
using CIPER_PAPEL.DDBBModels;

namespace CIPER_PAPEL.Class
{
    public class Facturacion
    {
        public int GetIdVenta()
        {
            return 0;
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


    }
}
