/* Controllers */

var baseballControllers = angular.module('baseballControllers', []);

baseballControllers.controller('OptionsCtrl', ['$scope', '$http',
  
  function($scope, $http) {

    $scope.model = {"attribute":{"":""}};

    //get the data from the JSON
    $http.get('/js/data.json').success(function(data) {
      $scope.jsonData = data;
      
      //retrieve tabs from JSON
      var tabs = [];
      angular.forEach(data, function(value, key) {
        if(value.identifier === 'p_tabContent'){
          //load tabs
          angular.forEach(value.values, function(tabContent, tabContentKey) {
            tabIndex = parseInt(tabContent.sequence)-1; //zero based index

            var tabObject = {};
            tabObject.value = tabContent.value;
            tabObject.sequence = tabContent.sequence;
            tabObject.identifier = tabContent.identifier;
            tabObject.field3 = tabContent.field3;
            tabObject.uniqueID = tabContent.uniqueID;

            tabs[tabIndex] = tabObject;
          });
        }
        
      });

      //retrieve question and associate to tabs
      angular.forEach(data, function(value, key) {
        if(value.identifier != 'p_tabContent'){
          questionIndex = parseInt(value.sequence)-1; //zero based index

          var questionObject = {};
          questionObject.identifier = value.identifier;
          questionObject.name = value.name;
          questionObject.type = value.type;
          questionObject.uniqueID = value.uniqueID;
          questionObject.sequence = value.sequence;

          //load options
          var options = [];
          angular.forEach(value.values, function(optionContent, optionContentKey) {
            optionIndex = parseInt(optionContent.sequence)-1; //zero based index

            var optionObject = {};
            optionObject.value = optionContent.value;
            optionObject.sequence = optionContent.sequence;
            optionObject.identifier = optionContent.identifier;
            optionObject.field3 = optionContent.field3;
            optionObject.uniqueID = optionContent.uniqueID;
            optionObject.image1 = optionContent.image1;
            optionObject.image1path = optionContent.image1path;
            optionObject.image2path = optionContent.image2path;

            options[optionIndex] = optionObject;
          });

          //add options to question
          questionObject.options = options;

          //add question to tab
          tabs[questionIndex].questions = questionObject;

        }
        
      });

      $scope.tabs = tabs;

    });

    // Set the STEPS
    var steps = [
      {
        "title" : "Select Bat Length",
        "instruction" : "Select A Bat Length",
        "type" : "select",
        "values" : ["34 inch", "32 inch"],
        "required" : true
      },
      {
        "title" : "Handle and Barrel Colors",
        "instruction" : "Choose a Barrel/Handle Color",
        "type" : "color",
        "values" : ["#FFF", "#000", "#0033cc", "#ff0000", "#00cc00", "#ffff00"],
        "required" : true
      },
      {
        "title" : "Cup",
        "instruction" : "Choose a Cup Type",
        "type" : "image",
        "values" : ["/images/full.png", "/images/half.png", "/images/none.png"],
        "required" : true
      },
      {
        "title" : "Personalization",
        "instruction" : "Select a Personalization style",
        "type" : "personalization",
        "values" : [
            {
              "title" : "No Personalization",
              "coordinates" : []
            },
            {
              "title" : "One Line of Personalization",
              "coordinates" : [{"x":"50", "y":"100"}]
            },
            {
              "title" : "3 Lines of Personalization",
              "coordinates" : [{"x":"50", "y":"100"}, {"x":"50", "y":"120"}, {"x":"50", "y":"140"}]
            }

        ],
        "required" : false
      },
      {
        "title" : "Review & Add to Cart",
        "instruction" : "Review your selections and Add to Cart",
        "type" : "review",
        "values" : [],
        "required" : false
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

    //Set the default personalization to 0
    $scope.currentPersonalization = 0;  

    //Toggle personalization
    $scope.togglePersonalization = function(index) {
      $("#personalization_"+$scope.currentPersonalization).slideUp();
      $("#personalization_"+index).slideDown();      
      $scope.currentPersonalization = index;
    }

  }]);

baseballControllers.controller('ImageCtrl', ['$scope',
  
  function($scope) {

    //This is the child controller and will have access to the MODEL defined in the parent controller - OptionsCtrl

  }]);