using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Limos.Controllers.Models
{
    public class RestauranteModel
    {
        public Guid Id { get; set; }
        public string Nome { get; set; }
        public string LinkImagem { get; set; }
        public Coords Coords { get; set; }
    }

    public class Coords
    {
        public double Lat { get; set; }
        public double Lng { get; set; }
    }
}
