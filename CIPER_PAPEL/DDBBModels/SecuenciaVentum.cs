using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class SecuenciaVentum
    {
        public SecuenciaVentum()
        {
            Venta = new HashSet<Venta>();
        }

        public int SecuenciaId { get; set; }
        public DateTime? FechaVenta { get; set; }
        public int? IdVentaState { get; set; }

        public virtual VentasState? IdVentaStateNavigation { get; set; }
        public virtual ICollection<Venta> Venta { get; set; }
    }
}
