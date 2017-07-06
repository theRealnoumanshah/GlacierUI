using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AWS.API.Services;
using AWS.API.Interfaces;
using AWS.API.Models;

namespace AWS.API.Controllers
{
    public class GlacierController : Controller
    {
        private readonly IGlacierService _glacierService;
        public GlacierController(IGlacierService glacierService)
        {
            _glacierService = glacierService;
        }

        [HttpGet]
        public GlacierVaultResult Get()
        {
            return _glacierService.GetVaults();
        }

        //[HttpGet]
        //public IActionResult Get()
        //{
        //    return Ok(new { Id = "12", Name = "Barmy"});
        //}

    }
}
