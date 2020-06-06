using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Limos.Data
{
    public class SqlContext : DbContext
    {
        public SqlContext(DbContextOptions<SqlContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new RestauranteMapping());
        }
    }
}

//CREATE TABLE public.tb_restaurante(
//    id_restaurante uuid NOT null,
//    nome varchar(200) NOT NULL,
//    link_imagem varchar(2000) null,
//	  local geometry(POINT,4326)  NOT NULL,
//    CONSTRAINT pk_tb_restaurante PRIMARY KEY(id_restaurante)
//);