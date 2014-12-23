(function(){

	angular.module('Portfolio')

	.controller('Single', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){

		$scope.single = _.find($rootScope.projects, function(proj){
			return proj.link === $routeParams.project;
		});

		var currentIndex = _.indexOf($rootScope.projects, $scope.single);

		var nextIndex;

		if(currentIndex === $rootScope.projects.length - 1){
			nextIndex = 0;
		} else {
			nextIndex = currentIndex + 1;
		};

		$scope.images = $scope.single.images;

		$scope.nextLink = $rootScope.projects[nextIndex].link;

		console.log($rootScope.projects.tech);

		$scope.techs = $scope.single.tech;

	}]);

}());