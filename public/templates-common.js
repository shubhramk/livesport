angular.module('templates-common', ['directives/header/header.tpl.html']);

angular.module("directives/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("directives/header/header.tpl.html",
    "<div class=\"container\">\n" +
    "    <header class=\"main-header\" ng-if=\"$root.islogin\">\n" +
    "        <div class=\"header-top\">\n" +
    "            <div class=\"col-lg-6 col-md-6 col-xs-6\">\n" +
    "                <div class=\"logo\">LiveSports <i class=\"fa fa-random\" aria-hidden=\"true\"></i></div>\n" +
    "            </div>\n" +
    "            <div class=\"col-lg-6 col-md-6 col-xs-6 text-right\">\n" +
    "\n" +
    "                <div id=\"morphsearch\" class=\"morphsearch\">\n" +
    "                    <form class=\"morphsearch-form\">\n" +
    "                        <input class=\"morphsearch-input\" type=\"search\" placeholder=\"Search...\"/>\n" +
    "                        <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n" +
    "                        <button class=\"morphsearch-submit\" type=\"submit\">Search</button>\n" +
    "                    </form>\n" +
    "                    <div class=\"morphsearch-content\">\n" +
    "                        <div class=\"dummy-column\">\n" +
    "                            <h2>People</h2>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://twitter.com/SaraSoueidan\">\n" +
    "                                <img class=\"round\" src=\"http://0.gravatar.com/avatar/81b58502541f9445253f30497e53c280?s=50&d=identicon&r=G\" alt=\"Sara Soueidan\"/>\n" +
    "                                <h3>Sara Soueidan</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://twitter.com/rachsmithtweets\">\n" +
    "                                <img class=\"round\" src=\"http://0.gravatar.com/avatar/48959f453dffdb6236f4b33eb8e9f4b7?s=50&d=identicon&r=G\" alt=\"Rachel Smith\"/>\n" +
    "                                <h3>Rachel Smith</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://www.twitter.com/peterfinlan\">\n" +
    "                                <img class=\"round\" src=\"http://0.gravatar.com/avatar/06458359cb9e370d7c15bf6329e5facb?s=50&d=identicon&r=G\" alt=\"Peter Finlan\"/>\n" +
    "                                <h3>Peter Finlan</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://www.twitter.com/pcridesagain\">\n" +
    "                                <img class=\"round\" src=\"http://1.gravatar.com/avatar/db7700c89ae12f7d98827642b30c879f?s=50&d=identicon&r=G\" alt=\"Patrick Cox\"/>\n" +
    "                                <h3>Patrick Cox</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"https://twitter.com/twholman\">\n" +
    "                                <img class=\"round\" src=\"http://0.gravatar.com/avatar/cb947f0ebdde8d0f973741b366a51ed6?s=50&d=identicon&r=G\" alt=\"Tim Holman\"/>\n" +
    "                                <h3>Tim Holman</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"https://twitter.com/shaund0na\">\n" +
    "                                <img class=\"round\" src=\"http://1.gravatar.com/avatar/9bc7250110c667cd35c0826059b81b75?s=50&d=identicon&r=G\" alt=\"Shaun Dona\"/>\n" +
    "                                <h3>Shaun Dona</h3>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"dummy-column\">\n" +
    "                            <h2>Popular</h2>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/08/05/page-preloading-effect/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"PagePreloadingEffect\"/>\n" +
    "                                <h3>Page Preloading Effect</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/05/28/arrow-navigation-styles/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"ArrowNavigationStyles\"/>\n" +
    "                                <h3>Arrow Navigation Styles</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/06/19/ideas-for-subtle-hover-effects/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"HoverEffectsIdeasNew\"/>\n" +
    "                                <h3>Ideas for Subtle Hover Effects</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/07/14/freebie-halcyon-days-one-page-website-template/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"FreebieHalcyonDays\"/>\n" +
    "                                <h3>Halcyon Days Template</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/05/22/inspiration-for-article-intro-effects/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"ArticleIntroEffects\"/>\n" +
    "                                <h3>Inspiration for Article Intro Effects</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/06/26/draggable-dual-view-slideshow/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"DraggableDualViewSlideshow\"/>\n" +
    "                                <h3>Draggable Dual-View Slideshow</h3>\n" +
    "                            </a>\n" +
    "                        </div>\n" +
    "                        <div class=\"dummy-column\">\n" +
    "                            <h2>Recent</h2>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/10/07/tooltip-styles-inspiration/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"TooltipStylesInspiration\"/>\n" +
    "                                <h3>Tooltip Styles Inspiration</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/09/23/animated-background-headers/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"AnimatedHeaderBackgrounds\"/>\n" +
    "                                <h3>Animated Background Headers</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/09/16/off-canvas-menu-effects/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"OffCanvas\"/>\n" +
    "                                <h3>Off-Canvas Menu Effects</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/09/02/tab-styles-inspiration/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"TabStyles\"/>\n" +
    "                                <h3>Tab Styles Inspiration</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"ResponsiveSVGs\"/>\n" +
    "                                <h3>Make SVGs Responsive with CSS</h3>\n" +
    "                            </a>\n" +
    "                            <a class=\"dummy-media-object\" href=\"http://tympanus.net/codrops/2014/07/23/notification-styles-inspiration/\">\n" +
    "                                <img src=\"assets/images/vp-g01.jpg\" alt=\"NotificationStyles\"/>\n" +
    "                                <h3>Notification Styles Inspiration</h3>\n" +
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
    "            <nav class=\"navbar navbar-default\">\n" +
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
