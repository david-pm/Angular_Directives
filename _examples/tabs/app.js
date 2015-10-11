
	angular.module('app', [])

		.controller('MainController', function($scope){
		})

		.directive('swTabstrip', function(){
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
					// notice the method is on the ctrl not the ctrl.scope
					this.includePane = function(pane) {
						//console.log(pane);
						$scope.panes.push(pane);
						if ($scope.panes.length === 1) {
							pane.selected = true;
						}
					}
				}, // controller
				templateUrl: 'swTabstrip.html'
			};
		})

		.directive('swPane', function(){
			return {
				scope: {
					title: '@'
				},
				transclude: true,
				require: '^swTabstrip',
				link: function(scope, el, attrs, tabstripCtrl) {
					//console.log(scope);
					tabstripCtrl.includePane(scope); // scope.title
				},
				templateUrl: 'swPane.html'
			};
		});
