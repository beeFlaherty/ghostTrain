(function() {
	'use strict';

	module.exports = function(userData, systemData, configurableData) {
		var RoomComponent = Vue.extend({
			template: '#room_template',
			props: ['index', 'room', 'system', 'configurable']
		});
		Vue.component('gt-room', RoomComponent);

		var ScareComponent = Vue.extend({
			template: '#scare_template',
			props: ['index', 'monster', 'sound', 'animation', 'system', 'configurable']
		});
		Vue.component('gt-scare', ScareComponent);

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
				system: systemData,
				configurable: configurableData
			}
		});
	};
}());