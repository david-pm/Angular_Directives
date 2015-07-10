(function() {

	angular.module('app', []);

	angular.module('app').controller('MainController', 
		['$scope', function($scope){
			$scope.user1 = {
				name: "Han Solo",
				address: {
					street: '145 Lightyear Lane',
					city: 'Secret Rebel Base',
					planet: 'Yanvin 4'
				},
				friends: ["Luke", "Chewbacca", "Lando"]
			};
			$scope.user2 = {
				name: 'Luke Skywalker',
				address: {
					street: '2001 Wormhole Avenue',
					city: 'Mos Eisley',
					planet: 'Tattoine'
				},
				friends: ["Han", "Chewbacca", "Leia"]
			};
			
		} // controller fn
	]); // MainController

	angular.module('app').directive('userInfoCard', 
		[function(){
			return {
				templateUrl: "userinfocard.html",
				scope: {
					user: "=who",
					initCollapsed: '@collapsed'
				}, // false is default which is shared scope, set to true for inherited scope, set to {} for isolated scope
				controller: function($scope) {
					$scope.collapsed = ($scope.initCollapsed === 'true');
					$scope.knightMe = function(user) {
						user.rank = "Knight";
					};
					$scope.collapse = function() {
						$scope.collapsed = !$scope.collapsed;
					};

				} // directive controller
			}; //return
		}]); // directive
	

	angular.module('app').directive('removeFriend', 
		[function(){
			return {
				restrict: 'E',
				templateUrl: 'removeFriend.html',
				controller: function($scope) {
					$scope.removing = false;
					$scope.startRemove = function() {
						$scope.removing = true;
					};
					$scope.cancelRemove = function() {
						$scope.removing = false;
					};
					$scope.removeFriend = function(friend) {
						var i = $scope.user.friends.indexOf(friend);
						if (i > -1) {
							$scope.user.friends.splice(i, 1);
						}
					}
				} // directive controller
			}; //return
		}]); // directive


	angular.module('app').directive('theAddress', 
		[function(){
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