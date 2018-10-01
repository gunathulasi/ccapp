'use strict';

describe('Feature: Sample Page', function() {

	var page = require('./sample.po');

	describe('Visit Page', function() {

		before(function() {
			browser.get(page.testURL);
		});

		it('the page should show a title', function() {
			expect(page.pageTitle.getText()).to.eventually.equal('Sample Page');
		});

	});

});


