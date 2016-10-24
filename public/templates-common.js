angular.module('templates-common', ['directives/header/header.tpl.html']);

angular.module("directives/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/header/header.tpl.html",
    "<div class=\"header-section\"  ng-if=\"$root.islogin\">\n" +
    "    <div class=\"tabs-container\">\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li role=\"presentation\"  ng-class=\"{active : activeMenu === 'channels'}\" ng-click=\"tabclick('channels')\"><a>Channels</a></li>\n" +
    "        <li role=\"presentation\" ng-class=\"{active : activeMenu === 'favorites'}\" ng-click=\"tabclick('favorites')\"><a >Favorites</a></li>\n" +
    "        <li role=\"presentation\" ng-class=\"{active : activeMenu === 'events'}\" ng-click=\"tabclick('events')\"><a>Events</a></li>\n" +
    "    </ul>\n" +
    "    </div>\n" +
    "</div>");
}]);
