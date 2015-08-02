
	angular.module('app', []);

	angular.module('app').controller('MainController', function($scope){
		
	});

	angular.module('app').directive('swTabstrip', function(){
		return {
			scope: {}, 
			transclude: true,
			controller: function($scope) {
				$scope.panes = [];
				$scope.select = function(pane){
					pane.selected = true;
					$scope.panes.forEach(function(curPane) {
						if(curPane !== pane) {
							curPane.selected = false;
						}
					})
				}

				this.addPane = function(pane) {
					$scope.panes.push(pane);
					if ($scope.panes.length === 1) {
						pane.selected = true;
					}
				}
			}, // controller
			templateUrl: 'swTabstrip.html'
		};
	});

	angular.module('app').directive('swPane', function(){
		return {
			scope: {
				title: '@'
			}, 
			transclude: true,
			require: '^swTabstrip',
			link: function(scope, el, attrs, tabstripCtrl) {
				tabstripCtrl.addPane(scope);
			},
			templateUrl: 'swPane.html'
		};
	});
