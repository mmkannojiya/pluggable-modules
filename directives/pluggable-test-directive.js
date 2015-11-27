'use strict';
(function (angular) {
angular.module('pluggable.testmodule')
  .directive('pluggableTestModule', function () {
    return {
      restrict: 'A',
	  controller: 'TestController',
      link: function (scope, element) {
		element.css('background-color','green');
		scope.buttonHit();
	  }
    };
  });
 })(window.angular);