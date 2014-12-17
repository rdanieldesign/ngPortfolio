(function(){

	angular.module('Portfolio')

	.controller('Home', ['$scope', '$rootScope', '$anchorScroll', '$location', function($scope, $rootScope, $anchorScroll, $location){

		$scope.projects = $rootScope.projects;

		$scope.scrollTo = function(section){
			console.log(section);
			$location.hash(section);
			$anchorScroll();
		};

	}]);

}());