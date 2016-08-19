(function() {
	'use strict';

	module.exports = function(userData, systemData, configurableData) {

	AFRAME.registerComponent('collider', {
		schema: {},

		init: function() {
			this.el.sceneEl.addBehavior(this);
		},

		tick: function() {
			var scene = this.el.sceneEl.object3D;
			scene.updateMatrixWorld();

			function getGlobalPosition(obj) {
				var vector = new THREE.Vector3();
				vector.setFromMatrixPosition( obj.matrixWorld );

				return vector;
			}

			function distanceVector(v1, v2) {
				var dx = v1.x - v2.x;
				var dy = v1.y - v2.y;
				var dz = v1.z - v2.z;

				return Math.sqrt( dx * dx + dy * dy + dz * dz );

				// .distanceTo( v ) ?
			}

			var thisPosition = getGlobalPosition(this.el.object3D);
			var others = document.querySelectorAll('a-obj-model[collidable]');

			others.forEach(function(other) {
				var otherPosition = getGlobalPosition(other.object3D);
				var distance = distanceVector(thisPosition, otherPosition);

				if (distance < systemData.monster.triggerDistance) {
					other.addState('hit');
					other.setAttribute('visible', 'true');
				}
			});
		}
	});

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