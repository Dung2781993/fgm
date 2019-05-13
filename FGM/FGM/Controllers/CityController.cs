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
        private static IList<RestaurantModel> BallaratRestaurantList;
        private static IList<RestaurantModel> BendigoRestaurantList;
        private static IList<RestaurantModel> WarrnamboolRestaurantList;
        private static IList<RestaurantModel> LatrobeRestaurantList;

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

        public ActionResult Latrobe()
        {
            var latrobeRestaurant = LatrobeRunAsync().GetAwaiter().GetResult();
            if (latrobeRestaurant == null)
            {
                TempData["WarningMessage"] = "Oh No, Something went wrong!";
                TempData["Error"] = "Error: Couldn't authenticate you";
            }
            LatrobeRestaurantList = latrobeRestaurant;

            var googleMapKey = ConfigurationManager.AppSettings["googleApiKey"];
            TempData["GoogleApiKey"] = googleMapKey;
            return View();
        }
        public ActionResult Warrnambool()
        {
            var WarrnamboolRestaurant = WarrnamboolRunAsync().GetAwaiter().GetResult();
            if (WarrnamboolRestaurant == null)
            {
                TempData["WarningMessage"] = "Oh No, Something went wrong!";
                TempData["Error"] = "Error: Couldn't authenticate you";
            }
            WarrnamboolRestaurantList = WarrnamboolRestaurant;

            var googleMapKey = ConfigurationManager.AppSettings["googleApiKey"];
            TempData["GoogleApiKey"] = googleMapKey;
            return View();
        }

            public ActionResult Ballarat()
        {
            var ballaratRestaurant = BallaratRunAsync().GetAwaiter().GetResult();
            if (ballaratRestaurant == null)
            {
                TempData["WarningMessage"] = "Oh No, Something went wrong!";
                TempData["Error"] = "Error: Couldn't authenticate you";
            }
            BallaratRestaurantList = ballaratRestaurant;
            var googleMapKey = ConfigurationManager.AppSettings["googleApiKey"];
            TempData["GoogleApiKey"] = googleMapKey;
            return View();
        }

        public ActionResult Bendigo()
        {
            var bendigoRestaurant = BendigoRunAsync().GetAwaiter().GetResult();
            if (bendigoRestaurant == null)
            {
                TempData["WarningMessage"] = "Oh No, Something went wrong!";
                TempData["Error"] = "Error: Couldn't authenticate you";
            }
            BendigoRestaurantList = bendigoRestaurant;

            var googleMapKey = ConfigurationManager.AppSettings["googleApiKey"];
            TempData["GoogleApiKey"] = googleMapKey;
            return View();
        } 

        public ActionResult Comparison()
        {
            return View();
        }

        //Get Data from Geelong Zomato
        public static async Task<IList<RestaurantModel>> GeelongRunAsync()
        {
            var restaurantArray = await GetGeelongRestaurant().ConfigureAwait(false);
            return restaurantArray;
        }


        public static IEnumerable<RestaurantModel> GetGeelongRestaurantModels()
        {
            return GeelongRestaurantList;
        }

        //Get Data from Latrobe Zomato
        public static async Task<IList<RestaurantModel>> LatrobeRunAsync()
        {
            var restaurantArray = await GetLatrobeRestaurant().ConfigureAwait(false);
            return restaurantArray;
        }


        public static IEnumerable<RestaurantModel> GetLatrobeRestaurantModels()
        {
            return LatrobeRestaurantList;
        }

        //Get Data from Warrnambool Zomato
        public static async Task<IList<RestaurantModel>> WarrnamboolRunAsync()
        {
            var restaurantArray = await GetWarrnamboolRestaurant().ConfigureAwait(false);
            return restaurantArray;
        }


        public static IEnumerable<RestaurantModel> GetWarrnamboolRestaurantModels()
        {
            return WarrnamboolRestaurantList;
        }

        //Get Data from Ballarat Zomato 
        public static async Task<IList<RestaurantModel>> BallaratRunAsync()
        {
            var restaurantArray = await GetBallaratRestaurant().ConfigureAwait(false);
            return restaurantArray;
        }


        public static IEnumerable<RestaurantModel> GetBallaratRestaurantModels()
        {
            return BallaratRestaurantList;
        }

        //Get Data from Bendigo Zomato 
        public static async Task<IList<RestaurantModel>> BendigoRunAsync()
        {
            var restaurantArray = await GetBendigoRestaurant().ConfigureAwait(false);
            return restaurantArray;
        }


        public static IEnumerable<RestaurantModel> GetBendigoRestaurantModels()
        {
            return BendigoRestaurantList;
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


        public ActionResult LatrobeRestaurantList_Read([DataSourceRequest] DataSourceRequest request)
        {
            var resturantListResult = GetLatrobeRestaurantModels();
            if (resturantListResult == null) return null;
            return Json(resturantListResult.ToDataSourceResult(request));
        }

        public ActionResult BallaratRestaurantList_Read([DataSourceRequest] DataSourceRequest request)
        {
            var resturantListResult = GetBallaratRestaurantModels();
            if (resturantListResult == null) return null;
            return Json(resturantListResult.ToDataSourceResult(request));
        }

        public ActionResult WarrnamboolRestaurantList_Read([DataSourceRequest] DataSourceRequest request)
        {
            var resturantListResult = GetWarrnamboolRestaurantModels();
            if (resturantListResult == null) return null;
            return Json(resturantListResult.ToDataSourceResult(request));
        }

        public ActionResult BendigoRestaurantList_Read([DataSourceRequest] DataSourceRequest request)
        {
            var resturantListResult = GetBendigoRestaurantModels();
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


        public ActionResult LatrobeRestaurantDetailed_Read(int id, [DataSourceRequest] DataSourceRequest request)
        {
            var restaurantListResult = GetLatrobeRestaurantModels();
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


        public ActionResult WarrnamboolRestaurantDetailed_Read(int id, [DataSourceRequest] DataSourceRequest request)
        {
            var restaurantListResult = GetWarrnamboolRestaurantModels();
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

        public ActionResult BallaratRestaurantDetailed_Read(int id, [DataSourceRequest] DataSourceRequest request)
        {
            var restaurantListResult = GetBallaratRestaurantModels();
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


        public ActionResult BendigoRestaurantDetailed_Read(int id, [DataSourceRequest] DataSourceRequest request)
        {
            var restaurantListResult = GetBendigoRestaurantModels();
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

        public static async Task<IList<RestaurantModel>> GetLatrobeRestaurant()
        {
            var client = new HttpClient();
            var query = "https://developers.zomato.com/api/v2.1/location_details?entity_id=99874&entity_type=subzone";
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


        public static async Task<IList<RestaurantModel>> GetWarrnamboolRestaurant()
        {
            var client = new HttpClient();
            var query = "https://developers.zomato.com/api/v2.1/location_details?entity_id=1681&entity_type=city";
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

        /// <summary>
        /// Action method to return restaurant info from Get Request
        /// </summary>
        /// <returns></returns>
        public static async Task<IList<RestaurantModel>> GetBallaratRestaurant()
        {
            var client = new HttpClient();
            var query = "https://developers.zomato.com/api/v2.1/location_details?entity_id=1631&entity_type=city";
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


        /// <summary>
        /// Action method to return restaurant info from Get Request
        /// </summary>
        /// <returns></returns>
        public static async Task<IList<RestaurantModel>> GetBendigoRestaurant()
        {
            var client = new HttpClient();
            var query = "https://developers.zomato.com/api/v2.1/location_details?entity_id=1580&entity_type=city";
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