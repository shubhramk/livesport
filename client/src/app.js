/**
 This is our main app configuration file. It kickstarts the whole process by
 requiring all the modules from `src` that we need. We must load these now to
 ensure the routes are loaded.

 As a matter of course, we also require the template module(s) that are generated
 during the build.

 **/
angular.module('myApp', [
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'templates-modules',
    'templates-common'
])
    .run(['$rootScope', function run($rootScope) {
        $rootScope.islogin = false;
    }])
    .controller('AppCtrl', ['$scope', function AppCtrl($scope) {

    }]);
