(function() {

	angular.module('app', []);

	angular.module('app').controller('MainController', ['$scope', function($scope){
		$scope.answers = { baseLocation: "Yavin 4", father: true }
	}]);

	angular.module('app').directive('myQuestion', [function(){
		return {
			scope: {
				questionText: '@q'
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function() {},
			templateUrl: 'myQuestion.html',
			transclude: true,
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

})();