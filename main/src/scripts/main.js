(function() {
	'use strict';

	var userData = require('./userData');
	var systemData = require('./systemData');

	var ride = require('./ride')(userData, systemData);
}());