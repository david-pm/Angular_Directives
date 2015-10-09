(function() {
	'use strict';

	angular.module('app', [])

		.controller('MainController', function($scope){
			$scope.size = 150;
		})
		
		.directive('fontScale', function(){
			return {
				link: function(scope, el, attrs) {
					// since we bound the text to the input field's model
					// ($scope.size) via the font-scale attr/directive we:
					scope.$watch(attrs['fontScale'], function(newVal) {
						el.css('font-size', newVal + '%');
					})
				}
			};
		});

}());
