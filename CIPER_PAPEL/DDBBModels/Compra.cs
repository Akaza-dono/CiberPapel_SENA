using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class Compra
    {
        public Compra()
        {
            Comprobantes = new HashSet<Comprobante>();
        }

        public int IdCompra { get; set; }
        public int? Cantidad { get; set; }
        public int? IdUsuario { get; set; }
        public int? IdProveedor { get; set; }
        public int? IdProducto { get; set; }

        public virtual Producto? IdProductoNavigation { get; set; }
        public virtual Proveedore? IdProveedorNavigation { get; set; }
        public virtual Usuario? IdUsuarioNavigation { get; set; }
        public virtual ICollection<Comprobante> Comprobantes { get; set; }
    }
}
