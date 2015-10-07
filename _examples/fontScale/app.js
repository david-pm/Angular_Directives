(function() {
	'use strict';
	
	angular.module('app', [])

		.controller('MainController', function($scope){
			$scope.size = 150;
		})

		.directive('fontScale', function(){
			return {
				link: function(scope, el, attrs) {
					// since we bound the input field 
					// to font-scale we can do this:
					scope.$watch(attrs['fontScale'], function(newVal) {
						//jqLite
						el.css('font-size', newVal + '%');
					})
				}
			};
		});


}());
