(function(){

	angular.module('Portfolio', ['ngRoute'])

	.config(function($routeProvider){

		$routeProvider.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'Home'
		});

		$routeProvider.when('/single/:project', {
			templateUrl: 'templates/single.html',
			controller: 'Single'
		});

		$routeProvider.when('/resume', {
			templateUrl: 'templates/resume.html',
			controller: 'Resume'
		});

	})

	.run(['$rootScope', function($rootScope){

		$rootScope.projects = allProjects;

		$('#hamburger').click(function(){
			$(this).toggleClass('active');
			$('nav ul').toggleClass('active');
		});

	}]);

}());