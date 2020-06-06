using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Limos.Entities
{
    public class Restaurante
    {
        public Restaurante()
        {
            Id = Guid.NewGuid();
        }
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string LinkImagem { get; set; }
        public Point Local { get; set; }
    }
}
