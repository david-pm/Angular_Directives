
	angular.module('app', []);

	angular.module('app').controller('MainController', function($scope){
		$scope.items = [11, 22, 33, 44];
	});

	angular.module('app').directive('myTransclude', function(){
		return {
			transclude: 'element',
			link: function(scope, el, attr, ctrl, transclude) {
				console.log(el[0]);
				transclude(scope, function(clone) {
					el.after(clone);
				})
			}
		};
	});
