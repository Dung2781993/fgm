using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FGM.Models
{
    public class RestaurantModel
    {
        public string id { get; set; }
        public string restaurantName { get; set; }
        public string restaurantAddress { get;set; }
        public string restaurantCuisines { get; set; }
        public string restaurantRating { get; set; }
        public string restaurantPhotoUrl { get; set; }
        public string restaurantImage { get; set; }
    }
}