(function() {

	angular.module('app', []);

	angular.module('app').controller('MainController', ['$scope', function($scope){
		$scope.data = {message: "I have not been clicked"};
		$scope.clickHandler = function(p) {
			p.message = "I have been clicked";
		}
	}]);

	angular.module('app').directive('myClick', ['$parse', function($parse){
		return {
			link: function(scope, iElm, iAttrs, controller) {
				var fn = $parse(iAttrs['myClick']);
				iElm.on('click', function() {
					scope.$apply(function() {
						fn(scope);
					})
				})	
			}
		};
	}]);

})();