import angular from "angular";

angular.module("app", []).controller("MyController", $scope => {
  $scope.model = 1;

  console.log($scope.$id);
  $scope.$watch("myForm", f => {
    f.field.$validators.odd = function(modelValue) {
      return modelValue % 2 === 1;
    };
  });
});

angular.module("app").directive("validateVisa", function() {
  function link($scope, $element, $attrs, $ctrl) {
    var VISA_REGEXP = /^4[0-9]{12}(?:[0-9]{3})?$/;
    $ctrl.$validators.visa = function visaParser(modelValue, viewValue) {
      var value = modelValue || viewValue;
      return VISA_REGEXP.test(value);
    };
  }

  return {
    require: "ngModel",
    link: link
  };
});

// Manually bootstrap your angular application
angular.bootstrap(document.getElementById("root"), ["app"]);
