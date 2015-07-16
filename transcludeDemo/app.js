(function() {

	angular.module('app', []);

	angular.module('app').controller('MainController', ['$scope', function($scope){
		$scope.messages = {
			text1: "this is message one",
			text2: "this is message two"
		}
	}]);

	angular.module('app').directive('displayBox', [function(){
		return {
			transclude: true,
			scope: true, // best practice to have inherited or isolated scope when using transclusion
			templateUrl: 'displayBox.html',
			controller: function($scope){
				$scope.hidden = false;
				$scope.close = function() {
					$scope.hidden = true;
				}
				// cant do this since we have inherited scope
				$scope.messages = {
					text1: "this is a holdup",
					text2: "this is a hijack"
				}
			}
		};
	}]);

})();