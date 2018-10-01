'use strict';

describe('SampleCtrl', function(){

	var scope;
	var createCtrl;
	var mockSampleService = {};

	beforeEach(module('MyApp'));

	beforeEach(module(function ($provide) {
		$provide.value('SampleService', mockSampleService);
	}));

	beforeEach(inject(function($rootScope, $controller, $q) {

		mockSampleService.getData = function() {
			return $q.when({data: '<DATA>'});
		};

		scope = $rootScope.$new();
		createCtrl = function() {
			$controller('SampleCtrl', {$scope: scope});
		};
	}));

	describe('.constructor', function() {

		it('can be created', function() {
			expect(createCtrl).to.not.throw();
		});

	});


	describe('#loadData', function() {

		describe('success', function() {

			beforeEach(function(){
				createCtrl();
				scope.loadData();
				scope.$apply();
			});

			it('get the correct data', function() {
				expect(scope.list).to.equal('<DATA>');
			});

			it('display no error', function() {
				expect(scope.error).to.be.null;
			});

		});

		describe('error', function() {

			beforeEach(inject(function($q){
				mockSampleService.getData = function() {
					return $q.reject('error');
				};
				createCtrl();
				scope.loadData();
				scope.$apply();
			}));

			it('display error', function() {
				expect(scope.error).to.contain('err');
			});

			it('does not update list', function() {
				expect(scope.list).to.be.null;
			});

		});

	});

});
