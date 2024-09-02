using System.Reflection.Metadata.Ecma335;

namespace CIPER_PAPEL.Models
{
    public class UserListViewModel
    {
        public List<User>? Users { get; set; }
        public User? User { get; set; }
        public string? Response { get; set; }
        public List<Panel>? Paneles { get; set; }
        public int TotalUser { get; set; }
        public int QVentas { get; set; }
        public decimal totalVentas { get; set; }
        public int TotalProveedores { get; set; }

    }
}
