define([
	'app'
], function(app) {
	app.factory('addService', function() {
		return {
			calculate: function(number1, number2) {
				return parseInt(number1) + parseInt(number2);
			}
		};
	});
});