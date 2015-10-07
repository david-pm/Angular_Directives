(function() {

	angular.module('app', [])

	.controller('MainController', ['$scope', function($scope){
		$scope.data = {message: "I have not been clicked"};
		$scope.clickHandler = function(p) {
			p.message = "I have been clicked";
		}
	}])

	.directive('myClick', ['$parse', function($parse){
		return {
			link: function(scope, elem, attrs) {
				var getter = $parse(attrs['myClick']);
				elem.on('click', function() {
					scope.$apply(function() {
						getter(scope);
					})
				})	
			}
		};
	}]);

})();