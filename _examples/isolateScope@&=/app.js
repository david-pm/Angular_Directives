(function() { 
    'use strict';
    
	angular.module('app', [])

    .controller('MainController', function($scope){
		$scope.copy = "Hello";
		$scope.updateCopy = function(val) {
		    $scope.copy = val;
		};
	})

	.directive('myComponent', function(){
		return {
            scope: {
                attrOneWay:'@'
            },
            template: '<p><b>@</b> (attr-one-way): {{attrOneWay}} - <input ng-model="attrOneWay" /></p>'
		};
	})
	.directive('anotherComponent', function(){
		return {
            scope: {
                attrTwoWay:'='
            },
            template: '<p><b>=</b> (attr-two-way): {{attrTwoWay}} - <input ng-model="attrTwoWay" /></p>'
		};
	})
	.directive('lastComponent', function(){
		return {
            scope: {
                isolatedExpression:'&'
            },
            template: '<p><b>& </b>expressions: {{isolatedCopy}} - <input ng-model="isolatedCopy" /> <button class="btn" ng-click="sendit({val:isolatedCopy})">Submit</button></p>',
            controller: function($scope) {
                $scope.sendit = function(obj){
                    $scope.isolatedExpression(obj);
                    // or just do this and remove {} from sendit() args
                    // $scope.isolatedExpression({val:$scope.isolatedCopy});
                };
            }
            
		};
	});

})();