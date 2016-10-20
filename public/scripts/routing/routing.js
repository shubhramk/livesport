/**
 @ Routing configuration of application
 */
angular.module("myApp")
    .config(function config($stateProvider, $urlRouterProvider,$ocLazyLoadProvider) {
        //Lazy loading Assets  on demand
        $ocLazyLoadProvider.config({
            debug:false,
            modules: [{
                name: 'commonAssets',
                files: [
                    "stylesheets/main.css"
                ]
            },{
                name: 'loginAssets',
                files: [
                    "scripts/controllers/login.js"
                ]
            }]
        });
        //Routing section
        //login section
        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    "main": {
                        controller: 'LoginCtrl',
                        templateUrl: 'partials/login.html'
                    }
                }, resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load(['commonAssets','loginAssets']);
                    }]
                },
                data: {
                    pageTitle: 'Login',
                    requireLogin: true
                }
            });
            //default section
            $urlRouterProvider.otherwise('/login');
    });