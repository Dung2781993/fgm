using System.Web;
using System.Web.Optimization;

namespace FGM
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/common").Include(
                    "~/js/jquery.scrollTo.js",
                    "~/js/jquery.nav.js",
                    "~/js/jquery.localScroll.js",
                    "~/js/bootstrap.js",
                    "~/js/jquery.prettyPhoto.js",
                    "~/js/isotope.js",
                    "~/js/jquery.flexslider.js",
                    "~/js/custom.js"
                ));
        }
    }
}
