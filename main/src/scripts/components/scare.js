(function() {
  'use strict';

  module.exports = function(Vue) {
    var ScareComponent = Vue.extend({
      template: '#scare_template',
      props: ['index', 'monster', 'sound', 'animation', 'pos', 'rotation']
    });
    Vue.component('gt-scare', ScareComponent);
  };
}());