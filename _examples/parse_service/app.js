angular.module('app', [])

  .directive('noob', ['$parse', function($parse) {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        var getter = $parse('name'), // var getter = function(name) { return name; }
            setter = getter.assign,
            context = {name: 'from context'},
            locals = {name: 'from locals'}; // overrides context key is found locally
        scope.name = getter(context);
      },
      template: '<p> <b>noob getter:</b> {{ name }}</p>'
    }
  }])

  .directive('am', ['$parse', function($parse) {
    return {
      restrict: 'E',
      link: function(scope, element, attrs) {
        var getter = $parse('something'), // var getter = function(something) { return something; }
            setter = getter.assign,
            context = {something: 'from context'};
        setter(context, 'reset by am setter');
        scope.something = getter(context);
      },
      template: '<p> <b>am getter:</b> {{ something }}</p>'
    }
  }])

  .directive('adv', ['$parse', function($parse) {
    return {
      restrict: 'E',
      scope: true, // when set to shared scope -- false -- its no longer reusable
      link: function(scope, element, attrs) {
        //scope.inner = $parse(attrs['eq']);
        scope.inner = $parse(attrs['eq'])();
      },
      //template: '<p>{{ inner() }}</p>'
      template: '<p>{{ inner }}</p>'
    }
  }])

  .directive('pro', ['$parse', function($parse) {
    return {
      restrict: 'EA',
      scope: true,
      link: function(scope, element, attrs) {
        var course = {subject: "Computer Science"},
            getter = $parse('subject')
            setter = getter.assign;

        scope.courseName = getter(scope, course);
        scope.parseAgain = function() {
          scope.courseName = setter(scope, scope.inName);
          scope.courseName = getter(scope);
          //scope.courseName = scope.inName;
        };
      },
      template: '<input ng-model="inName" ng-change="parseAgain()" /><h3>{{courseName}}</h3>'
    }
  }])
  ;
