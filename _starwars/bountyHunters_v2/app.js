
angular.module('app', []);

angular.module('app').controller('MainController', function($scope){
	$scope.bountyHunters = [{
		name: 'Boba Fett', rating: 35
	}, {
		name: 'IG-88', rating: 35
	},{
		name: 'Dengar', rating: 35
	},{
		name: 'Cad Bane', rating: 35
	}];

	$scope.add = function(hunter) {
		$scope.bountyHunters.push({name: 'New Hunter', rating: 0});
	};
	$scope.remove = function() {
		$scope.bountyHunters.length--;
	};
});

angular.module('app').directive('userList', function($compile){
	return {
		transclude: 'element',
		link: function(scope, el, attr, ctrl, transclude) {
			var pieces = attr.userList.split(' '),
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
							var template = $compile('<div class="panel panel-primary"><div class="panel-heading">{{' + itemString + '.name}}</div><div class="panel-body"></div></div>');
							var wrapper = template(childScope);
							wrapper.find(".panel-body").append(clone);
							el.before(wrapper);
							var item = {};
							item.el = wrapper;
							item.scope = childScope;
							elements.push(item);							
						})
					}
				})
		}
	};
});
