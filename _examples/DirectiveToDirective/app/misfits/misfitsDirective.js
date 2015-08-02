(function() {
	'use strict';
	
	angular.module('greetings')
	
	.directive('misfits', [misfits]);

	function misfits() {
		return {
		    restrict: 'E',
		    scope: {
		        'btnText': '@'
		    },
		    templateUrl: 'app/misfits/misfitsTemplate.html',
			controller: function($scope) {
				$scope.songs = [];
				$scope.set = false;

				this.sayStatic = function() {
				    $scope.songs.push({ song: 'Static Age', url: 'https://youtu.be/lTqz8VbWFiw' });
				};
				this.sayHalloween = function() {
				    $scope.songs.push({ song: 'Halloween', url: 'https://youtu.be/ChlW283_33s' });
				};
				this.sayDie = function() {
				    $scope.songs.push({ song: 'Die Die My Darling', url: 'https://youtu.be/iyd8dY8rRtA' });
				};
			},

			link: function(scope, elem) {
			    elem.bind('click', function () {
			        scope.set = !scope.set;
			        scope.$apply();
				});
			}
		} // return
	}

})();
