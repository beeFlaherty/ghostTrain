(function() {
  'use strict';

  var endScreenDelay = 3000;

  module.exports = function(Vue) {
    var RideComponent =
      Vue.extend({
        template: '#ride_template',
        props: ['user', 'system', 'configurable'],
        data: {
          loaded: false
        },
        ready: function() {
          var self = this;

          document.querySelectorAll('a-entity[kart]')[0].addEventListener('finished', function() {
            setTimeout(function() { // This timeout is intentional, add a pause before the ride disappears
              self.$root.goto('end');
            }, endScreenDelay);
          });

          document.querySelectorAll('a-assets')[0].addEventListener('loaded', function() {
            self.loaded = true;

            var loadingContainer = document.getElementsByClassName('loadingContainer');
            while (loadingContainer.length > 0) {
                loadingContainer[0].remove();
            }
          });
        }
      });
    Vue.component('gt-ride', RideComponent);
  };
}());
