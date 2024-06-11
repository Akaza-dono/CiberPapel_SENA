using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using CIPER_PAPEL.DDBBModels;

namespace CIPER_PAPEL.Data
{
    public partial class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Compra> Compras { get; set; } = null!;
        public virtual DbSet<Comprobante> Comprobantes { get; set; } = null!;
        public virtual DbSet<Factura> Facturas { get; set; } = null!;
        public virtual DbSet<Panel> Panels { get; set; } = null!;
        public virtual DbSet<Producto> Productos { get; set; } = null!;
        public virtual DbSet<Proveedore> Proveedores { get; set; } = null!;
        public virtual DbSet<RolPermission> RolPermissions { get; set; } = null!;
        public virtual DbSet<Role> Roles { get; set; } = null!;
        public virtual DbSet<SecuenciaVentum> SecuenciaVenta { get; set; } = null!;
        public virtual DbSet<UserPermission> UserPermissions { get; set; } = null!;
        public virtual DbSet<Usuario> Usuarios { get; set; } = null!;
        public virtual DbSet<Venta> Ventas { get; set; } = null!;
        public virtual DbSet<VentasState> VentasStates { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var builder = new ConfigurationBuilder();
            builder.AddJsonFile("appsettings.json");
            var configuration = builder.Build();
            var connString = configuration.GetConnectionString("CiberpapelScaffold");
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(connString);
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Compra>(entity =>
            {
                entity.HasKey(e => e.IdCompra)
                    .HasName("PK__compras__C4BAA6046B3A05A9");

                entity.ToTable("compras");

                entity.Property(e => e.IdCompra)
                    .ValueGeneratedNever()
                    .HasColumnName("id_compra");

                entity.Property(e => e.Cantidad).HasColumnName("cantidad");

                entity.Property(e => e.IdProducto).HasColumnName("id_producto");

                entity.Property(e => e.IdProveedor).HasColumnName("id_proveedor");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany(p => p.Compras)
                    .HasForeignKey(d => d.IdProducto)
                    .HasConstraintName("FK__compras__id_prod__5812160E");

                entity.HasOne(d => d.IdProveedorNavigation)
                    .WithMany(p => p.Compras)
                    .HasForeignKey(d => d.IdProveedor)
                    .HasConstraintName("FK__compras__id_prov__571DF1D5");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Compras)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK_Compras");
            });

            modelBuilder.Entity<Comprobante>(entity =>
            {
                entity.HasKey(e => e.IdComprobante)
                    .HasName("PK__comproba__55E5E2404D83BF53");

                entity.ToTable("comprobante");

                entity.Property(e => e.IdComprobante)
                    .ValueGeneratedNever()
                    .HasColumnName("id_comprobante");

                entity.Property(e => e.Fecha)
                    .HasColumnType("date")
                    .HasColumnName("fecha");

                entity.Property(e => e.IdCompra).HasColumnName("id_compra");

                entity.HasOne(d => d.IdCompraNavigation)
                    .WithMany(p => p.Comprobantes)
                    .HasForeignKey(d => d.IdCompra)
                    .HasConstraintName("FK__comproban__id_co__5AEE82B9");
            });

            modelBuilder.Entity<Factura>(entity =>
            {
                entity.HasKey(e => e.IdFactura)
                    .HasName("PK__factura__6C08ED53A626866F");

                entity.ToTable("factura");

                entity.Property(e => e.IdFactura)
                    .ValueGeneratedNever()
                    .HasColumnName("id_factura");

                entity.Property(e => e.Fecha)
                    .HasColumnType("date")
                    .HasColumnName("fecha");

                entity.Property(e => e.IdVenta).HasColumnName("id_venta");
            });

            modelBuilder.Entity<Panel>(entity =>
            {
                entity.ToTable("panel");

                entity.HasIndex(e => e.Url, "AK_Url")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Icon)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("icon");

                entity.Property(e => e.TextDescription)
                    .IsUnicode(false)
                    .HasColumnName("textDescription");

                entity.Property(e => e.Url)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("url");
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasKey(e => e.IdProducto)
                    .HasName("PK__producto__FF341C0DA04BBDFE");

                entity.ToTable("producto");

                entity.Property(e => e.IdProducto)
                    .ValueGeneratedNever()
                    .HasColumnName("id_producto");

                entity.Property(e => e.Descripcion)
                    .HasColumnType("text")
                    .HasColumnName("descripcion");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.Property(e => e.Precio)
                    .HasColumnType("decimal(10, 2)")
                    .HasColumnName("precio");
            });

            modelBuilder.Entity<Proveedore>(entity =>
            {
                entity.HasKey(e => e.IdProveedor)
                    .HasName("PK__proveedo__8D3DFE280440F137");

                entity.ToTable("proveedores");

                entity.Property(e => e.IdProveedor)
                    .ValueGeneratedNever()
                    .HasColumnName("id_proveedor");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.Property(e => e.Rut)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("rut");
            });

            modelBuilder.Entity<RolPermission>(entity =>
            {
                entity.HasKey(e => e.IdPermisson)
                    .HasName("PK__RolPermi__7FFF5D37541605B9");

                entity.Property(e => e.IdPermisson).HasColumnName("idPermisson");

                entity.Property(e => e.IdPanel).HasColumnName("idPanel");

                entity.Property(e => e.IdRol).HasColumnName("idRol");

                entity.HasOne(d => d.IdPanelNavigation)
                    .WithMany(p => p.RolPermissions)
                    .HasForeignKey(d => d.IdPanel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Panel");

                entity.HasOne(d => d.IdRolNavigation)
                    .WithMany(p => p.RolPermissions)
                    .HasForeignKey(d => d.IdRol)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Rol");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasKey(e => e.IdRole)
                    .HasName("PK__Roles__E5045C548294F70E");

                entity.Property(e => e.IdRole).HasColumnName("idRole");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SecuenciaVentum>(entity =>
            {
                entity.HasKey(e => e.SecuenciaId)
                    .HasName("PK__secuenci__5A4BBEEF094E4F7A");

                entity.ToTable("secuencia_venta");

                entity.Property(e => e.SecuenciaId).HasColumnName("secuencia_id");

                entity.Property(e => e.FechaVenta)
                    .HasColumnType("datetime")
                    .HasColumnName("fecha_venta")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdVentaState).HasColumnName("idVentaState");

                entity.HasOne(d => d.IdVentaStateNavigation)
                    .WithMany(p => p.SecuenciaVenta)
                    .HasForeignKey(d => d.IdVentaState)
                    .HasConstraintName("fk_venta_state");
            });

            modelBuilder.Entity<UserPermission>(entity =>
            {
                entity.HasKey(e => e.IsUserPermission)
                    .HasName("PK__userPerm__52B60D6B3F9868D0");

                entity.ToTable("userPermissions");

                entity.Property(e => e.IsUserPermission).HasColumnName("isUserPermission");

                entity.Property(e => e.IdPanel).HasColumnName("idPanel");

                entity.Property(e => e.IdUser).HasColumnName("idUser");

                entity.HasOne(d => d.IdPanelNavigation)
                    .WithMany(p => p.UserPermissions)
                    .HasForeignKey(d => d.IdPanel)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_Panel_permissions");

                entity.HasOne(d => d.IdUserNavigation)
                    .WithMany(p => p.UserPermissions)
                    .HasForeignKey(d => d.IdUser)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_User");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__usuario__4E3E04AD2A6D8163");

                entity.ToTable("usuario");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Correo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("correo");

                entity.Property(e => e.IdRole)
                    .HasColumnName("idRole")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.IsActive)
                    .IsRequired()
                    .HasColumnName("isActive")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.IsBlocked)
                    .IsRequired()
                    .HasColumnName("isBlocked")
                    .HasDefaultValueSql("('false')");

                entity.Property(e => e.Nombre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nombre");

                entity.Property(e => e.Password).HasMaxLength(255);

                entity.HasOne(d => d.IdRoleNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdRole)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Roles");
            });

            modelBuilder.Entity<Venta>(entity =>
            {
                entity.HasKey(e => e.IdVenta)
                    .HasName("PK__ventas__459533BF459FB0C3");

                entity.ToTable("ventas");

                entity.Property(e => e.IdVenta).HasColumnName("id_venta");

                entity.Property(e => e.Cantidad).HasColumnName("cantidad");

                entity.Property(e => e.IdProducto).HasColumnName("id_producto");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.SecuenciaVenta)
                    .HasColumnName("secuencia_venta")
                    .HasDefaultValueSql("((1))");

                entity.HasOne(d => d.IdProductoNavigation)
                    .WithMany(p => p.Venta)
                    .HasForeignKey(d => d.IdProducto)
                    .HasConstraintName("FK_productos");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Venta)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK_Ventas");

                entity.HasOne(d => d.SecuenciaVentaNavigation)
                    .WithMany(p => p.Venta)
                    .HasForeignKey(d => d.SecuenciaVenta)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("fk_secuencia_venta");
            });

            modelBuilder.Entity<VentasState>(entity =>
            {
                entity.HasKey(e => e.IdState);

                entity.ToTable("ventasState");

                entity.Property(e => e.IdState).HasColumnName("id_state");

                entity.Property(e => e.Estado)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("estado");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
