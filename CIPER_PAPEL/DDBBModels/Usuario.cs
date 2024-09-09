using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class Usuario
    {
        public Usuario()
        {
            Compras = new HashSet<Compra>();
            FilesXusers = new HashSet<FilesXuser>();
            UserPermissions = new HashSet<UserPermission>();
            Venta = new HashSet<Venta>();
        }

        public int IdUsuario { get; set; }
        public string? Nombre { get; set; }
        public string? Correo { get; set; }
        public bool? IsBlocked { get; set; }
        public int IdRole { get; set; }
        public byte[]? Password { get; set; }
        public bool? IsActive { get; set; }

        public virtual Role IdRoleNavigation { get; set; } = null!;
        public virtual ICollection<Compra> Compras { get; set; }
        public virtual ICollection<FilesXuser> FilesXusers { get; set; }
        public virtual ICollection<UserPermission> UserPermissions { get; set; }
        public virtual ICollection<Venta> Venta { get; set; }
    }
}
