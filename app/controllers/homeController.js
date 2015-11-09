define([
	'app',
	'services/addService'
], function(app) {
	app.controller('homeController', function($scope, $routeParams, addService) {
		// initial values
		$scope.text = 'Welcome!';
		$scope.number1 = $routeParams.number1 || 1;
		$scope.number2 = $routeParams.number2 || 41;
		$scope.result = addService.calculate($scope.number1, $scope.number2);

		// function for refreshing the result
		$scope.refresh = function() {
			$scope.result = addService.calculate($scope.number1, $scope.number2);
		}
	});
});