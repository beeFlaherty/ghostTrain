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
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#F00', 'light': 'static'},
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#0F0', 'light': 'glow'},
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#00F', 'light': 'static'},
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#FF0', 'light': 'flicker'},
			{'monster':'ma', 'sound':'sa', 'position':'pa', 'colour': '#0FF', 'light': 'static'}
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

	var RoomComponent = Vue.extend({
		template: '#room_template',
		props: ['index', 'room', 'system']
	});
	Vue.component('gt-room', RoomComponent);

	var MonsterComponent = Vue.extend({
		template: '#monster_template',
		props: ['type', 'sound', 'animation']
	});
	Vue.component('gt-monster', MonsterComponent);

	var LightComponent = Vue.extend({
		template: '#light_template',
		props: ['type']
	});
	Vue.component('gt-light', LightComponent);

	var ride = new Vue({
		el: '#ride_output',
		template: '#ride_template',
		data: {
			user: userData,
			system: systemData
		}
	});
}());