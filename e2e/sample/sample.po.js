/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var SamplePage = function() {

	this.testURL = 'http://localhost:3000/#/sample';
	this.pageTitle = element(by.className('page-title'));

};

module.exports = new SamplePage();

