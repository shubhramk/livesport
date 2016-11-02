angular.module('templates-common', ['directives/header/header.tpl.html']);

angular.module("directives/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/header/header.tpl.html",
    "<div class=\"container\">\n" +
    "    <header class=\"main-header\" ng-if=\"$root.islogin\">\n" +
    "        <div class=\"header-top\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-xs-6\">\n" +
    "                <div class=\"logo\"><img src=\"assets/images/logo.png\" /></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-xs-6 text-right\">\n" +
    "\n" +
    "                <div id=\"morphsearch\" class=\"morphsearch\">\n" +
    "                    <form class=\"morphsearch-form\">\n" +
    "                        <input class=\"morphsearch-input\" type=\"search\" placeholder=\"Search\" ng-model=\"searchText.heading\"/>\n" +
    "                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
    "                        <button class=\"morphsearch-submit\" type=\"submit\">Search</button>\n" +
    "                    </form>\n" +
    "                    <div class=\"morphsearch-content\">\n" +
    "                        <div class=\"dummy-column\">\n" +
    "                            <h2>Relevance {{searchArr.relevance.length}}</h2>\n" +
    "                            <a ng-repeat=\"obj in searchArr.relevance | filter:searchText track by $index\"\n" +
    "                                    class=\"dummy-media-object\"\n" +
    "                                    href=\"javascript:void(0);\"\n" +
    "                               ng-click=\"showVideo(obj.channelID,obj.mediaID)\"\n" +
    "                                    >\n" +
    "                                <img class=\"round\" src=\"{{obj.poster}}\" alt=\"{{obj.heading}}\"/>\n" +
    "                                <h3>{{obj.heading}}</h3>\n" +
    "                               \n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"dummy-column\">\n" +
    "                            <h2>Popular</h2>\n" +
    "                            <a ng-repeat=\"obj in searchArr.popular | filter:searchText track by $index\"\n" +
    "                               class=\"dummy-media-object\"\n" +
    "                               href=\"javascript:void(0);\"\n" +
    "                               ng-click=\"showVideo(obj.channelID,obj.mediaID)\">\n" +
    "                                <img class=\"round\" src=\"{{obj.poster}}\" alt=\"{{obj.heading}}\"/>\n" +
    "                                <h3>{{obj.heading}}</h3>\n" +
    "                            </a>\n" +
    "\n" +
    "                        </div>\n" +
    "                        <div class=\"dummy-column\">\n" +
    "                            <h2>Recent</h2>\n" +
    "                            <a ng-repeat=\"obj in searchArr.recent | filter:searchText track by $index\"\n" +
    "                               class=\"dummy-media-object\"\n" +
    "                               href=\"javascript:void(0);\"\n" +
    "                               ng-click=\"showVideo(obj.channelID,obj.mediaID)\">\n" +
    "                                <img class=\"round\" src=\"{{obj.poster}}\" alt=\"{{obj.heading}}\"/>\n" +
    "                                <h3>{{obj.heading}}</h3>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                    </div><!-- /morphsearch-content -->\n" +
    "                    <span class=\"morphsearch-close\"></span>\n" +
    "                </div><!-- /morphsearch -->\n" +
    "\n" +
    "                <div class=\"logout\"><i ng-click=\"logout()\" class=\"fa fa-sign-out\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <div>\n" +
    "                <!--<div class=\"search-block text-right\">\n" +
    "                    <input type=\"text\" placeholder=\"Search\" />\n" +
    "                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
    "                </div>-->\n" +
    "\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "        <div class=\"header-bottom\">\n" +
    "            <nav class=\"navbar navbar-default\" data-spy=\"affix\" data-offset-top=\"197\">\n" +
    "                <div class=\"\">\n" +
    "                    <!-- Brand and toggle get grouped for better mobile display -->\n" +
    "                    <div class=\"navbar-header\">\n" +
    "                        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n" +
    "                            <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                            <span class=\"icon-bar\"></span>\n" +
    "                            <span class=\"icon-bar\"></span>\n" +
    "                            <span class=\"icon-bar\"></span>\n" +
    "                        </button>\n" +
    "                        <!-- <a class=\"navbar-brand\" href=\"#\">Live Sports</a>-->\n" +
    "                    </div>\n" +
    "                    <!-- Collect the nav links, forms, and other content for toggling -->\n" +
    "                    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n" +
    "                        <ul class=\"nav navbar-nav\" ng-init=\"activeMenu= 'home'\">\n" +
    "                            <li role=\"presentation\"><a ui-sref-active=\"active\" ui-sref=\"home\">Home</a></li>\n" +
    "                            <li role=\"presentation\"><a ui-sref-active=\"active\" ui-sref=\"channels\">Channels</a></li>\n" +
    "                            <li role=\"presentation\"><a ui-sref-active=\"active\" ui-sref=\"favorites\">Favorites</a></li>\n" +
    "                            <li role=\"presentation\"><a ui-sref-active=\"active\" ui-sref=\"events\">Events</a></li>\n" +
    "                           <!-- <li><a class=\"active\" href=\"#\">Dashboard</a></li>\n" +
    "                            <li><a href=\"#\">Channel</a></li>\n" +
    "                            <li><a href=\"#\">Wishlist</a></li>-->\n" +
    "                        </ul>\n" +
    "                    </div><!-- /.navbar-collapse -->\n" +
    "                </div><!-- /.container-fluid -->\n" +
    "            </nav>\n" +
    "        </div>\n" +
    "    </header>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
