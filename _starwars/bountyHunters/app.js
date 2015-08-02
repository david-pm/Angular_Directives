
angular.module('app', []);

angular.module('app').controller('MainController', function($scope){
	$scope.bountyHunters = [{
		name: 'Boba Fett'
	}, {
		name: 'IG-88'
	},{
		name: 'Dengar'
	},{
		name: 'Cad Bane'
	}];

	$scope.add = function(hunter) {
		$scope.bountyHunters.push({name: 'hunter'});
	};
	$scope.remove = function() {
		$scope.bountyHunters.length--;
	};
});

angular.module('app').directive('myRepeat', function(){
	return {
		transclude: 'element',
		link: function(scope, el, attr, ctrl, transclude) {
			var pieces = attr.myRepeat.split(' '),
				itemString = pieces[0],
				collectionName = pieces[2],
				elements = [];

				scope.$watchCollection(collectionName, function(collection) {
					if (elements.length > 0) {
						for (var n = 0; n < elements.length; n++) {
							elements[n].el.remove();
							elements[n].scope.$destroy();
						}
						elements = [];
					}

					for(var i = 0; i < collection.length; i++) {
						var childScope = scope.$new();
						childScope[itemString] = collection[i];
						transclude(childScope, function(clone) {
							el.before(clone);
							var item = {};
							item.el = clone;
							item.scope = childScope;
							elements.push(item);							
						})
					}
				})
		}
	};
});
