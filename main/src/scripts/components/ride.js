(function() {
  'use strict';

  module.exports = function(Vue) {
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