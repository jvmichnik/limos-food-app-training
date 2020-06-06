using Limos.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Limos.Data
{
    public class RestauranteMapping : IEntityTypeConfiguration<Restaurante>
    {
        public void Configure(EntityTypeBuilder<Restaurante> entity)
        {
            entity.ToTable("tb_restaurante", "public");

            entity.HasKey(e => e.Id)
                    .HasName("pk_tb_restaurante");

            entity.Property(e => e.Id)
                .HasColumnName("id_restaurante")
                .ValueGeneratedNever();

            entity.Property(e => e.Nome)
                .HasColumnName("nome");

            entity.Property(e => e.LinkImagem)
                .HasColumnName("link_imagem");

            entity.Property(e => e.Local)
                .HasColumnName("local");
        }
    }
}
