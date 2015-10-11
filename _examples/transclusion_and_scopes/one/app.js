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
        transclude:true,
        template: '<div>This is not transcluded, btw.</div><div ng-transclude></div>',
        link: function(scope, element, attrs, ctrl, transclude) {
          scope.person = {
            name: 'Directive Joe',
            profession: 'Scope guy'
          };

          scope.header = 'Directive\'s header';
        }
      };
    });

})();
