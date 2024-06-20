using CIPER_PAPEL.DDBBModels;

namespace CIPER_PAPEL.Models
{
    public class AllData
    {
        public decimal GetAllSells { get; set; }
        public List<Producto>? GetProductos { get; set; }
        public List<SecuenciaVentum>? EstadoVentas { get; set; }
        public List<DailySells>? GetDailySells { get; set; }
        public int Total {  get; set; }
    }
}
