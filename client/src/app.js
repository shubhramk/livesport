/**
 This is our main app configuration file. It kickstarts the whole process by
 requiring all the modules from `src` that we need. We must load these now to
 ensure the routes are loaded.

 As a matter of course, we also require the template module(s) that are generated
 during the build.

 **/
angular.module('myApp', [
    'vjs.video',
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'slickCarousel',
    'templates-modules',
    'templates-common'
])
    .run(['$rootScope','$anchorScroll', '$state', '$location', function run($rootScope,$anchorScroll,$state, $location) {
        $anchorScroll.yOffset = 0;
        if(localStorage.getItem("islogin") === "true"){
            $rootScope.islogin = true;
        }
        else{
            $rootScope.islogin = false;
        }

        $rootScope.logout =  function() {
            localStorage.setItem("islogin", false);
            $rootScope.islogin = false;
            $state.go('login');
           // $location.href = '/login';
        };

    }])
    .controller('AppCtrl', ['$scope', function AppCtrl($scope) {

    }]);
