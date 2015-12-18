/* Controllers */

var baseballControllers = angular.module('baseballControllers', []);

baseballControllers.controller('BaseballCtrl', ['$scope',
  
  function($scope) {
    $scope.message = "working!";
  }]);