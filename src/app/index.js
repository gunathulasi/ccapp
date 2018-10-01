'use strict';

angular.module('MyApp', ['ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/main/index.html',
				controller: 'MainCtrl'
			})
			.when('/sample', {
				templateUrl: 'app/sample/index.html',
				controller: 'SampleCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})

	.controller('NavBarCtrl', ['$scope', function ($scope) {
			$scope.isCollapsed = true;
	}])

;
