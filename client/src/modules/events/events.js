/**
 * Events module - Events screen
 */
angular.module('myApp')
    .controller('eventCtrl', ['$scope', '$timeout' ,'$http','$state', function eventCtrl($scope , $timeout,$http,$state) {
        //get Events List
        $scope.isVisible = true;
        $http.get('/api/getEvents').
        success(function(data) {
            $scope.eventsArr = data;
            $scope.isVisible = false;
            $timeout(function() {
                new GridScrollFx(document.getElementById('grid'), {
                    viewportFactor: 0.4
                });
            },100);
        });

        $scope.showVideo =  function(ID){
            $state.go('events.video',{id:ID});
        };


    }]);