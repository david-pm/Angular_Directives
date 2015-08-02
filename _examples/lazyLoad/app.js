
	angular.module('app', []);

	angular.module('app').controller('MainController', function($scope){
		$scope.items = [1,23,45,5];
	});

	angular.module('app').directive('myLazyRender', function(){
		return {
			priority: 1200,
			restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			template: '',
			transclude: 'element',
			link: function(scope, el, attrs, ctrl, transclude) {
				var hasBeenShown = false;
				var unwatchFn = scope.$watch(attrs.myLazyRender, function (value) {
					if (value && !hasBeenShown) {
						hasBeenShown = true;
						transclude(scope, function (clone) {
							el.after(clone);
						});
						unwatchFn();
					}
				});
			}
		};
	});

	angular.module('app').directive('echo', function(){
		return {
			priority: 900,
			link: function($scope, iElm, iAttrs, controller) {
				console.log('echo');	
			}
		};
	});
