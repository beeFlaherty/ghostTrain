(function() {
  'use strict';

  module.exports = function(Vue) {
    var AnimationComponent =
      Vue.extend({
        template: '#animation_template',
        props: ['type']
      });
    Vue.component('gt-animation', AnimationComponent);
  };
}());