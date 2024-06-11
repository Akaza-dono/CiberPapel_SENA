using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class Role
    {
        public Role()
        {
            RolPermissions = new HashSet<RolPermission>();
            Usuarios = new HashSet<Usuario>();
        }

        public string Descripcion { get; set; } = null!;
        public int IdRole { get; set; }

        public virtual ICollection<RolPermission> RolPermissions { get; set; }
        public virtual ICollection<Usuario> Usuarios { get; set; }
    }
}
