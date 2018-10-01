'use strict';

angular.module('MyApp')
	.factory('SampleService',
		['$http', '$q',
		function ($http, $q) {

			return {

				getData: function(){

					var defer = $q.defer();

					$http.get('/assets/data/sample.json')
						.success(function(data) {
							defer.resolve(data);
						})
						.error(function(data, status, headers) {
							// console.log('error getting data');
							defer.reject('Error in getting data.');
						});

					return defer.promise;
				}

			};

	}]);
