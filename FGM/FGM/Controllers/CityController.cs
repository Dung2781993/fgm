﻿using System.Configuration;
using System.Web.Mvc;

namespace FGM.Controllers
{
    public class CityController : Controller
    {
        // GET: City
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Geelong()
        {
            var googleMapKey = ConfigurationManager.AppSettings["googleApiKey"];
            TempData["GoogleApiKey"] = googleMapKey;
            return View();
        }
    }
}