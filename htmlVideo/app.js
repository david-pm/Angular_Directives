(function() {

	angular.module('app', []);

	angular.module('app').controller('MainController', ['$scope', function($scope){
		
	}]);

	angular.module('app').directive('spacebarSupport', function(){
		return {
			link: function($scope, el, attrs) {
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