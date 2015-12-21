/* Controllers */

var baseballControllers = angular.module('baseballControllers', []);

baseballControllers.controller('BaseballCtrl', ['$scope',
  
  function($scope) {

    $scope.model = {};

    // Set the STEPS
    var steps = [
      {
        "title" : "Select Bat Length",
        "instruction" : "Select A Bat Length",
        "type" : "select",
        "values" : ["34 inch", "32 inch"],
        "required" : "true"
      },
      {
        "title" : "Handle and Barrel Colors",
        "instruction" : "Choose a Barrel/Handle Color",
        "type" : "color",
        "values" : ["#FFF", "#000", "#0033cc", "#ff0000", "#00cc00", "#ffff00"],
        "required" : "true"
      },
      {
        "title" : "Cup",
        "instruction" : "Choose a Cup Type",
        "type" : "image",
        "values" : ["/images/full.png", "/images/half.png", "/images/none.png"],
        "required" : "true"
      },
      {
        "title" : "Personalization",
        "instruction" : "Select a Personalization style",
        "type" : "other",
        "values" : ["34 inch", "32 inch"],
        "required" : "true"
      },
      {
        "title" : "Review & Add to Cart",
        "instruction" : "Review your selections and Add to Cart",
        "type" : "review",
        "values" : [],
        "required" : "false"
      }
    ];
    $scope.steps = steps;

    //Set the default step to 0
    $scope.currentStep = 0;    

    //Toggle steps on click
    $scope.toggleStep = function(stepNumber) {
      $("#step_"+$scope.currentStep).slideUp();
      $("#step_"+stepNumber).slideDown();      
      $scope.currentStep = stepNumber;
    }

    //Set attribute user selection
    $scope.setAttributeSelection = function(userSelection, index){
      $scope.model.attribute[index] = userSelection;
    }

  }]);