(function() {

	angular.module('app', [])

    .controller('MainController', ['$scope', function($scope){
        $scope.location = {city: "Los Angeles"};
	}])

	.directive('myDirective', [function(){
		return {
			restrict: 'E',
			scope: {
			    question: '@'
			},
			transclude: true,
			template: '<div class="panel panel-primary"><div class="panel-body">'
			        + '{{question}}</div></div><ng-transclude />'
		};
	}]);

})();