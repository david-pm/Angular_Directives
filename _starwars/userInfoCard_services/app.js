(function() {

	angular.module('app', [])

	.controller('MainController', ['$scope', function($scope){
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
				hasForce: true,
				master: 'Yoda',
				passedTrials: true,
				masterApproves: true,
				yearsOfJediTraining: 4,
				friends: ["Han", "Chewbacca", "Leia"]
			};
		} // controller fn
	]) // MainController

	.factory('jediPolicy', ['$q', function($q){
		return {
			advanceToKnight: function(candidate) {
				var promise = $q(function(resolve, reject) {
					if (candidate.hasForce &&
					(
						candidate.yearsOfJediTraining > 20
						|| candidate.isChosenOne
						|| (candidate.master === 'Yoda' && candidate.yearsOfJediTraining > 3)
					)
					&& candidate.masterApproves
					&& candidate.passedTrials) {
						candidate.rank = "Jedi Knight";
						resolve(candidate);
					} else {
						reject(candidate);
					}
				});
				return promise;
			}
		};
	}])

	.directive('userInfoCard',
		['jediPolicy',
		function(jediPolicy){
			return {
				templateUrl: "userinfocard.html",
				scope: {
					user: "=",
					initCollapsed: '@collapsed'
				}, // false is default which is shared scope, set to true for inherited scope, set to {} for isolated scope
				controller: function($scope) {
					$scope.collapsed = ($scope.initCollapsed === 'true');
					$scope.knightMe = function(user) {
						jediPolicy.advanceToKnight(user)
							.then(null, function(user) {
								alert('Sorry, ' + user.name + ' is not eligilbe to become a Knight');
							})
					};
					$scope.collapse = function() {
						$scope.collapsed = !$scope.collapsed;
					};
					$scope.removeFriend = function(friend) {
						var i = $scope.user.friends.indexOf(friend);
						if (i > -1) {
							$scope.user.friends.splice(i, 1);
						}
					};

				} // directive controller
			}; //return
		}]) // directive


	.directive('removeFriend',
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
		}]) // directive


	.directive('theAddress',
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

}());
