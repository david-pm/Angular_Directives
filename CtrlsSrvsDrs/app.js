
var module = angular.module('my.new.module', []);

	module.service('Movie', [ '$rootScope', function($rootScope){
		var service = {
			movies: [
				 { title: "Dune", director: "David Lynch" },
				 { title: "Ex Machina", director: "Alex Garland" },
				 { title: "Interstellar", director: "Christopher Nolan" },
				 { title: "LOTR", director: "Peter Jackson" }
			],
			removeMovie: function () {
				service.movies.length--;
				$rootScope.$emit( 'movies.update' );
			},
			addMovie: function (movie) {
				service.movies.push(movie);
				$rootScope.$emit( 'movies.update' );
			}
		}

		return service;
	}]);

	module.controller('MoviesListController', [ '$scope','Movie', function($scope, Movie){
		$scope.$on( 'movies.update', function(event) {
			$scope.movies = Movie.movies;
		});

		$scope.movies = Movie.movies;
	}]);
	
	module.directive( "addMovieButton", [ 'Movie', function( Movie ) {
	   return {
	     link: function( scope, el, attrs ) {
	       el.on("click", function() {
	           Movie.addMovie( { title: "Star Wars", director: "George Lucas" } );
	           scope.$apply();
	       });
	     }
	   }
	}]);

	module.directive( "removeMovieButton", [ 'Movie', function( Movie ) {
	   return {
	     link: function( scope, el, attrs ) {
	       el.on("click", function() {
	           Movie.removeMovie();
	           scope.$apply();
	       });
	     }
	   }
	}]);
