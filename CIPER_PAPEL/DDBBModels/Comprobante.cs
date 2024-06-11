using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class Comprobante
    {
        public int IdComprobante { get; set; }
        public DateTime? Fecha { get; set; }
        public int? IdCompra { get; set; }

        public virtual Compra? IdCompraNavigation { get; set; }
    }
}
