(function() {

	angular.module('app', []);

	angular.module('app').controller('MainController', ['$scope', function($scope){
		$scope.user1 = {
			name: "Click Me", 
			selected: false
		}
	}]);

	angular.module('app').directive('userTile', [function(){
		return {
			scope: {
				user : '=',
			}, 
			templateUrl: 'userTile.html'
			/*controller: function($scope){
				$scope.select = function() {
					$scope.user.selected = !$scope.user.selected;
				}	
			}*/
		};
	}]);

	angular.module('app').directive('userClickSelect', [function() {
		return {
			link: function(scope, el, attrs) {
				el.on('click', function() {
					scope.user.selected = !scope.user.selected;
					scope.$apply();
				})
			}
		}
	}]);

})();