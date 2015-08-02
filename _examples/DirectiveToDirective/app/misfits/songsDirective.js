(function() {
	'use strict';
	
	angular.module('greetings')
	
	.directive('staticAge', [staticAge])
	.directive('die', [die])
	.directive('halloween', [halloween]);

	function staticAge() {
		return {
		    require: 'misfits',
			link: function(scope, elemj, attrs, misfitsCtrl) {
				misfitsCtrl.sayStatic();
			}
		}; // return
	}
	

	function halloween() {
	    return {
	        require: "misfits",
	    	link: function (scope, element, attrs, misfitsCtrl) {
	        	misfitsCtrl.sayHalloween();
	    	}
	    }; // return
	}

	function die() {
	    return {
	        require: "misfits",
	        link: function (scope, element, attrs, misfitsCtrl) {
	            misfitsCtrl.sayDie();
	        }
	    }; // return
	}

})();
