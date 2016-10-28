/**
 * Channels module - Channels screen
 */
angular.module('myApp')
    .controller('channelsCtrl', ['$scope','$timeout','$http','$state',  function channelsCtrl($scope,$timeout,$http,$state) {

        //get Channels List
        $http.get('/api/getChannels').
        success(function(data) {
            $scope.channelsArr = data;
            $timeout(function() {
                new GridScrollFx(document.getElementById('grid'), {
                    viewportFactor: 0.4
                });
            },100);
        });

        $scope.showVideo =  function(ID){
            $state.go('channels.video',{id:ID});
        };

    }]);