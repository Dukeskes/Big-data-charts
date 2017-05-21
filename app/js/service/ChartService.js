angular.module(APP_ID).service('chartService', ['http', function(http) {
	this.fetchEntries = function(params) {
		return http.post('ws/chart/', params);
	};

}]);
