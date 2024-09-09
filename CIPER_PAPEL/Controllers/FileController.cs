using CIPER_PAPEL.Data;
using CIPER_PAPEL.DDBBModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic.FileIO;
using System.Security.Cryptography;

namespace CIPER_PAPEL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileController : ControllerBase
    {

        private readonly ApplicationDbContext applicationDbContext;
        public FileController(ApplicationDbContext ctx) { 
            applicationDbContext = ctx;
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No se ha cargado ningún archivo.");
            }

            try
            {
                // Convertir el archivo a un array de bytes
                byte[] fileBytes;
                using (var memoryStream = new MemoryStream())
                {
                    await file.CopyToAsync(memoryStream);  // Este "file" es el archivo que se cargó
                    fileBytes = memoryStream.ToArray();
                }

                // Guardar el archivo como byte[] en la base de datos
                applicationDbContext.FilesXusers.Add(new FilesXuser
                {
                    File = fileBytes,
                    FileName = file.FileName,  // Aquí obtienes el nombre del archivo
                    FileType = Convert.ToString(file.ContentType),  // Aquí obtienes el tipo de archivo
                    IdUser = 4
                });
                applicationDbContext.SaveChanges();

                return Ok(new { creado = "OK" });
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new
                {
                    Message = "Error al procesar el archivo.",
                    Error = ex.Message
                });
            }
        }

        private byte[] EncryptFile(byte[] fileBytes, byte[] key)
        {
            using (var aes = Aes.Create())
            {
                aes.Key = key;
                aes.IV = new byte[16]; // Para simplificar, usamos un IV de ceros

                using (var encryptor = aes.CreateEncryptor(aes.Key, aes.IV))
                using (var memoryStream = new MemoryStream())
                using (var cryptoStream = new CryptoStream(memoryStream, encryptor, CryptoStreamMode.Write))
                {
                    cryptoStream.Write(fileBytes, 0, fileBytes.Length);
                    cryptoStream.FlushFinalBlock();
                    return memoryStream.ToArray();
                }
            }
        }

        [HttpGet("download/{fileId}")]
        public IActionResult DownloadFile(int fileId)
        {
            var fileRecord = applicationDbContext.FilesXusers.Find(fileId);
            if (fileRecord == null)
            {
                return NotFound();
            }

            // Devolver el archivo cifrado al cliente
            return File(fileRecord.File, fileRecord.FileType, fileRecord.FileName);
        }

    }
}
