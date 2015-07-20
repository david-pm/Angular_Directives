
angular.module('app', []);

angular.module('app').controller('MainController', function($scope){
	
});

angular.module('app').directive('emperor', [function(){
	return {
		scope: true,
		link: {
			pre: function(scope, el, attr) {
				el.data('name', 'The Emperor'); // data() is jQuery fn
				scope.master = 'The Emperor';
			}
		}
	};
}]);

angular.module('app').directive('vader', [function(){
	return {
		scope: true,
		link: {
			pre: function(scope, el, attr) {
				el.data('name', 'Darth Vader'); // data() is jQuery fn
				el.data('master', scope.master);
				console.log('Vader\'s master is ' + scope.master);
			}
		}
	};
}]);

angular.module('app').directive('starKiller', [function(){
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
