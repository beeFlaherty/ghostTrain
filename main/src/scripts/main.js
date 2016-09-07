(function() {
	'use strict';

	var userData = require('./userData');
	var systemData = require('./systemData');
	var configurableData = require('./configurableData');

	var ui = require('./ride')(systemData, userData);
	var ride = require('./ui')(systemData);


    var app = new Vue({
      el: '#app',
      data: {
        user: userData,
        system: systemData,
        configurable: configurableData
      }
    });
}());
