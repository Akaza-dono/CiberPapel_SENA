using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class Proveedore
    {
        public Proveedore()
        {
            Compras = new HashSet<Compra>();
        }

        public int IdProveedor { get; set; }
        public string? Rut { get; set; }
        public string? Nombre { get; set; }

        public virtual ICollection<Compra> Compras { get; set; }
    }
}
