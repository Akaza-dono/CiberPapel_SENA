using System;
using System.Collections.Generic;

namespace CIPER_PAPEL.DDBBModels
{
    public partial class File
    {
        public int IdFile { get; set; }
        public string? FileName { get; set; }
        public string? FileType { get; set; }
        public string? File1 { get; set; }
        public int? IdUser { get; set; }

        public virtual Usuario? IdUserNavigation { get; set; }
    }
}
