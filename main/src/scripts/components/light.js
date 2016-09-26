(function() {
  'use strict';

  module.exports = function(Vue) {
    var LightComponent = Vue.extend({
      template: '#light_template',
      props: ['index', 'color', 'style', 'position']
    });
    Vue.component('gt-light', LightComponent);
  };
}());