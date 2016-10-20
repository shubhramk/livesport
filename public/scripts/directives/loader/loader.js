angular.module("myApp").directive('loader', function () {
    return {
        restrict: 'A', //This means that it will be used as an attribute and NOT as an element.
        replace: true,
        templateUrl: "/scripts/directives/loader/loader.html",
        controller:function($scope ,$rootScope , broadcastConfig){
            $scope.isCollapsed = true;
            //listening loader event
            $rootScope.$on(broadcastConfig.SHOW_LOADER, function(event, args) {
                $scope.isCollapsed = false;
            });
            //listening hide loader event
            $rootScope.$on(broadcastConfig.HIDE_LOADER, function(event, args) {
                $scope.isCollapsed = true;
            });

        }

    };
});