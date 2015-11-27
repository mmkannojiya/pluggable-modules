'use strict';

angular.module('pluggable.testmodule')
  .controller('TestController', function ($scope) {
    $scope.buttonHit = function () {
      window.alert('Setting color green of this component');
    };
    
  });
