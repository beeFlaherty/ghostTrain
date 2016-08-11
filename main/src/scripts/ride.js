(function() {
	'use strict';

	module.exports = function(userData, systemData) {
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
	};
}());