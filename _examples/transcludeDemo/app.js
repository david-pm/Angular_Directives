(function() {

'use strict';

angular
	.module('app', [])

	.controller('MainController', ['$scope', function($scope){
		$scope.messages = {
			text1: "this is message one",
			text2: "this is message two"
		};
	}])

	.directive('displayBox', [function(){
		return {
			transclude: true,
			scope: {}, // best practice to have isolated scope or at least
					   // inherited scope when using transclusion
			templateUrl: 'displayBox.html',
			controller: function($scope){
				$scope.hidden = false;
				$scope.close = function() {
					$scope.hidden = true;
				}
				$scope.openMe = function() {
					if(!!$scope.hidden)
						$scope.hidden = false;
				};
				// cant do this with inherited/isolated scope
				$scope.messages = {
					text1: "this is a holdup",
					text2: "this is a hijack"
				}
			}
		};
	}])

	.directive("welcome", [function() {
	  	return {
	    	restrict: "E",
	    	scope: {},
	    	transclude: true,
  			template: "<div>This is the welcome component</div> <ng-transclude></ng-transclude>"
	    };
	}]);

})();
