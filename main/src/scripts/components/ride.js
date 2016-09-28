(function() {
  'use strict';

  var endScreenDelay = 1000;

  module.exports = function(Vue) {
    var RideComponent =
      Vue.extend({
        template: '#ride_template',
        props: ['user', 'system', 'configurable'],
        ready: function() {
          var self = this;

          document.querySelectorAll('a-entity[kart]')[0].addEventListener('finished', function() {
            setTimeout(function() { // This timeout is intentional, add a pause before the ride disappears
              self.$root.section = 'end';
            }, endScreenDelay);
          });
        }
      });
    Vue.component('gt-ride', RideComponent);
  };
}());