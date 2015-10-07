(function() {

	angular.module('app', [])

	.controller('MainController', ['$scope', function($scope){
		$scope.messages = [];
		$scope.handlePause = function(e) {
			console.log(e);
			$scope.messages.push({text: 'paused!'})
		};
	}])

	.directive('eventPause', function($parse) {
		return {
			restrict: 'A',
			link: function(scope, el, attrs) {
				var getter = $parse(attrs['eventPause']);
				console.log(getter); // >> handlePause
				el.on('pause', function(event) {
					scope.$apply(function() {
						getter(scope, {evt: event});
					})
				})
			}
		};
	})
	
	/* 
	** NOTE: could have also taken this approach
	** but isolate scope limits scalablity down the 
	** road since you can't have two directives on 
	** the same element have isolate scope and or 
	** inherit scope.
	*/

	// .directive('eventPause', function($parse) {
	// 	return {
	// 		restrict: 'A',
	// 		scope: {
	// 			eventPause: '&'
	// 		},
	// 		link: function(scope, el, attrs) {
	// 			el.on('pause', function(event) {
	// 				scope.$apply(function() {
	// 					scope.eventPause();
	// 				});
	// 			})
	// 		}
	// 	};
	// })

	.directive('spacebarSupport', function(){
		return {
			link: function(scope, el, attrs) {
				$('body').on('keypress', function(evt) {
					var vidEl = el[0];
					if (evt.keyCode === 32) {
						(vidEl.paused) ? vidEl.play() : vidEl.pause();
					}
				})
			}
		};
	});

})();
