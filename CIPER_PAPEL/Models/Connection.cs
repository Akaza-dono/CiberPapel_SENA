using Microsoft.Extensions.Configuration;

namespace CIPER_PAPEL.Models
{
    public class Connection
    {
        private readonly IConfiguration? _configuration;

        public string GetConnection()
        {
            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json");
            var configuration = builder.Build();
            var connString = configuration.GetConnectionString("CiberPapel");
            return connString;
        }
    }
}