/* Controllers */

var baseballControllers = angular.module('baseballControllers', []);

baseballControllers.controller('BaseballCtrl', ['$scope',
  
  function($scope) {

    $scope.model = {"attribute":{"":""}};

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
        "type" : "personalization",
        "values" : [
            {
              "title" : "No Personalization",
              "numberOfLines" : "",
              "coordinates" : ""
            },
            {
              "title" : "One Line of Personalization",
              "numberOfLines" : "1",
              "coordinates" : ["0_0"]
            },
            {
              "title" : "3 Lines of Personalization",
              "numberOfLines" : "3",
              "coordinates" : ["0_0", "0_20", "0_40"]
            }

        ],
        "required" : "false"
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
      console.log("User selects "+userSelection+" for index "+index);
      $scope.model.attribute[index] = userSelection;
    }

    //Set the default personalization to 0
    $scope.currentPersonalization = 0;  

    //Toggle personalization
    $scope.togglePersonalization = function(index) {
      $("#personalization_"+$scope.currentPersonalization).slideUp();
      $("#personalization_"+index).slideDown();      
      $scope.currentPersonalization = index;
    }

  }]);