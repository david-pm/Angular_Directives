(function() {

	angular.module('app', []);

	angular.module('app').controller('MainController', 
		['$scope', function($scope){
			$scope.user = {
				name: "Han Solo",
				address: {
					street: 'Lightyear Lane',
					city: 'Secret Rebel Base',
					planet: 'Yanvin 4'
				},
				friends: ["Luke", "Chewbacca", "Lando"]
			};
			console.log($scope); // shared $scope, inherited $scope, isolated $scope
			
		} // controller fn
	]);

	angular.module('app').directive('userInfoCard', [function(){
		// Runs during compile
		return {
			templateUrl: "userinfocard.html",
			scope: true, // false is default which is shared scope, set to true for inherited scope, set to {} for isolated scope
			controller: function($scope) {
				$scope.knightMe = function(user) {
					user.rank = "Knight";
				};
				console.log($scope); // shared $scope, inherited $scope, isolated $scope

			} // controller
		};
	}]);

})();