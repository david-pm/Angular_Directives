angular
      .module('app', [])
      .controller('Ctrl', Ctrl)
      .directive('parentDirective', parentDirective)
      .directive('childDirective', childDirective)
      .directive('compileExample', compileExample);
    function Ctrl($scope) { 
        $scope.job = 'trashman';
    }
    function parentDirective() {
      return {
        scope: {},
        transclude: true,
        template: '<p>This variable - <b>{{job}}</b> - was set in the link ' +
                  'function of this(parentDirective) directive\'s child' +
                  '(childDirective).</p><child-directive><child-directive>',
        controller: function($scope) {
          $scope.job = 'maid';
          $scope.say = function(job) {
            $scope.job = job;
          }
        }
      };
    }

    function childDirective() {
      return {
        scope: true,
        template: '<p>This will render the child\'s job variable since it has ' + 
                  'set its own local variable - <b>{{job}}</b></p>',
        controller: function($scope){ 
          $scope.job = 'milkman'; 
        },
        link: function(scope) {
          scope.say('shoe shine boy');
        }
      };
    }


    function compileExample() {
      return {
        scope: true,
        controller: function($scope) { $scope.name = 'Dan'; },
        compile: function(tElement, tAttrs) {
          angular.element(tElement).append("<p>This name - <b>{{name}}</b> - " +
                "was evaluated as an expression via the $compile function</p>");
          return function postLink(scope, element, attrs) {
            scope.name = 'David'
          }
        }
      };
    }