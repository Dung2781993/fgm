using FGM.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.UI;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace FGM.Controllers
{
    public class CityController : Controller
    {
        private static IList<RestaurantModel> GeelongRestaurantList;

        // GET: City
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Geelong()
        {
            var geelongRestaurant = GeelongRunAsync().GetAwaiter().GetResult();
            if (geelongRestaurant == null)
            {
                TempData["WarningMessage"] = "Oh No, Something went wrong!";
                TempData["Error"] = "Error: Couldn't authenticate you";
            }
            GeelongRestaurantList = geelongRestaurant;

            var googleMapKey = ConfigurationManager.AppSettings["googleApiKey"];
            TempData["GoogleApiKey"] = googleMapKey;
            return View();
        }

        public ActionResult Ballarat()
        {
            var googleMapKey = ConfigurationManager.AppSettings["googleApiKey"];
            TempData["GoogleApiKey"] = googleMapKey;
            return View();
        }

        public ActionResult Bendigo()
        {
            var googleMapKey = ConfigurationManager.AppSettings["googleApiKey"];
            TempData["GoogleApiKey"] = googleMapKey;
            return View();
        } 

        public ActionResult Comparison()
        {
            return View();
        }

        //Get Data from Zomato
        public static async Task<IList<RestaurantModel>> GeelongRunAsync()
        {
            var restaurantArray = await GetGeelongRestaurant().ConfigureAwait(false);
            return restaurantArray;
        }

        public static IEnumerable<RestaurantModel> GetGeelongRestaurantModels()
        {
            return GeelongRestaurantList;
        }


        /// <summary>
        /// Action method to return restaurant list to view
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public ActionResult GeelongRestaurantList_Read([DataSourceRequest] DataSourceRequest request)
        {
            var resturantListResult = GetGeelongRestaurantModels();
            if (resturantListResult == null) return null;
            return Json(resturantListResult.ToDataSourceResult(request));
        }

        /// <summary>
        /// Action method to return ticket info
        /// </summary>
        /// <param name="id"></param>
        /// <param name="request"></param>
        /// <returns></returns>
        public ActionResult GeelongRestaurantDetailed_Read(int id, [DataSourceRequest] DataSourceRequest request)
        {
            var restaurantListResult = GetGeelongRestaurantModels();
            if (restaurantListResult == null) return null;
            var restaurantListInfo = new List<RestaurantModel>();
            foreach (RestaurantModel restaurant in restaurantListResult)
            {
                if (restaurant.id == id.ToString())
                {
                    var restaurantInfo = new RestaurantModel
                    {
                        id = restaurant.id,
                        restaurantName = restaurant.restaurantName,
                        restaurantAddress = restaurant.restaurantAddress,
                        restaurantCuisines = restaurant.restaurantCuisines,
                        restaurantRating = restaurant.restaurantRating,
                        restaurantPhotoUrl = restaurant.restaurantPhotoUrl,
                        restaurantImage = restaurant.restaurantImage
                    };
                    restaurantListInfo.Add(restaurantInfo);
                }
            }
            return Json(restaurantListInfo.ToDataSourceResult(request)); ;
        }



        /// <summary>
        /// Action method to return restaurant info from Get Request
        /// </summary>
        /// <returns></returns>
        public static async Task<IList<RestaurantModel>> GetGeelongRestaurant()
        {
            var client = new HttpClient();
            var query = "https://developers.zomato.com/api/v2.1/location_details?entity_id=1701&entity_type=city";
            client.DefaultRequestHeaders.Add("user-key", "9ea59ab383b77a11cd094ad0109b8f7a");

            //Get Json response from Get Request
            var response = await client.GetAsync(query).ConfigureAwait(false);
            if (!response.IsSuccessStatusCode) return null;

            //Filter Json response 
            var contentString = await response.Content.ReadAsStringAsync();
            JObject json = JObject.Parse(contentString);
            JArray jArray = (JArray)json["best_rated_restaurant"];
            var restaurantArray = new List<RestaurantModel>();
            try
            {
                foreach (JObject item in jArray)
                {
                    var restaurantObject = item.GetValue("restaurant");
                    var id = restaurantObject["id"];
                    var restaurantName = restaurantObject["name"];
                    var location = restaurantObject["location"];
                    var restaurantAddress = location["address"];
                    var restaurantCuisines = restaurantObject["cuisines"];
                    var rating = restaurantObject["user_rating"];
                    var restaurantRating = rating["aggregate_rating"];
                    var restaurantPhotoUrl = restaurantObject["photos_url"];
                    var restaurantImage = restaurantObject["featured_image"];

                    var restaurant = new RestaurantModel
                    {
                        id = id.ToString(),
                        restaurantName = restaurantName.ToString(),
                        restaurantAddress = restaurantAddress.ToString(),
                        restaurantCuisines = restaurantCuisines.ToString(),
                        restaurantRating = restaurantRating.ToString(),
                        restaurantPhotoUrl = restaurantPhotoUrl.ToString(),
                        restaurantImage = restaurantImage.ToString()
                    };

                    restaurantArray.Add(restaurant);
                }
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            client.Dispose();

            return restaurantArray;
        }
    }
}