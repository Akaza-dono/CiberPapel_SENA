using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class VentasState
    {
        public VentasState()
        {
            SecuenciaVenta = new HashSet<SecuenciaVentum>();
        }

        public int IdState { get; set; }
        public string Estado { get; set; } = null!;

        public virtual ICollection<SecuenciaVentum> SecuenciaVenta { get; set; }
    }
}
