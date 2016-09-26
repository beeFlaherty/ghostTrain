(function() {
  'use strict';

  module.exports = function() {
    var aframeKart = require('./aframe-kart')();
    var aframeCollider = require('./aframe-collider')();

    Vue.partial('room0-partial', document.getElementById('room0-partial').innerHTML);
    Vue.partial('room1-partial', document.getElementById('room1-partial').innerHTML);

    var RoomComponent =
      Vue.extend({
        template: '#room_template',
        props: ['index', 'room', 'position', 'theme']
      });
    Vue.component('gt-room', RoomComponent);

    var ScareComponent = Vue.extend({
      template: '#scare_template',
      props: ['index', 'monster', 'sound', 'animation', 'pos', 'rotation'],
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

    var LightComponent = Vue.extend({
      template: '#light_template',
      props: ['index', 'color', 'style', 'position']
    });
    Vue.component('gt-light', LightComponent);

    var AnimationComponent =
      Vue.extend({
        template: '#animation_template',
        props: ['type']
      });
    Vue.component('gt-animation', AnimationComponent);

    var RideComponent =
      Vue.extend({
        template: '#ride_template',
        props: ['user', 'system', 'configurable'],
        init: function() {
          var self = this;

          // Need to listen for A-Frame having initiated instead of this dirty timeout
          setTimeout(function() {
            document.querySelectorAll('a-entity[kart]')[0].addEventListener('finished', function() {
              setTimeout(function() { // This timeout is intentional, add a pause before the ride disappears
                self.$root.section = 'end';
              }, 1000);
            });
          }, 1000);
        }
      });
    Vue.component('gt-ride', RideComponent);
  };
}());
