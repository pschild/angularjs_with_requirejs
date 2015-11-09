require.config({
	baseUrl: './app',

	paths: {
		angular: '../bower_components/angular/angular.min',
		ngRoute: '../bower_components/angular-route/angular-route.min'
	},

	shim: {
		angular: {
			exports: 'angular'
		},
		ngRoute: {
			deps: ['angular']
		}
	}
});

require([
	'app',
	'router',
	'controllers/mainController'
], function() {
	angular.bootstrap(document, ['app']);
});