
	angular.module('app', []);

	angular.module('app')
	
	.controller('MainController', function($scope){
		$scope.items1 = {btn: 'click me', text: 'now click me >'};
		$scope.items2 = {btn: 'press me', text: 'now press me >'};
		$scope.collapsed = true;
	})
	
	.directive('myDirective', function(){
		return {
			scope: {
				items: '='
			},
			templateUrl: 'items.html',
			controller: function($scope) {
				$scope.collapsed = false;
				$scope.collapse = function() {
				   $scope.collapsed = !$scope.collapsed;
				}
			}
		};
	})
	
	.directive('nested', function(){
		return {
			// change this back to shared scope, and instead of creating
			// its own local scope vars, it will be grabbing the vars of it parent
			// which is myDirective
			scope: true,
			templateUrl: 'nested.html',
			controller: function($scope) {
				// uncomment below and see what happens
				// $scope.items = {};
				$scope.collapsed = false;
				$scope.collapse = function() {
				   $scope.collapsed = !$scope.collapsed;
				}
			}
		};
	});
