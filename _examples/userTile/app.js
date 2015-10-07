(function() {

	angular.module('app', [])

	.controller('MainController', ['$scope', function($scope){
		$scope.user1 = {
			name: "Click Me", 
			selected: false
		}
	}])

	.directive('userTile', [function(){
		return {
			scope: {
				user : '=',
			}, 
			templateUrl: 'userTile.html'
			// controller: function($scope){
			// 	$scope.select = function() {
			// 		$scope.user.selected = !$scope.user.selected;
			// 	}	
			// }

			/* 
			** Doing something like this is no big deal but
			** its easy to imagine how it could get out of 
			** control with many lines of code bloating out
			** your component directive's controller. To keep
			** things lean we can extract that business 
			** specific logic out into a decorator directive
			*/
		};
	}])

	.directive('userClickSelect', [function() {
		return {
			link: function(scope, el, attrs) {
				el.on('click', function() {
					scope.$apply(function() {
						scope.user.selected = !scope.user.selected;
					});
				})
			}
		}
	}]);

})();