/**
 * Created by priya.singh on 10/21/2016.
 */
/**
 * Login module - user login
 */
angular.module('myApp').controller('LoginCtrl',['$scope' , '$http' ,'$state','$rootScope',function ($scope,$http,$state,$rootScope) {
    $scope.doLogin = function(){
        $http.post('/api/checkLogin' , $scope.form).
            success(function(data) {
                console.log(data);
                $state.go('home');
                $rootScope.islogin = true;
            });
    };
}]);