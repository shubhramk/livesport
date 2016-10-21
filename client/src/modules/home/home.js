/**
 * Home module - Home screen
 */
angular.module('ngWeatherForecast.home', [])
    .controller('homeCtrl', ['$scope',  function homeCtrl($scope) {

        $scope.test = "home page";
            console.log($scope.test);
  }]);
