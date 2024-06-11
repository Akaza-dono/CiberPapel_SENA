using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class RolPermission
    {
        public int IdPermisson { get; set; }
        public int IdPanel { get; set; }
        public int IdRol { get; set; }

        public virtual Panel IdPanelNavigation { get; set; } = null!;
        public virtual Role IdRolNavigation { get; set; } = null!;
    }
}
