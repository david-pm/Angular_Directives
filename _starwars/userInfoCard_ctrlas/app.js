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
					user: "=",
					initCollapsed: '@collapsed'
				}, // false is default which is shared scope, set to true for inherited scope, set to {} for isolated scope
				controllerAs: 'vm',
				bindToController: true,
				controller: function() {
					this.collapsed = (this.initCollapsed === 'true');
					this.knightMe = function(user) {
						user.rank = "Knight";
					};
					this.collapse = function() {
						this.collapsed = !this.collapsed;
					};
					this.removeFriend = function(friend) {
						var i = this.user.friends.indexOf(friend);
						if (i > -1) {
							this.user.friends.splice(i, 1);
						}
					};

				} // directive controller
			}; //return
		}]); // directive
	

	angular.module('app').directive('removeFriend', 
		[function(){
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