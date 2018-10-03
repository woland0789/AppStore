using System.Web;
using System.Web.Optimization;

namespace AppStore
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/scripts").Include(
					"~/Scripts/jquery-{version}.js",
					"~/Scripts/angular.min.js",
					"~/Scripts/angular-route.min.js",
					"~/Scripts/bootstrap.min.js",

					"~/Scripts/app.js",
					"~/Scripts/Service/tokenHelperService.js",
					"~/Scripts/Service/catalogService.js",
					"~/Scripts/Service/basketService.js",
					"~/Scripts/Service/accountService.js",
					"~/Scripts/controller/mainController.js",
					"~/Scripts/controller/homeController.js",
					"~/Scripts/controller/catalogController.js",
					"~/Scripts/controller/basketController.js",
					"~/Scripts/controller/loginController.js",
					"~/Scripts/controller/registrationController.js",
					"~/Scripts/controller/goodsCardController.js"
					));
			
            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
