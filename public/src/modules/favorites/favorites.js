/**
 * Favorites module - Favorites screen
 */
angular.module('myApp')
    .controller('favCtrl', ['$scope','$rootScope','$state',  function favCtrl($scope,$rootScope,$state) {


        $scope.showVideo =  function(ID,vidID){
            $state.go('favorites.video',{id:ID,vID:vidID});
        };

    }]);