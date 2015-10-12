(function() {

'use strict';

angular
	.module('app', [])

	.controller('MainController', ['$scope', function($scope){
    $scope.person = {
        name: 'John Doe',
        profession: 'Fake name'
      };
      $scope.header = 'Person';
    }])

    .directive('person', function() {
      return {
        restrict: 'EA',
        scope: {
          header: '='
        },
        transclude: 'element',
        link: function(scope, element, attrs, ctrl, transclude) {
          scope.person = {
            name: 'Directive Joe',
            profession: 'Scope guy'
          };

          scope.header = 'Directive\'s header';
					transclude(scope, function(clone) {
							element.after(clone);
					})
        }
      };
    });

})();
