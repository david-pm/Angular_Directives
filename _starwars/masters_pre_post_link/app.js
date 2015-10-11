
angular.module('app', [])

	.controller('MainController', function($scope){
	})

	.directive('emperor', [function(){
		return {
			scope: true,
			link: {
				pre: function(scope, el, attr) {
					el.data('name', 'The Emperor'); // data() is jQuery fn
					scope.master = 'The Emperor';
					console.log(scope.master + ' has no master');
				}
			}
		};
	}])
	// remember these directives are nested in the view so the children inherit from the parents
	.directive('vader', [function(){
		return {
			scope: true,
			link: {
				pre: function(scope, el, attr) {
					el.data('name', 'Darth Vader'); // data(key, val) is jQuery fn
					el.data('master', scope.master);
					console.log('Vader\'s master is ' + scope.master);
				}
			}
		};
	}])

	.directive('starKiller', [function(){
		return {
			scope: true,
			link: {
				post: function(scope, el, attr) {
					el.data('name', 'Starkiller'); // data() is jQuery fn
					el.data('master', scope.master);
					console.log('Starkiller\'s master is ' + scope.master);
				}
			}
		};
	}]);
