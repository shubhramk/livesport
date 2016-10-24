angular.module('templates-modules', ['channels/channels.tpl.html', 'events/events.tpl.html', 'favorites/favorites.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html']);

angular.module("channels/channels.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("channels/channels.tpl.html",
    "<h1>Channels</h1>");
}]);

angular.module("events/events.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("events/events.tpl.html",
    "<h1>Events</h1>");
}]);

angular.module("favorites/favorites.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("favorites/favorites.tpl.html",
    "<h1>Favorites</h1>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"main-container\">\n" +
    "    <header class=\"main-header\">\n" +
    "        <div class=\"header-top\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-xs-6\">\n" +
    "                <div class=\"logo\">LiveSports <i class=\"fa fa-random\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-xs-6\">\n" +
    "                <div class=\"search-block text-right\">\n" +
    "                    <input type=\"text\" placeholder=\"Search\" />\n" +
    "                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"header-bottom\">\n" +
    "        <nav class=\"navbar navbar-default\">\n" +
    "            <div class=\"\">\n" +
    "                <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "                <div class=\"navbar-header\">\n" +
    "                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "                        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                        <span class=\"icon-bar\"></span>\n" +
    "                    </button>\n" +
    "                   <!-- <a class=\"navbar-brand\" href=\"#\">Live Sports</a>-->\n" +
    "                </div>\n" +
    "\n" +
    "                <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "                    <ul class=\"nav navbar-nav\">\n" +
    "                        <li><a class=\"active\" href=\"#\">Dashboard</a></li>\n" +
    "                        <li><a href=\"#\">Channel</a></li>\n" +
    "                        <li><a href=\"#\">Wishlist</a></li>\n" +
    "                    </ul>\n" +
    "                </div><!-- /.navbar-collapse -->\n" +
    "            </div><!-- /.container-fluid -->\n" +
    "        </nav>\n" +
    "        </div>\n" +
    "    </header>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"vid-container\">\n" +
    "    <video class=\"bgvid\" autoplay=\"autoplay\" muted=\"muted\" preload=\"auto\" loop>\n" +
    "        <source src=\"assets/video/city.mp4\" type=\"video/webm\">\n" +
    "    </video>\n" +
    "    <div class=\"inner-container\">\n" +
    "        <video class=\"bgvid inner\" autoplay=\"autoplay\" muted=\"muted\" preload=\"auto\" loop>\n" +
    "            <source src=\"http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?random=1\" type=\"video/webm\">\n" +
    "        </video>\n" +
    "\n" +
    "    </div>\n" +
    "    <form  class=\"login-box\"  name=\"userForm\" ng-submit=\"doLogin()\" novalidate>\n" +
    "        <h1>Login</h1>\n" +
    "        <input type=\"text\" name=\"name\" ng-model=\"form.Name\" required placeholder=\"Username\">\n" +
    "        <input type=\"password\" name=\"email\"  ng-model=\"form.Password\" required placeholder=\"Password\">\n" +
    "        <button type=\"submit\" ng-disabled=\"userForm.$invalid\" >Login</button>\n" +
    "        <!--<p>Not a member? <span>Sign Up</span></p>-->\n" +
    "    </form>\n" +
    "</div>");
}]);
