using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class UserPermission
    {
        public int IsUserPermission { get; set; }
        public int IdUser { get; set; }
        public int IdPanel { get; set; }

        public virtual Panel IdPanelNavigation { get; set; } = null!;
        public virtual Usuario IdUserNavigation { get; set; } = null!;
    }
}
