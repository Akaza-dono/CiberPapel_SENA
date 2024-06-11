using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class Venta
    {
        public int IdVenta { get; set; }
        public int? Cantidad { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdProducto { get; set; }
        public int SecuenciaVenta { get; set; }

        public virtual Producto? IdProductoNavigation { get; set; }
        public virtual Usuario? IdUsuarioNavigation { get; set; }
        public virtual SecuenciaVentum SecuenciaVentaNavigation { get; set; } = null!;
    }
}
