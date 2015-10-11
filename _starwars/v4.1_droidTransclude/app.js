(function() {

	angular.module('app', [])

	.controller('MainController', ['$scope', function($scope){
			$scope.person1 = {
				name: "Han Solo",
				address: {
					street: '145 Lightyear Lane',
					city: 'Secret Rebel Base',
					planet: 'Yanvin 4'
				},
				level: 2,
				friends: ["Luke", "Chewbacca", "Lando"]
			};
			$scope.person2 = {
				name: 'Luke Skywalker',
				address: {
					street: '2001 Wormhole Avenue',
					city: 'Mos Eisley',
					planet: 'Tattoine'
				},
				level: 0,
				friends: ["Han", "Chewbacca", "Leia"]
			};
			$scope.droid1 = {
				name: 'R2-D2',
				specifications: {
					manufacturer: 'Industrial Automation',
					type: 'Astromech',
					productLine: 'R2 series x'
				},
				level: 1
				// owners etc
			}

		} // controller fn
	]) // MainController

	.directive('stateDisplay', [function(){
		return {
			link: function(scope, el, attrs) {
				var parms = attrs['stateDisplay'].split(' '),
					linkVar = parms[0],
					classes = parms.slice(1);

				scope.$watch(linkVar, function(newVal) {
					el.removeClass(classes.join(' '));
					el.addClass(classes[newVal]);
				});

			}
		};
	}])

	.directive('userPanel', [function() {
			return {
				transclude: true,
				templateUrl: 'userpanel.html',
				scope: {
					name: '@',
					level: '=',
					initCollapsed: '@collapsed'
				},
				controller: function($scope) {
					$scope.collapsed = ($scope.initCollapsed === 'true');
					$scope.nextState = function(e) {
						e.stopPropagation();
						e.preventDefault();
						$scope.level++;
						$scope.level = $scope.level % 4;
					}

					$scope.collapse = function() {
						$scope.collapsed = !$scope.collapsed;
					};
				}
			}
	}])

	.directive('personInfoCard', [function(){
			return {
				templateUrl: "personinfocard.html",
				scope: {
					person: "=",
					initCollapsed: '@collapsed'
				},
				controller: function($scope) {
					$scope.knightMe = function(person) {
						person.rank = "Knight";
					};

					$scope.removeFriend = function(friend) {
						var i = $scope.person.friends.indexOf(friend);
						if (i > -1) {
							$scope.person.friends.splice(i, 1);
						}
					};
				} // directive controller
			}; //return
		}]) // directive

	.directive('droidInfoCard',[function(){
			return {
				templateUrl: "droidinfocard.html",
				scope: {
					droid: "=",
					initCollapsed: '@collapsed'
				},
				controller: function($scope) {

				} // directive controller
			}; //return
		}]) // directive


	.directive('removeFriend',[function(){
			return {
				restrict: 'E',
				templateUrl: 'removeFriend.html',
				scope: {
					notifyParent: '&method'
				},
				controller: function($scope) {
					$scope.removing = false;
					$scope.startRemove = function() {
						$scope.removing = true;
					};
					$scope.cancelRemove = function() {
						$scope.removing = false;
					};
					$scope.confirmRemove = function() {
						$scope.notifyParent();
					}
				} // directive controller
			}; //return
		}]) // directive


	.directive('theAddress',[function(){
			return {
				restrict: 'E',
				scope: true, // inherited scope
				templateUrl: 'address.html',
				controller: function($scope) {
					$scope.collapsed = true;
					$scope.expandAddress = function() {
						$scope.collapsed = false;
					};
					$scope.collapseAddress = function() {
						$scope.collapsed = true;
					};
				} // directive controller
			}; //return
		}]); // directive

})();
