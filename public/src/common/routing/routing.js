/**
 * Routing Configuration of Application
 */
angular.module( 'myApp')
    .config(function config ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

        // Lazy load configuration
        $ocLazyLoadProvider.config({
            events: true,
            debug: true,
            modules: [
                {
                    name: 'mainAssets',
                    files: [
                        'assets/css/less/main.css'

                    ]
                },
                {
                    name: 'loginModule',
                    files: [
                        'src/modules/login/login.js'
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
                        return $ocLazyLoad.load(['mainAssets','loginModule']);
                    }]
                },
                data: {
                  pageTitle: 'Login'
                }
            });
      //default page
      $urlRouterProvider.otherwise('/login');
    });

