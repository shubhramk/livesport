/**
 * Created by priya.singh on 10/20/2016.
 */
/**
 * @ used to show header in the application
 */
angular.module("myApp").directive('header', function () {
    return {
        restrict: 'A', //This means that it will be used as an attribute and NOT as an element.
        replace: true,
        scope: true,
        templateUrl: "/scripts/directives/header/header.html",
        controller: function() {
        }
    };
});