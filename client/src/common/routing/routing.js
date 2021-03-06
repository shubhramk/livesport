angular.module( 'myApp').config(['slickCarouselConfig', function (slickCarouselConfig) {
    slickCarouselConfig.dots = true;
    slickCarouselConfig.autoplay = false;
}])
    .config(function config ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider,$compileProvider,toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: true,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
            preventOpenDuplicates: true,
            target: 'body'
        });
        /**For href javascript:void(0)**/
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
        // Lazy load configuration
        $ocLazyLoadProvider.config({
            events: false,
            debug: false,
            modules: [
                {
                    name: 'mainAssets',
                    files: [
                        'assets/css/less/main.css'

                    ]
                },
                {
                    name: 'loginAssets',
                    files: [
                        'assets/css/modules/login/login.css',
                        'src/modules/login/login.js'
                    ]
                },
                {
                    name: 'homeAssets',
                    files: [
                        'src/modules/home/home.js',
                        'assets/css/modules/home/home.css'
                    ]
                },
                {
                    name: 'channelsAssets',
                    files: [
                        'src/modules/channels/channels.js',
                        'assets/css/modules/channels/channels.css'
                    ]
                },
                {
                    name: 'eventsAssets',
                    files: [
                        'src/modules/events/events.js',
                        'assets/css/modules/events/events.css'
                    ]
                },
                {
                    name: 'favoritesAssets',
                    files: [
                        'src/modules/favorites/favorites.js',
                        'assets/css/modules/favorites/favorites.css'
                    ]
                },
                {
                    name: 'viewvideoAssets',
                    files: [
                        'src/modules/view-video/view-video.js',
                        'assets/css/modules/view-video/view-video.css'
                    ]
                },
                {
                    name: 'goLiveAssets',
                    files: [
                        'src/modules/golive/golive.js',
                        'assets/css/modules/golive/golive.css'
                    ]
                }

            ]
        });

        // Routing
        $stateProvider
                .state('login', {
                    url: '/login',
                    views: {
                        "main": {
                            templateUrl: 'login/login.tpl.html',
                            controller: 'LoginCtrl'
                        }
                    },
                    resolve: {
                        loadMyService: ['$ocLazyLoad', function($ocLazyLoad) {
                            return $ocLazyLoad.load(['mainAssets','loginAssets']);
                        }]
                    },
                    data: {
                        pageTitle: 'Login'
                    }
                }).state('home', {
                url: '/home',
                views: {
                    "main": {
                        controller: 'HomeCtrl',
                        templateUrl: 'home/home.tpl.html'
                    }
                }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load(['mainAssets','homeAssets']);
                    }]
                },
                data: {
                    pageTitle: 'Home',
                    requireLogin: true
                }
            })
            .state('channels', {
                url: '/channels',
                views: {
                    "main": {
                        controller: 'channelsCtrl',
                        templateUrl: 'channels/channels.tpl.html'
                    }
                }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load(['mainAssets','channelsAssets']);
                    }]
                },
                data: {
                    pageTitle: 'Channels',
                    requireLogin: true
                }
            })
            .state('channels.video', {
                url: '/video/:id/',
                views: {
                    "main@": {
                        controller: 'viewvideoCtrl',
                        templateUrl: 'view-video/view-video.tpl.html'
                    }
                }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load(['mainAssets','viewvideoAssets']);
                    }]
                },
                data: {
                    pageTitle: 'Channels Video',
                    requireLogin: true
                }
            })
            .state('channels.search', {
                url: '/video/:id/:vID',
                views: {
                    "main@": {
                        controller: 'viewvideoCtrl',
                        templateUrl: 'view-video/view-video.tpl.html'
                    }
                }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load(['mainAssets','viewvideoAssets']);
                    }]
                },
                data: {
                    pageTitle: 'Channels Video',
                    requireLogin: true
                }
            })
            .state('favorites', {
                url: '/favorites',
                views: {
                    "main": {
                        controller: 'favCtrl',
                        templateUrl: 'favorites/favorites.tpl.html'
                    }
                }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load(['mainAssets','favoritesAssets']);
                    }]
                },
                data: {
                    pageTitle: 'Favorites',
                    requireLogin: true
                }
            }).state('favorites.video', {
            url: '/video/:id/:vID/',
            views: {
                "main@": {
                    controller: 'viewvideoCtrl',
                    templateUrl: 'view-video/view-video.tpl.html'
                }
            }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load(['mainAssets','viewvideoAssets']);
                }]
            },
            data: {
                pageTitle: 'Favorites Video',
                requireLogin: true
            }
        }).state('events', {
            url: '/events',
            views: {
                "main": {
                    controller: 'eventCtrl',
                    templateUrl: 'events/events.tpl.html'
                }
            }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load(['mainAssets','eventsAssets']);
                }]
            },
            data: {
                pageTitle: 'Home',
                requireLogin: true
            }
        }).state('events.video', {
            url: '/video/:id/',
            views: {
                "main@": {
                    controller: 'viewvideoCtrl',
                    templateUrl: 'view-video/view-video.tpl.html'
                }
            }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load(['mainAssets','viewvideoAssets']);
                }]
            },
            data: {
                pageTitle: 'Events',
                requireLogin: true
            }
        }).state('golive', {
            url: '/golive',
            views: {
                "main": {
                    controller: 'goLiveCtrl',
                    templateUrl: 'golive/golive.tpl.html'
                }
            }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load(['mainAssets','goLiveAssets']);
                }]
            },
            data: {
                pageTitle: 'Go Live',
                requireLogin: true
            }
        });
        //default page
        $urlRouterProvider.otherwise('/login');
    });