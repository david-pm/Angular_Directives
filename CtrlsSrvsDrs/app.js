
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
				$rootScope.$broadcast( 'movies.update' );
			},
			addMovie: function (title, director) {
				var movie = {
					title: title,
					director: director
				}
				service.movies.push(movie);
				$rootScope.$broadcast( 'movies.update' );
			}
		}

		return service;
	}]);

	module.controller('MoviesListController', [ '$scope','Movie', function($scope, Movie){
		$scope.toggleAdd = false;
		$scope.$on('movies.update', function(event) {
			console.log(event);
			$scope.title = "";
			$scope.director = "";
			$scope.movies = Movie.movies;
		});

		$scope.movies = Movie.movies;
	}]);
	
	module.directive( "addMovieButton", [ 'Movie', function( Movie ) {
	   return {
	     link: function( scope, el, attrs ) {
	        el.on("click", function() {
	            //Movie.addMovie( { title: "Star Wars", director: "George Lucas" } );
	            Movie.addMovie(scope.title, scope.director);
	            scope.toggleAdd = false;
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
