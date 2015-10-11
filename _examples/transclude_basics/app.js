(function() {

'use strict';

angular
	.module('app', [])

	.controller('MainController', ['$scope', function($scope){

	}])

	.directive('foo', [function(){
    return {
      template: "<h4 class='text-warning'>What you're reading has replaced what was in the div that"
      + " has the attribute directive 'foo' </h4><h4 class='text-warning'>To utilize the original DIV"
      + " content (now replaced by the template), the directive must clone it and"
      + " add it to the DOM using transclusion. To say it another way, transclusion"
      + " is simply the method by which a directive displays content that was"
      + " replaced by a directive’s template.</h4>"
    };
	}])

  .directive('bar', [function() {
    return {
      transclude: true,
      template: "<h4 class='text-primary'>This is the 'bar' directive template</h4><h4 ng-transclude></h4>"
    }
  }])

})();
