
angular.module('app', []);

angular.module('app').controller('MainController', function($scope){
	
});

angular.module('app').directive('emperor', [function(){
	var name = 'The Emperor';
	return {
		scope: true,
		controller: function($scope) {
			// must set props that we want to pass around
			// on the ctrl itself, not its $scope
			this.name = name;
		},
		link: {
			pre: function(scope, el, attr) {
				el.data('name', name); // data() is jQuery fn
			}
		}
	};
}]);

angular.module('app').directive('vader', [function(){
	var name = 'Darth Vader';
	return {
		scope: true,
		require: '^emperor',
		controller: function($scope) {
			this.name = name;
		},
		link: function(scope, el, attr, emperorCtrl) {
			el.data('name', name);
			el.data('master', emperorCtrl.name);
			console.log('Vader\'s master is ' + emperorCtrl.name);
		}
	};
}]);

angular.module('app').directive('starKiller', [function(){
	return {
		scope: true,
		require: '?^vader', // can use special chars like with scope: {}
		link: function(scope, el, attr, vaderCtrl) {
			el.data('name', 'Starkiller');
			if(!!vaderCtrl) {
				el.data('master', vaderCtrl.name);
				console.log('Starkiller\'s master is ' + vaderCtrl.name);
			} else {
				console.log('Starkiller has no master!');
			}
			
		}
	};
}]);
