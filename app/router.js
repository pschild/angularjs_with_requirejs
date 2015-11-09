define([
	'app',
	'controllers/homeController',
	'controllers/aboutController'
], function(app) {
	return app.config(function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'homeController'
			})
			.when('/home/:number1/:number2', {
				templateUrl: 'partials/home.html',
				controller: 'homeController'
			})
			.when('/about', {
				templateUrl: 'partials/about.html',
				controller: 'aboutController'
			})
			.otherwise({
				redirectTo: '/home'
			});
	});
});