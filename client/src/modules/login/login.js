/**
 * Created by priya.singh on 10/21/2016.
 */
/**
 * Login module - user login
 */
angular.module('myApp').controller('LoginCtrl',['$scope' , '$http' ,function ($scope,$http) {
    $scope.doLogin = function(){
        $http.post('/api/checkLogin' , $scope.form).
            success(function(data) {
                console.log(data);
            });
    };
}]);