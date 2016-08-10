(function() {
	'use strict';

	// require('./moduleName');

	// Data that will come from the user input form
	var userData = {
		'trainsettings': {
			'music':'aa',
			'name':'train name'
		},
		'rooms':[
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#F00' },
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#0F0' },
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#00F' },
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#FF0' },
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#0FF' }
		]
	};

	// Hardcoded data that we will maintain
	var systemData = {
		'sky': {
			'colour': '#000000'
		},
		'room': {
			'width': 5,
			'height': 10
		}
	};

	var ride = new Vue({
		el: '#ride_output',
		template: '#ride_template',
		data: {
			user: userData,
			system: systemData
		}
	});
}());