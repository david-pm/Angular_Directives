
var module = angular.module('my.new.module', []);

	module.service('MovieService', [ '$rootScope', function($rootScope){
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

	module.controller('MoviesListController', [ '$scope','MovieService', function($scope, MovieService){
		$scope.toggleAdd = false;
		$scope.$on('movies.update', function(event) {
			console.log(event);
			$scope.title = "";
			$scope.director = "";
			$scope.movies = MovieService.movies;
		});

		$scope.movies = MovieService.movies;
	}]);
	
	module.directive( "addMovieButton", [ 'MovieService', function( MovieService ) {
	   return {
	     link: function( scope, el, attrs ) {
	        el.on("click", function() {
	            //MovieService.addMovie( { title: "Star Wars", director: "George Lucas" } );
	            MovieService.addMovie(scope.title, scope.director);
	            scope.toggleAdd = false;
	            scope.$apply();
	        });
	     }
	   }
	}]);

	module.directive( "removeMovieButton", [ 'MovieService', function( MovieService ) {
	   return {
	     link: function( scope, el, attrs ) {
        	el.on("click", function() {
            	MovieService.removeMovie();
            	scope.$apply();
        	});
	     }
	   }
	}]);
