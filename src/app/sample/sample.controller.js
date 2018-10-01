'use strict';

angular.module('MyApp')
	.controller('SampleCtrl',
		['$scope', 'SampleService',
		function ($scope, SampleService) {

			$scope.list = null;
			$scope.error = null;

			$scope.loadData = function() {
				SampleService.getData()
				.then(function(data) {
					$scope.list = data.data;
				},
				function(err) {
					$scope.error = 'Sorry, error in getting data: ' + err;
				});
			};

			$scope.loadData();

	}]);
