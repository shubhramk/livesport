/**
 * Created by priya.singh on 10/21/2016.
 */
/**
 * Login module - user login
 */
angular.module('myApp').controller('LoginCtrl',['$scope' , '$http' ,'$state','$rootScope',function ($scope,$http,$state,$rootScope) {
    if(localStorage.getItem("islogin") === "true"){
        $state.go('home');
    }
    $scope.doLogin = function(){
        $http.post('/api/checkLogin' , $scope.form).
            success(function(data) {
                var status = data.status;
                $scope.msg = '';
                if(status == "0"){
                    $state.go('home');
                    localStorage.setItem("islogin","true");
                    $rootScope.islogin = true;
                }else{
                    $scope.msg =  data.message;
                }

            });
    };
}]);