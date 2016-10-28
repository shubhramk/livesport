angular.module('templates-modules', ['channels/channels.tpl.html', 'events/events.tpl.html', 'favorites/favorites.tpl.html', 'home/home.tpl.html', 'login/login.tpl.html', 'view-video/view-video.tpl.html']);

angular.module("channels/channels.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("channels/channels.tpl.html",
    "<div class=\"container\">\n" +
    "    <section class=\"grid-wrap\">\n" +
    "        <ul class=\"grid swipe-down\" id=\"grid\">\n" +
    "            <li ng-repeat=\"obj in channelsArr\">\n" +
    "                 <a ng-href=\"javascript:void(0)\" ng-click=\"showVideo(obj.channelID)\">\n" +
    "                     <img ng-src=\"{{obj.poster}}\" alt=\"{{obj.heading}}\">\n" +
    "                     <h3>{{obj.heading}}</h3>\n" +
    "                 </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </section>\n" +
    "</div>\n" +
    "");
}]);

angular.module("events/events.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("events/events.tpl.html",
    "<div class=\"container events\">\n" +
    "    <section class=\"grid-wrap\">\n" +
    "        <ul class=\"grid swipe-down\" id=\"grid\">\n" +
    "            <li ng-repeat=\"obj in eventsArr\" >\n" +
    "                <a ng-href=\"javascript:void(0)\"  ng-click=\"showVideo(obj.eventID)\">\n" +
    "                    <img ng-src=\"{{obj.poster}}\" alt=\"{{obj.heading}}\">\n" +
    "                    <h3>\n" +
    "                        {{obj.heading}}\n" +
    "                        <br>\n" +
    "                        <span class=\"category\">{{obj.genre}}</span>\n" +
    "                        <br>\n" +
    "                        <span class=\"date\">{{obj.date}}</span>\n" +
    "                    </h3>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </section>\n" +
    "</div>");
}]);

angular.module("favorites/favorites.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("favorites/favorites.tpl.html",
    "<div class=\"no-js\">\n" +
    "<ul class=\"grid-caption cs-style-3\">\n" +
    "    <li ng-repeat=\"favdata in vidArr\">\n" +
    "        <figure>\n" +
    "            <img src=\"{{favdata.poster}}\" alt=\"img04\">\n" +
    "            <figcaption>\n" +
    "                <h3>{{favdata.heading}}</h3>\n" +
    "                <span>{{favdata.content}}</span>\n" +
    "                <a ng-href=\"#\">Take a look</a>\n" +
    "            </figcaption>\n" +
    "        </figure>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "    </div>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"vid-container\" >\n" +
    "        <video\n" +
    "                id=\"video-player\"\n" +
    "                controls\n" +
    "                preload=\"auto\"\n" +
    "                class=\"video-js vjs-sublime-skin vjs-16-9\"\n" +
    "                width=\"1180\"\n" +
    "                height=\"600\"\n" +
    "                vjs-media=\"mediaObj\"\n" +
    "                vjs-vid >\n" +
    "\n" +
    "        </video>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"video-section\">\n" +
    "    <div class=\"carousel-section\">\n" +
    "        <slick class=\"slider\" settings=\"slickConfig2\" ng-if=\"slickConfig2Loaded\">\n" +
    "            <div ng-repeat=\"obj in topTenVideos  track by $index ;\" ng-click=\"playVideo($index , topTenVideos)\">\n" +
    "                <img src=\"{{obj.poster}}\"  class=\"carousel-image\" ng-class=\"{'highlight':($index==indexcounter)}\"/>\n" +
    "                <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i>\n" +
    "            </div>\n" +
    "        </slick>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"featured-videos\">\n" +
    "    <div class=\"video-heading\"><h2>FEATURED VIDEOS</h2></div>\n" +
    "    <div class=\"no-js\">\n" +
    "        <ul class=\"grid-caption cs-style-3\">\n" +
    "            <li class=\"video-container\" ng-repeat=\"obj in featuredVideos  track by $index\">\n" +
    "                <figure>\n" +
    "                    <div class=\"video-block\"><img src=\"{{obj.poster}}\"  class=\"carousel-image\"/> <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i></div>\n" +
    "                    <figcaption>\n" +
    "                        <h3>{{obj.heading}}</h3>\n" +
    "                        <span>{{obj.content}}</span>\n" +
    "                        <a ng-click=\"playVideo($index,featuredVideos)\">Take a look</a>\n" +
    "                    </figcaption>\n" +
    "                </figure>\n" +
    "                <div class=\"video-detail-block\">\n" +
    "                    <div class=\"name\">Darkness world, MP4</div>\n" +
    "                    <div class=\"fav\"><i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i></div>\n" +
    "                </div>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"clear\"></div>\n" +
    "</div>\n" +
    "<div class=\"clear\"></div>\n" +
    "<div class=\"top-videos\">\n" +
    "    <div class=\"video-heading\"><h2>TOP VIDEOS</h2></div>\n" +
    "    <div class=\"no-js\">\n" +
    "        <ul class=\"grid-caption cs-style-3\">\n" +
    "            <li class=\"video-container\" ng-repeat=\"obj in topVideos track by $index\">\n" +
    "                <figure>\n" +
    "                    <div class=\"video-block\"><img src=\"{{obj.poster}}\"  class=\"carousel-image\"/> <i class=\"fa fa-play-circle-o\" aria-hidden=\"true\"></i></div>\n" +
    "                    <figcaption>\n" +
    "                        <h3>{{obj.heading}}</h3>\n" +
    "                        <span>{{obj.content}}</span>\n" +
    "                        <a ng-click=\"playVideo($index,topVideos)\">Take a look</a>\n" +
    "                    </figcaption>\n" +
    "                </figure>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"clear\"></div>\n" +
    "</div>\n" +
    "<div class=\"clear\"></div>\n" +
    "</div>");
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

angular.module("view-video/view-video.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("view-video/view-video.tpl.html",
    "<div class=\"container events\">\n" +
    "    <div class=\"vid-container\" >\n" +
    "        <video\n" +
    "                id=\"video-player\"\n" +
    "                controls\n" +
    "                preload=\"auto\"\n" +
    "                class=\"video-js vjs-sublime-skin\"\n" +
    "                width=\"1180\"\n" +
    "                height=\"600\"\n" +
    "                vjs-media=\"mediaObj\"\n" +
    "                vjs-vid >\n" +
    "\n" +
    "        </video>\n" +
    "    </div>\n" +
    "   <section > {{videoHeading}}</section>\n" +
    "    <section class=\"grid-wrap\" ng-show=\"isChannel\">\n" +
    "        <ul class=\"grid swipe-down\" id=\"grid\">\n" +
    "            <li ng-repeat=\"obj in videoList track by $index\" >\n" +
    "                <a ng-href=\"javascript:void(0)\" ng-click=\"playVideo($index , videoList)\">\n" +
    "                    <img ng-src=\"{{obj.poster}}\" alt=\"{{obj.heading}}\">\n" +
    "                    <h3>\n" +
    "                        {{obj.heading}}\n" +
    "                        <br>\n" +
    "                        <span class=\"category\">{{obj.genre}}</span>\n" +
    "                        <br>\n" +
    "                        <span class=\"date\">{{obj.date}}</span>\n" +
    "                    </h3>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "    </section>\n" +
    "\n" +
    "</div>");
}]);
