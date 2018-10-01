'use strict';

describe('SampleService', function(){

	var service;
	var mockBackend;

	beforeEach(module('MyApp'));

	beforeEach(inject(function(SampleService, $httpBackend) {
		service = SampleService;
		mockBackend = $httpBackend;
	}));


	describe('#getData: success', function() {

		var result;

		beforeEach(function() {

			// This is a temporary hack. Should be replaced with actual API call later.
			mockBackend.expectGET('/assets/data/sample.json')
			.respond('<result>');

			service.getData().then(function(data) {
				result = data;
			});

			mockBackend.flush();

		});

		it('should make an HTTP GET request', function() {
			mockBackend.verifyNoOutstandingExpectation();
			mockBackend.verifyNoOutstandingRequest();
		});

		it('should resolve the correct data', function() {
			expect(result).to.equal('<result>');
		});

	});

	describe('#getData: failure', function() {

		var result;
		var error;

		beforeEach(function() {

			// This is a temporary hack. Should be replaced with actual API call later.
			mockBackend.expectGET('/assets/data/sample.json')
			.respond(404, {msg: 'Not Found'});

			service.getData().then(function(data) {
				result = data;
			},
			function(err) {
				error = err;
			});

			mockBackend.flush();

		});

		it('should make an HTTP GET request', function() {
			mockBackend.verifyNoOutstandingExpectation();
			mockBackend.verifyNoOutstandingRequest();
		});

		it('should not result any data', function() {
			expect(result).to.be.undefined;
		});

		it('should reject with error', function() {
			expect(error).to.contain('Error');
		});

	});


});
