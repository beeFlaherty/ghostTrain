(function() {
  'use strict';

  module.exports = function(systemData) {
    var aframeKart = require('./aframe-kart')();
    var aframeCollider = require('./aframe-collider')(systemData.monster.triggerDistance);

    var RoomComponent =
      Vue.extend({
        template: '#room_template',
        props: ['index', 'room']
      });
    Vue.component('gt-room', RoomComponent);

    var ScareComponent = Vue.extend({
      template: '#scare_template',
      props: ['index', 'monster', 'sound', 'animation', 'pos'],
      methods: {
        getPosition: function(index) {
          return (this.$root.system.room.height *
              0.5) - // Offset from center of room
            ((this.$root.system.room.height /
                (this.$root.system.monster.perroom + 1)) *
              (index + 1));
        }
      }
    });
    Vue.component('gt-scare', ScareComponent);

    var AnimationComponent =
      Vue.extend({
        template: '#animation_template',
        props: ['type']
      });
    Vue.component('gt-animation', AnimationComponent);

    var LightComponent =
      Vue.extend({
        template: '#light_template',
        props: ['type']
      });
    Vue.component('gt-light', LightComponent);

    var RideComponent =
      Vue.extend({
        template: '#ride_template',
        props: ['user', 'system', 'configurable']
      });
    Vue.component('gt-ride', RideComponent);
  };
}());
