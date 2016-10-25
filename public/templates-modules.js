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
    "\n" +
    "<!--<div class=\"vid-container\">-->\n" +
    "<!--<vjs-video-container vjs-ratio=\"4:3\"  vjs-setup='{\"fluid\": true}'>-->\n" +
    "    <!--<video class=\"video-js vjs-sublime-skin\" width=\"100%\" height=\"100%\" controls preload=\"auto\" poster=\"http://vjs.zencdn.net/v/oceans.png\">-->\n" +
    "        <!--<source src=\"http://vjs.zencdn.net/v/oceans.mp4\" type='video/mp4' />-->\n" +
    "        <!--<source src=\"http://vjs.zencdn.net/v/oceans.webm\" type='video/webm' />-->\n" +
    "        <!--<source src=\"http://vjs.zencdn.net/v/oceans.ogv\" type='video/ogg' />-->\n" +
    "        <!--<p class=\"vjs-no-js\">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>-->\n" +
    "        <!--</p>-->\n" +
    "    <!--</video>-->\n" +
    "<!--</div>-->\n" +
    "<div class=\"vid-container\">\n" +
    "    <video  class=\"video-js vjs-sublime-skin\" controls preload=\"auto\" width=\"1280\" height=\"600\"\n" +
    "            poster=\"assets/video/demo-poster.png\"\n" +
    "            vjs-video vjs-setup=\"options\" vjs-media=\"mediaObj\">\n" +
    "\n" +
    "    </video>\n" +
    "</div>\n" +
    "\n" +
    "<!--<video-->\n" +
    "        <!--id=\"main-video\"-->\n" +
    "        <!--class=\"video-js vjs-sublime-skin\"-->\n" +
    "        <!--width=\"1280\"-->\n" +
    "        <!--height=\"720\"-->\n" +
    "        <!--vjs-media=\"media\"-->\n" +
    "        <!--vjs-vid >-->\n" +
    "\n" +
    "<!--</video>-->\n" +
    "<!--<button ng-click=\"playVid('1')\">PLAY 1</button>\n" +
    "<button ng-click=\"playVid('0')\">PLAY 2</button>-->\n" +
    "<div class=\"video-section\">\n" +
    "    <div class=\"carousel-section\">\n" +
    "        <slick class=\"slider\" settings=\"slickConfig2\" ng-if=\"slickConfig2Loaded\">\n" +
    "            <div ng-repeat=\"i in vidArr  track by $index ;\" ng-click=\"playVid($index)\">\n" +
    "                <img src=\"{{i.poster}}\"  class=\"carousel-image\"/>\n" +
    "            </div>\n" +
    "        </slick>\n" +
    "    </div>\n" +
    "</div>\n" +
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
