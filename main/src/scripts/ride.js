(function() {
	'use strict';

	module.exports = function(userData, systemData, configurableData) {
		var RoomComponent = Vue.extend({
			template: '#room_template',
			props: ['index', 'room']
		});
		Vue.component('gt-room', RoomComponent);

		var ScareComponent = Vue.extend({
			template: '#scare_template',
			props: ['index', 'monster', 'sound', 'animation'],
			methods: {
				getPosition: function(index) {
					return  (this.$root.system.room.height * 0.5) - // Offset from center of room
						(
							(this.$root.system.room.height / (this.$root.system.monster.perroom + 1)) * (index + 1)
						);
				}
			}
		});
		Vue.component('gt-scare', ScareComponent);

		var AnimationComponent = Vue.extend({
			template: '#animation_template',
			props: ['type']
		});
		Vue.component('gt-animation', AnimationComponent);

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