using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class Panel
    {
        public Panel()
        {
            RolPermissions = new HashSet<RolPermission>();
            UserPermissions = new HashSet<UserPermission>();
        }

        public int Id { get; set; }
        public string Url { get; set; } = null!;
        public string Icon { get; set; } = null!;
        public string TextDescription { get; set; } = null!;

        public virtual ICollection<RolPermission> RolPermissions { get; set; }
        public virtual ICollection<UserPermission> UserPermissions { get; set; }
    }
}
