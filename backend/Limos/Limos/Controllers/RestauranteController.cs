using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Limos.Controllers.Models;
using Limos.Data;
using Limos.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NetTopologySuite.Geometries;

namespace Limos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RestauranteController : ControllerBase
    {
        private readonly ILogger<RestauranteController> _logger;
        private readonly SqlContext _context;

        public RestauranteController(ILogger<RestauranteController> logger, SqlContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var restaurantes = _context.Set<Restaurante>().Select(y => new RestauranteModel
            {
                Id = y.Id,
                Nome = y.Nome,
                LinkImagem = y.LinkImagem,
                Coords = new Coords
                {
                    Lat = y.Local.X,
                    Lng = y.Local.Y
                }
            }).ToList();

            if(restaurantes.Any())
            {
                return Ok(restaurantes);
            }
                
            return NotFound();
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Detail(Guid id)
        {
            var restaurante = _context.Set<Restaurante>().Select(y => new RestauranteModel
            {
                Id = y.Id,
                Nome = y.Nome,
                LinkImagem = y.LinkImagem,
                Coords = new Coords
                {
                    Lat = y.Local.X,
                    Lng = y.Local.Y
                }
            }).FirstOrDefault(x => x.Id == id);

            if (restaurante != null)
            {
                return Ok(restaurante);
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult Post([FromBody] RestauranteModel model)
        {
            var restaurante = new Restaurante()
            {
                LinkImagem = model.LinkImagem,
                Nome = model.Nome,
                Local = new Point(model.Coords.Lat, model.Coords.Lng) { SRID = 4326 }
            };
            
            _context.Set<Restaurante>().Add(restaurante);
            _context.SaveChanges();

            return Ok();
        }

        [HttpPut]
        [Route("{id}")]
        public IActionResult Put([FromRoute] Guid id, [FromBody] RestauranteModel model)
        {
            var restaurante = _context.Set<Restaurante>().FirstOrDefault(x => x.Id == id);
            if (restaurante == null)
            {
                return NotFound();
            }
            restaurante.Nome = model.Nome;
            restaurante.LinkImagem = model.LinkImagem;
            restaurante.Local = new Point(model.Coords.Lat, model.Coords.Lng) { SRID = 4326 };

            _context.Entry(restaurante).State = EntityState.Modified;
            _context.SaveChanges();

            return Ok();
        }
    }
}
