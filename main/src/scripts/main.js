(function() {
	'use strict';

	var userData = require('./userData');
	var systemData = require('./systemData');
	var configurableData = require('./configurableData');

	var ride = require('./ride')(userData, systemData, configurableData);
}());