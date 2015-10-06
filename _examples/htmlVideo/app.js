(function() {

	angular.module('app', []);

	angular.module('app').controller('MainController', ['$scope', function($scope){
		$scope.messages = [];
		$scope.handlePause = function(e) {
			console.log(e);
			$scope.messages.push({text: 'paused!'})
		};
	}]);

	angular.module('app').directive('eventPause', function($parse) {
		return {
			restrict: 'A',
			link: function(scope, el, attrs) {
				var fn = $parse(attrs['eventPause']);
				console.log(fn); // >> handlePause
				el.on('pause', function(event) {
					scope.$apply(function() {
						fn(scope, {evt: event});
					})
				})
			}
		};
	});

	angular.module('app').directive('spacebarSupport', function(){
		return {
			link: function(scope, el, attrs) {
				$('body').on('keypress', function(evt) {
					var vidEl = el[0];
					if (evt.keyCode === 32) {
						if (vidEl.paused) {
							vidEl.play();
						} else {
							vidEl.pause();
						}
					}
				})
			}
		};
	});

})();
