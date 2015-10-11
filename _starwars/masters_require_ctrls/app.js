
angular.module('app', [])

	.controller('MainController', function($scope){
	})

	.directive('emperor', [function(){
		var name = 'The Emperor';
		return {
			scope: true,
			controller: function($scope) {
				// must set properties we want to pass around
				// on the controller itself, not its $scope
				this.name = name;
			},
			link: {
				pre: function(scope, el, attr) {
					el.data('name', name); // data(key, val) is jQuery fn
					console.log(scope.master + ' has no master');
				}
			}
		};
	}])

	.directive('vader', [function(){
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
	}])

	.directive('starKiller', [function(){
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
