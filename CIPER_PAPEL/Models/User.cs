namespace CIPER_PAPEL.Models
{
    public class User
    {
        public int Id { get; set; }
        public string? Nombre { get; set; }
        public string? Correo { get; set; }
        public bool IsBlocked { get; set; }
        public int Rol { get; set; }
        public string? Password { get; set; }
    }
}
