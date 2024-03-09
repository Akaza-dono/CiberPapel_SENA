using System.Reflection.Metadata.Ecma335;

namespace CIPER_PAPEL.Class
{
    public class UserListViewModel
    {
        public List<User>? Users { get; set; }
        public User? User { get; set; }
        public string? Response{ get; set; }
        public List<Panel>? Paneles { get; set; }
    }
}
