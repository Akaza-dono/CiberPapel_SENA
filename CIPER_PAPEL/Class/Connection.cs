using Microsoft.Extensions.Configuration;
using System;
using System.Data;
using System.Data.SqlClient;
namespace CIPER_PAPEL.Class
{

    using System;
    using System.Data;
    using System.Data.SqlClient;

    public class Connection
    {
        protected string? connectionString;
        public void GetConnection()
        {
            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json");
            var configuration = builder.Build();
            var connString = configuration.GetConnectionString("CiberPapel");
            connectionString = connString;
        }


        protected SqlConnection AbrirConexion()
        {
            GetConnection();
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();
            return connection;
        }

        public DataTable EjecutarConsulta(string query)
        {  
            DataTable dt = new DataTable();

            using (SqlConnection connection = AbrirConexion())
            {
                SqlCommand command = new SqlCommand(query, connection);
                SqlDataAdapter adapter = new SqlDataAdapter(command);

                try
                {
                    adapter.Fill(dt);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al ejecutar consulta: " + ex.Message);
                }
            }

            return dt;
        }

        public DataTable EjecutarSP(string spName, SqlParameter[]? parameters = null)
        {
            DataTable dt = new DataTable();

            using (SqlConnection connection = AbrirConexion())
            {
                SqlCommand command = new SqlCommand(spName, connection);
                command.CommandType = CommandType.StoredProcedure;
                if (parameters != null)
                {
                    command.Parameters.AddRange(parameters);
                }
                SqlDataAdapter adapter = new SqlDataAdapter(command);
                try
                {
                    adapter.Fill(dt);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Error al ejecutar procedimiento almacenado: " + ex.Message);
                }
            }

            return dt;
        }
    }

}