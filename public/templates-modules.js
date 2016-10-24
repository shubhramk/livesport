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
