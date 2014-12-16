(function(){

	angular.module('Portfolio')

	.controller('Home', ['$scope', '$rootScope', function($scope, $rootScope){

		$scope.projects = $rootScope.projects;

	}]);

}());