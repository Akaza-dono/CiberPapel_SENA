using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class Factura
    {
        public int IdFactura { get; set; }
        public DateTime? Fecha { get; set; }
        public int? IdVenta { get; set; }
    }
}
