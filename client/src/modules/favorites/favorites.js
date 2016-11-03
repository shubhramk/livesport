/**
 * Favorites module - Favorites screen
 */
angular.module('myApp')
    .controller('favCtrl', ['$scope','$rootScope','$state','localStorageService',  function favCtrl($scope,$rootScope,$state,localStorageService) {

        $rootScope.favoriteVidArr = localStorageService.get('FAVORITES_DATA') || [];
        $scope.showVideo =  function(ID,vidID){
            $state.go('favorites.video',{id:ID,vID:vidID});
        };

    }]);